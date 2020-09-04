$(document).ready(function () {
  $("#slider ul").bxSlider({
    mode: "fade",
    auto: true,
    captions: true,
    pager: false,
  });
});

var feed = new Instafeed({
  get: "user",
  userId: "7023133081",
  clientId: "f3d84fc6f9cc4340853501dc802127d9",
  accessToken: "7023133081.f3d84fc.06b1b92e9bfd4675b688895819f36976",
  resolution: "standard_resolution",
  sortBy: "most-recent",
  limit: "12",
  template:
    '<a href="{{link}}" target="_blank"><div style="background-image:url({{image}})"></div></a>',
});
feed.run();

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });
