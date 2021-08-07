$(document).on('ready', function () {
    // initialization of go to
    $('.js-go-to').each(function () {
      var goTo = new HSGoTo($(this)).init();
    });
  });
