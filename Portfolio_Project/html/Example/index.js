$(document).on("ready", function () {
        // initialization of video on background
        $(".js-video-bg").each(function () {
          var videoBg = new HSVideoBg($(this)).init();
        });

        // initialization of text animation (typing)
        var typed = new Typed(".js-text-animation", {
          strings: [
            "Professional",
            "Web Desiner",
            "Video Editor",
            "Freelancer",
          ],
          typeSpeed: 70,
          loop: true,
          backSpeed: 40,
          backDelay: 2000,
        });

        // initialization of aos
        AOS.init({
          duration: 650,
          once: true,
        });
      });
  