<!-- JS Implementing Plugins -->
$(document).on('ready', function () {
    // initialization of counter
    $('.js-counter').each(function() {
      var counter = new HSCounter($(this)).init();
    });
  });
