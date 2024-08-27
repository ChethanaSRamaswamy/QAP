'use strict';

$(document).ready(function () {
  if (new URLSearchParams(window.location.search).get('showbranch') === '1') {
    $('.branch-details-container').removeClass('hidden');
  }
  var $brands = $('.brands');
  var $locales = $('.locales');
  //const $userSelection = $('.js-user-selection');
  const $userSelection = $('.js-user-selection[name="va_options"]');
  const $compareUrls = $('.js-compare-urls-selection');
  const $brandSelections = $('.js-brand-specific-selection');
  const $featuresToTest = $('.js-features-to-test');

  // Build brands dropdown
  helix.util.renderBrands($brands);

  // Build locales dropdown
  helix.util.renderMarkets($locales);

  $('.gobutton').click(function () {
    // TODO: Change the button to anchor tag, and remove this click event
    document.location.href = '../../index.html';
  });

  $('.js-add-cookie').click(function (e) {
    e.preventDefault();
    var $newCookie = $('.js-cookie-details').first().clone();
    $newCookie.find('.cookie-name, .cookie-value').val('');
    $('.js-site-cookies').append($newCookie);
  });

  $('.js-start-va').click(function (e) {
    e.preventDefault();
    let selectedBrands = helix.util.getSelectedBrands($brands).selectedValues;
    let selectedLocales =
      helix.util.getSelectedLocales($locales).selectedValues;
    let cookies = [];

    const ticketId = $('.js-ticket-id').val().trim();
    const addWait = $('.js-wait-to-add').val().trim();
    const sourceUrl = $('.js-source-url').val().trim();
    const compareUrl = $('.js-compare-url').val().trim();
    const targetDevice = $('.js-device').val();
    let hideElements = $('.js-hide-elements').val().trim();
    let ignoreElements = $('.js-ignore-elements').val().trim();
    const revTag = $('.js-rev-tag').val().trim();
    const $userCookies = $('.js-cookie-details');
    const optedPath = $userSelection.filter(':checked').val();
    const doNewProdBranch = $('.js-prod-branch').is(':checked');
    const doNewFeatureBranch = $('.js-feature-branch').is(':checked');

    const objSourceUrl = helix.util.isValidURL(sourceUrl);
    if (objSourceUrl === null) {
      alert('Please enter source url');
      $('.js-source-url').focus();
      return;
    }

    const objCompareUrl = helix.util.isValidURL(compareUrl);
    if (objCompareUrl === null) {
      alert('Please enter compare url');
      $('.js-compare-url').focus();
      return;
    }

    if (ticketId === '') {
      alert('Please enter ticket id');
      $('.js-ticket-id').focus();
      return;
    }

    $userCookies.each(function () {
      const cookieName = $(this).find('.cookie-name').val();
      const cookieValue = $(this).find('.cookie-value').val();
      let cookie;
      if (cookieName !== '' && cookieValue !== '') {
        cookie = { [cookieName]: cookieValue };
        cookies.push(cookie);
      }
    });

    // Revision tag is just a cookie so adding it to cookies array
    if (revTag !== '') {
      const revTagCookie = {
        ELC_SITE_TAG: revTag,
      };
      cookies.push(revTagCookie);
    }

    if (optedPath === 'compare_urls') {
      // For url comparison get brand and locale details from
      // source url. This is a must to dynamically append http credentails
      // to the urls instead of asking user to append it
      // Note: Using source url for finding brand and locale assuming
      // source and compare urls are from same brand.
      selectedBrands = helix.util.findBrandFromUrl(objSourceUrl.hostname)[0];
      selectedLocales = helix.util.findLocaleFromUrl(objSourceUrl.hostname)[0];
    }

    if (hideElements === '') {
      hideElements = 'NA'; // Not applicable, NA is passed to retain the argument position
    }

    if (ignoreElements === '') {
      ignoreElements = 'NA'; // Not applicable, NA is passed to retain the argument position
    }

    // Actually TARGETDEVICE is not required for URL comparison implementation.
    // Basically script should run SD-PROD-VIS-PC.config.js
    // Fix it while building "Brand Specific"
    let urlParams = `token=token2105&`;
    urlParams += `BRANDS=${selectedBrands}&`;
    urlParams += `LOCALES=${selectedLocales}&`;
    urlParams += `JIRAID=${ticketId}&`;
    urlParams += `WAIT=${addWait}&`;
    urlParams += `SOURCEURL=${objSourceUrl.hostname + objSourceUrl.pathname}&`;
    urlParams += `COMPAREURL=${
      objCompareUrl.hostname + objSourceUrl.pathname
    }&`;
    urlParams += `TARGETDEVICE=${targetDevice}&`;
    urlParams += `COOKIES=${encodeURIComponent(JSON.stringify(cookies))}&`;
    urlParams += `HIDE=${window.btoa(encodeURIComponent(hideElements))}&`;
    urlParams += `IGNORE=${window.btoa(encodeURIComponent(ignoreElements))}&`;
    urlParams += `NEWPRODBRANCH=${doNewProdBranch}&`;
    urlParams += `NEWFEATBRANCH=${doNewFeatureBranch}&`;

    urlParams = window.btoa(encodeURI(urlParams));

    urlParams = './va_test_run.html?callParam=' + urlParams;
    window.open(urlParams, '_blank');
  });

  // Toggle form fields based on selection
  $userSelection.click(function () {
    const selectedOption = $(this).val();
    $compareUrls.add($brandSelections).add($featuresToTest).addClass('hidden');

    selectedOption === 'compare_urls' && $compareUrls.removeClass('hidden');
    selectedOption === 'brand_specific' &&
      $brandSelections.add($featuresToTest).removeClass('hidden');
  });

  $userSelection.first().click();
});
