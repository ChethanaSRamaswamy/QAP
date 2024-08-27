'use strict';

$(document).ready(function () {
  $('.gobutton').click(function () {
    // TODO: Change the button to anchor tag, and remove this click event
    document.location.href = '../../index.html';
  });

  $('.js-start-va').click(function (e) {
    e.preventDefault();
    const ticketId = $('.js-ticket-id').val().trim();

    if (ticketId === '') {
      alert('Please enter ticket id');
      $('.js-ticket-id').focus();
      return;
    }

    // Actually TARGETDEVICE is not required for URL comparison implementation.
    // Basically script should run SD-PROD-VIS-PC.config.js
    // Fix it while building "Brand Specific"
    let urlParams = `token=token2105&`;
    urlParams += `JIRAID=${ticketId}`;

    urlParams = window.btoa(encodeURI(urlParams));

    urlParams = './ct_test_run.html?callParam=' + urlParams;
    window.open(urlParams, '_blank');
  });
});
