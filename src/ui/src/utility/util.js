'use strict';
var helix = helix || {};
helix.util = helix.util || {};

$(document).ready(function () {
  var that = {};

  /**
   * Method responsible for dynamically generating drowndown <option> from brands list.
   * Registers a change event to dropdown element and adds selected texts and values
   * as data attributes to dropdown element itself. Caller can just refer data-selected-texts
   * and data-selected-values data attributes to get selected texts and values.
   *
   * @param {jQueryObject} multiSelect Brand multi-select dropdown
   */
  that.renderBrands = function (multiSelect) {
    var brands = brandName; // brandName array from deployment_data.js
    for (var i = 0; i < brands.length; i++) {
      var [value, text] = brands[i]; //brands[i][0], brands[i][1]
      $('<option/>').val(value).text(text).appendTo($(multiSelect));
    }

    that._registerMultiSelectChangeEvent(multiSelect);
  };

  /**
   * Method responsible for dynamically generating drowndown <option> from locales list.
   * Registers a change event to dropdown element and adds selected texts and values
   * as data attributes to dropdown element itself. Caller can just refer data-selected-texts
   * and data-selected-values data attributes to get selected texts and values.
   *
   * @param {jQueryObject} multiSelect Locale multi-select dropdown
   */
  that.renderMarkets = function (multiSelect) {
    var markets = localeName; // localeName array from deployment_data.js
    var previousRegion = '';
    var optgroup = '';
    for (var i = 0; i < markets.length; i++) {
      var [value, region, text] = markets[i]; //markets[i][0], markets[i][1], markets[i][2]

      if (previousRegion !== region) {
        optgroup = $('<optgroup/>').attr('label', region);
        optgroup.appendTo($(multiSelect));
        previousRegion = region;
      }

      $('<option/>').val(value).text(text).appendTo(optgroup);
    }
    // TODO: get a flag from the user to decide whether a change event has to
    // registered or not. If the user has decide not to use register, then they can't
    // rely on data-selected-* attributes to get selected options
    that._registerMultiSelectChangeEvent(multiSelect);
  };

  /**
   * Method responsible to fetch selected brands from from brands dropdown.
   * If there is no selection then first item is selected automatically.
   *
   * @param {jQueryObject} multiSelect Locale multi-select dropdown
   */
  that.getSelectedBrands = function (multiSelect) {
    return that._getSelectedItems(multiSelect);
  };

  /**
   * Method responsible to fetch selected brands from from locales dropdown.
   * If there is no selection then first item is selected automatically.
   *
   * @param {jQueryObject} multiSelect Locale multi-select dropdown
   */
  that.getSelectedLocales = function (multiSelect) {
    return that._getSelectedItems(multiSelect);
  };

  /**
   *
   * @param {string} hostname - Pass hostname without protocol/scheme
   * @see https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname
   * @returns Locale from given hostname, undefined if there is no match
   */
  that.findLocaleFromUrl = (hostname) => {
    // localeName is from deployment_data.js
    let selectedLocale = localeName.find((item) => {
      const locale = item[0].toLowerCase(); // Locale prefix from localeName
      // Perform exact match
      const regex = new RegExp('\\b(' + locale + ')\\b');
      return hostname.toLowerCase().match(regex) !== null;
    });

    // Didn't find exact match so checking exception list
    if (selectedLocale === undefined) {
      brandUrlExceptionList.forEach((itemException) => {
        const hasFound = itemException.includes(hostname.toLowerCase());
        if (hasFound) {
          // Extracting brand info from exception list
          const [, prefix, region, name, ...rest] = itemException;
          selectedLocale = [prefix, region, name];
        }
      });
    }
    // console.log(selectedLocale);
    /*  if (selectedLocale === undefined) {
    console.log(hostname);
  } */
    return selectedLocale;
  };

  /**
   *
   * @param {string} hostname - Pass hostname without protocol/scheme.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname
   * @returns Brand from given hostname, undefined if there is no match
   */
  that.findBrandFromUrl = (hostname) => {
    // brandName is from deployment_data.js
    let selectedBrand = brandName.find((item) => {
      const brand = item[1].toLowerCase(); // Brand from brandName
      // Perform exact match
      const regex = new RegExp('\\b(' + brand + ')\\b');
      return hostname.toLowerCase().match(regex) !== null;
    });

    // Didn't find exact match so checking exception list
    if (selectedBrand === undefined) {
      brandUrlExceptionList.forEach((itemException) => {
        const hasFound = itemException.includes(hostname.toLowerCase());
        if (hasFound) {
          // Extracting brand info from exception list
          const [, , , , ...rest] = itemException;
          selectedBrand = rest;
        }
      });
    }
    //console.log(selectedBrand);
    return selectedBrand;
  };

  /**
   *
   * @param {string} url Pass the url
   * @returns A URL object if the given url string is a valid url else a null is returned
   */
  that.isValidURL = function (url) {
    try {
      return new URL(url);
    } catch (e) {
      return null;
    }
  };

  // Method to register change event
  that._registerMultiSelectChangeEvent = function (multiSelect) {
    multiSelect.off('change').on('change', function (e) {
      var selectedItems = $(this).find('option:selected');
      var selectedValues = selectedItems
        .toArray()
        .map((item) => item.value)
        .join();

      var selectedTexts = selectedItems
        .toArray()
        .map((item) => item.text)
        .join();

      multiSelect.attr({
        'data-selected-texts': selectedTexts,
        'data-selected-values': selectedValues,
      });
    });

    multiSelect
      .find('optgroup')
      .off('click')
      .on('click', function (e) {
        e.preventDefault();
        var canSelect;
        if ($(this).hasClass('active')) {
          canSelect = false;
          $(this).removeClass('active');
        } else {
          canSelect = true;
          $(this).addClass('active');
        }
        $(this).children().prop('selected', canSelect).trigger('change');
      });

    multiSelect
      .find('option')
      .off('click')
      .on('click', function (e) {
        e.stopPropagation();
      });
  };

  // Get selected items from the dropdown
  that._getSelectedItems = function (multiSelect) {
    var selectedItems = multiSelect.find('option:selected');

    if (
      selectedItems.length === 0 ||
      (!multiSelect.is('[multiple]') &&
        multiSelect.data('selected-values') === undefined)
    ) {
      // For multiple select dropdown - if there is no selection, then select first option
      // For simple dropdown - we need to trigger change to set the data-selected-* attiributes
      multiSelect
        .find('option')
        .first()
        .prop('selected', true)
        .trigger('change');
    }

    return {
      selectedValues: multiSelect.attr('data-selected-values'),
      selectedTexts: multiSelect.attr('data-selected-texts'),
    };
  };

  helix.util = that;
});
