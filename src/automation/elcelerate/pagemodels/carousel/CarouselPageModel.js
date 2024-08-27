const PageModel = require('../PageModel.js');

class CarouselPageModel extends PageModel {
  constructor(testInfo, page, data) {
    super(testInfo, page, data);
  }

  /**
   * Click to the Homepage url Carousel.
   * @param {string} arrowLocators - Locator for the next and prv arrrow key element.
   * @param {string} productLocator - Locator for the product image src element.
   * @param {string} waitTime - Timeout for the after pick the answer to be page wait.
   * @returns {Promise<void>}
   * @memberof CarouselPageModel
   */
  clickHomePageCarousel = async (
    carouselArrowLocatorsElem,
    productLocatorElem,
    waitTime
  ) => {
    for (let iCnt = 0; iCnt < carouselArrowLocatorsElem.length; iCnt++) {
      const element = carouselArrowLocatorsElem[iCnt];
      if (element) {
        const isVisible = await this.page.locator(element).isVisible();
        if (isVisible) {
          for (let clickCount = 0; clickCount < 2; clickCount++) {
            await this.page.locator(element).click({ force: true });
            await this.page.waitForTimeout(parseInt(waitTime));
            await this.verifyCarouselImageVisible(productLocatorElem);
            await this.screenshot();
          }
        }
      }
    }
  };

  /**
   * vaildate the carousel image visiblity.
   * @param {string} productLocator - Locator for the product image src element.
   * @returns {Promise<void>}
   * @memberof CarouselPageModel
   */
  verifyCarouselImageVisible = async (productLocatorElem) => {
    const productLocatorElements = await this.page.$$(productLocatorElem);
    for (const productLocatorElement of productLocatorElements) {
      const imageSrc = await productLocatorElement.getAttribute('src');

      const isImageVisible = await productLocatorElement.isVisible();
      const isImageLoaded = await productLocatorElement.evaluate(
        (img) => img.complete
      );

      console.log('Image Src:', imageSrc);
      console.log('Is Image Visible:', isImageVisible);
      console.log('Is Image Loaded:', isImageLoaded);
    }
  };
}

module.exports = CarouselPageModel;
