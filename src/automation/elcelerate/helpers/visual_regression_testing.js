const config = require('../configs/automation.setup');
const env = require('../configs/env');
const AutoHealController = require('../../../../src/datainterface/controllers/AutoHealController');
const { expect } = require('@playwright/test');

// TODO: Add logger
// TODO: Create a provider and adapter for AH

class VisualRegressionTesting {
  constructor(page, data) {
    this.page = page;
    this.data = data;
    this.locatorData = data.locatorData;
    this.testData = data.testData;
    this.siteData = data.siteData;
  }

  visualTestSection = async (section) => {
    if (!config.doVT || section === '') {
      // No VT
      return;
      // TODO: Need site level config to decide whether to do VT?
    }

    const objAHC = new AutoHealController();
    const elem = await this.page.locator(section);
    const boundingBox = await elem.boundingBox();

    let areImagesEqual = false;
    try {
      expect(await elem.screenshot()).toMatchSnapshot({
        name: `add_to_bag.png`,
      });
      areImagesEqual = true;
    } catch (e) {
      areImagesEqual = await this.assessSnapshotComparison(e);
    }

    let dbData = null;
    if (env.updateSnapshots) {
      await objAHC.updateLocationAndDimensions({
        brandLocale: this.siteData.brandLocale,
        featureName: this.siteData.executionContext.feature,
        locatorValue: section,
        locatorKey: '',
        xcoordinate: boundingBox.x,
        ycoordinate: boundingBox.y,
        width: boundingBox.width,
        height: boundingBox.height,
      });
      return; // TODO: return what?
    } else {
      // TODO: reach out to your adapter to get
      // the data, don't talk directly to data platform
      dbData = await objAHC.fetchAutoHealData(
        this.siteData.brandLocale,
        this.siteData.executionContext.feature,
        section,
        ''
      );
      if (dbData === null) {
        return; // TODO: return what?
      }
      const storedCoords = {
        x: dbData.xCoordinate,
        y: dbData.yCoordinate,
      };
      const storedDims = { w: dbData.width, h: dbData.height };
      const areCoordsEqual = await this.checkCoordinates(
        boundingBox,
        storedCoords
      );
      const areDimsEqual = await this.checkDimensions(boundingBox, storedDims);

      console.log('areCoordsEqual: ', areCoordsEqual);
      console.log('areDimsEqual: ', areDimsEqual);
      console.log('areImagesEqual: ', areImagesEqual);

      // Considering two matches as VT pass
      const pass = [areCoordsEqual, areDimsEqual, areImagesEqual].filter(
        (b) => b === true
      );
      // TODO: How to the pass/fail of VT?
      // Fail the test if VT fail?
      // or handle VT in a separate thread?
      console.log('VT Pass?: ', pass.length >= 2);
      return pass.length >= 2;
    }

    // TODO: Handle Exception
    // Check clickable?
    // DOM
  };

