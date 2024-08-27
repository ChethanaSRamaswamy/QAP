const SuiteProvider = require('../../../datainterface/providers/suite_provider');
const parser = require('@babel/parser');

class SuiteAdapter {
  static fetchTestableSites = async (userProvidedTags) => {
    const { brands, locales, supportedSites } =
      await SuiteProvider.fetchTestableSites();

    const newTags = SuiteAdapter.checkAndGenerateTags(
      userProvidedTags,
      brands,
      locales
    );

    let allSites = [];
    try {
      const allPossibleTags = SuiteAdapter.generateTagMatrix(newTags);
      for (let iCnt = 0; iCnt < supportedSites.length; iCnt++) {
        const brandLocalePrefix = supportedSites[iCnt].brandLocale;

        const found = allPossibleTags.filter((item) =>
          item.includes(brandLocalePrefix)
        );
        if (found.length > 0) {
          allSites = [...allSites, ...found];
        }
      }
      // Execute only supported sites
      return allSites;
    } catch (error) {
      if (error.code === 'BABEL_PARSER_SYNTAX_ERROR') {
        throw new Error(
          'The tag format entered is invalid. Please check and update the tag in correct format'
        );
      } else {
        throw error;
      }
    }
  };

  static checkAndGenerateTags = (inputTags, brands, locales) => {
    const parts = inputTags.split('&');
    const hasBrands = parts[0].trim() !== '()';
    const hasMarkets = parts[1].trim() !== '()';
    const hasDevices = parts[2].trim() !== '()';

    const bLists = brands
      .map((item) => {
        return item.brandPrefix;
      })
      .join('|');
    const lLists = locales
      .map((item) => {
        return item.localePrefix;
      })
      .join('|');

    if (!hasBrands) {
      parts[0] = `(${bLists})`;
    }
    if (!hasMarkets) {
      parts[1] = `(${lLists})`;
    }
    if (!hasDevices) {
      parts[2] = `(PC|MOB)`;
    }

    return parts.join('&');
  };

  /**
   * generateTagMatrix function returns a matrix with all possible combinations for the given [brand, locale, device] data from QAP .
   *
   * @param {String} tagExpression send tags in the format (brand, locale, device).
   * Also allows to send multiple tags using | or & as the delimiter .
   * @return The return data is an array that contains data in the format of [brand-locale-device]
   * @example Below are the examples for tag expression
   * ((CL | MC) & (BR) & (PC)) | ((LM | BB | CL) & (UK) & (PC))
   * ((MC & DE) | (MC & FR) | (MC & BE) | (MC & PL)) & ( GUPC | NUPC)
   * (AV&US&PC)|(BB & CA & PC)
   * (BB & CA & PC)
   */
  static generateTagMatrix = (tagExpression) => {
    const ast = parser.parse(tagExpression);

    function traverse(node) {
      if (node.type === 'BinaryExpression') {
        if (node.operator === '&') {
          const leftMatrix = traverse(node.left);
          const rightMatrix = traverse(node.right);
          const result = [];
          for (const leftItem of leftMatrix) {
            for (const rightItem of rightMatrix) {
              result.push(leftItem + '-' + rightItem);
            }
          }
          return result;
        } else if (node.operator === '|') {
          const leftMatrix = traverse(node.left);
          const rightMatrix = traverse(node.right);
          return leftMatrix.concat(rightMatrix);
        }
      } else if (node.type === 'Identifier') {
        return [node.name];
      }
    }

    return traverse(ast.program.body[0].expression);
  };
}

module.exports = SuiteAdapter;