  assessSnapshotComparison = async (e) => {
    if (e.matcherResult === undefined) {
      // Some other exception, no idea to throw it or not
      // Decide it later after completing the developement
      return;
    }
    console.log(e.matcherResult.message);
    let hasAcceptableChange = false;
    let hasSizeChange = false;
    let ratioNumber = 0;
    let pixelsNumber = 0;
    const tolerancePixels = 100;
    const lines = e.matcherResult.message.split('\n');
    const elementWithRatio = lines.find((line) => line.includes('ratio'));

    let regex = /ratio\s([\d.]+)\sof/;
    const ratio = elementWithRatio.match(regex);
    if (ratio && ratio[1]) {
      ratioNumber = parseFloat(ratio[1]);
      // console.log(ratioNumber);
    }

    regex = /(\d+)\s+pixels\s\(ratio/;
    const pixels = elementWithRatio.match(regex);
    if (pixels && pixels[1]) {
      pixelsNumber = parseInt(pixels[1]);
      // console.log(pixelsNumber);
    }

    if (elementWithRatio === undefined) {
      hasAcceptableChange = true;
    }

    if (
      elementWithRatio.includes('Expected') &&
      elementWithRatio.includes('received')
    ) {
      // Size has changed and if it is within acceptable threshold then
      // it is not an issue otherwise it is an UI issue
      // Write a logic for this but for now if there is a size change
      // then it is considered as a failure
      // console.log('[ERROR] There is a huge diff so it not a pass');
      hasAcceptableChange = false;
      hasSizeChange = true;
    } else {
      // We can't blindly approve the change
      // if the ratio is high, better to reject it
      // but we need to find a correct threshold
      // console.log('[WARN] There is a diff but considering it as a pass');
      hasAcceptableChange = true;
    }

    // We need to consider hasSizeChange before deciding the return value
    // Also consider pixelsNumber, ratioNumber and tolerancePixels
    return hasAcceptableChange;
  };

  checkCoordinates = async (boundingBox, coords) => {
    if (!boundingBox) {
      return false;
    }
    const permissibleLimit = 15;
    const { x, y } = boundingBox;
    const xDiff = Math.abs(x - coords.x);
    const yDiff = Math.abs(y - coords.y);
    return xDiff <= permissibleLimit && yDiff <= permissibleLimit;
  };

  checkDimensions = async (boundingBox, dims) => {
    if (!boundingBox) {
      return false;
    }
    const permissibleLimit = 15;
    const { width, height } = boundingBox;
    const wDiff = Math.abs(width - dims.w);
    const hDiff = Math.abs(height - dims.h);
    return wDiff <= permissibleLimit && hDiff <= permissibleLimit;
  };
}

module.exports = VisualRegressionTesting;

/*

    // await this.page.goto('https://demo.applitools.com/index.html');
    await this.page.goto('https://demo.applitools.com/index_v2.html');
    // await this.page.screenshot({ path: './tests/search/snapshots/signin.png' });
    // const elem = await this.page.locator('.buttons-w');
    // await expect(elem).toHaveScreenshot('./tests/search/snapshots/signin.png', {
    //   maxDiffPixels: 500,
    //   threshold: 0.5,
    // });
    let fCnt = 0;
    let sCnt = 0;

    // for (let iCnt = 0; iCnt < 600; iCnt = iCnt + 100) {
    //   try {
    //     expect(await elem.screenshot()).toMatchSnapshot({
    //       name: `act${iCnt}.png`,
    //       maxDiffPixels: iCnt,
    //       threshold: 0.5,
    //     });
    //     sCnt++;
    //   } catch (e) {
    //     // console.log(e.message);
    //     fCnt++;
    //   }
    // }
    // console.log('Number of failures: ', fCnt);
    // console.log('Number of passes: ', sCnt);

    // await this.page.evaluate(() => {
    //   const element = document.getElementById('log-in');
    //   if (element) {
    //     // element.style.display = 'none';
    //     // element.textContent = 'Sign in';
    //     element.className = 'btn btn-primary';
    //   }
    // });

    // const elem = await this.page.locator('.buttons-w');
    const elem = await this.page.locator('#log-in');
    expect(await elem.screenshot()).toMatchSnapshot({
      name: `act400.png`,
      // maxDiffPixelRatio: 0.81,
      // maxDiffPixels: 1725,
      // threshold: 0.5,
    });

    // expect(await elem.screenshot()).toMatchSnapshot({
    //   name: `act300.png`,
    //   maxDiffPixels: 200,
    //   // threshold: 0.1,
    // });

    // expect(await elem.screenshot()).toMatchSnapshot({
    //   name: `act400.png`,
    //   maxDiffPixels: 200,
    //   // threshold: 0.1,
    // });

    // expect(await elem.screenshot()).toMatchSnapshot({
    //   name: `act500.png`,
    //   maxDiffPixels: 200,
    //   // threshold: 0.1,
    // });

    // expect(await this.page.screenshot()).toMatchSnapshot(
    //   '2-Google-Chrome1-win32.png',
    //   {
    //     maxDiffPixels: 500,
    //     threshold: 0.5,
    //   }
    // );
    // expect(await page.locator('xpath=//*[@id="__docusaurus']).screenshot()).toMatchSnapshot();

    // RULE-1
    // If there is no change in the size (dimension) but if we differences
    // then we can ignore the result - we can consider it as pass because mostly
    // the difference is because of color or text change
    // Ex: Only color change
    // 1882 pixels (ratio 0.83 of all image pixels) are different

    // RULE-2
    // If there is a change in the size then we should analyze the ratio or pixel
    // differences to decide whether it is a failure or not
    // Ex: the following can't be consider as failure as it is only text change
    // Button with only text change - Expected an image 74px by 31px, received 69px by 31px. 274 pixels (ratio 0.12 of all image pixels) are different
    // Only button comparion - Expected an image 74px by 31px, received 69px by 31px. 1914 pixels (ratio 0.84 of all image pixels) are different
    // But the next example should be considerd as failure
    // Comparing button and block - Expected an image 74px by 31px, received 290px by 100px. 3503 pixels (ratio 0.13 of all image pixels) are different

    // Color, text, size
    // If sizes are different then it means some structural change has happened
    // If no size difference then only slight UI change

*/

/*
Screenshot comparison failed:

  Expected an image 500px by 62px, received 490px by 55px. 39 pixels (ratio 0.01 of all image pixels) are different.

Expected: _vis.spec.js-snapshots\add-to-bag-Google-Chrome1-win32.png
Received: add-to-bag-actual.png
    Diff: add-to-bag-diff.png
Element's position: X = 754, Y = 591



Screenshot comparison failed:

  39 pixels (ratio 0.01 of all image pixels) are different.

Expected: _vis.spec.js-snapshots\add-to-bag-Google-Chrome1-win32.png
Received: add-to-bag-actual.png
    Diff: add-to-bag-diff.png
Element's position: X = 754, Y = 591
*/
