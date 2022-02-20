$(document).ready(function () {
  //Burger animation
  $("#nav-icon3").on("click", function () {
    $(this).toggleClass("open");
    $(".desktop-menu").toggle("slide", "fast");
  });

  //Burger mobile animation
  $(".burger-menu-mobile").on("click", function () {
    $(this).toggleClass("open");
    $(".mobile-menu").toggle("slide", { direction: "right" }, "fast");
  });

  //Show overlay and desktop menu
  $(".desktop-menu__link--account").on("click", function () {
    $("body").append('<div id="overlay"></div>');
    $("#overlay").fadeIn("fast");
    $(".enterForm").css("display", "flex");
  });

  //Show mobile menu
  $(".mobile-menu__link--account").on("click", function () {
    $(".enterForm-mobile").css("display", "block");
    $("body").css("overflow", "hidden");
  });

  //Close enterForm
  $(".enterForm__close").on("click", function () {
    $("#overlay").fadeOut("fast");
    $("#overlay").remove();
    $(".enterForm").css("display", "none");
  });

  //Close enterForm-mobile
  $(".enterForm-mobile__close").on("click", function () {
    $(".enterForm-mobile").css("display", "none");
    $("body").css("overflow", "scroll");
  });

  //Help popup show
  $(document).click(function (e) {
    if (e.target.classList.contains("help-icon")) {
      $(".helpPopup").toggle();
    } else {
      $(".helpPopup").hide();
    }
  });

  //Hide when click outside of container
  $(document).mouseup(function (e) {
    let container = $(".enterForm");

    // hide login form
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide();
      $("#overlay").fadeOut("fast");
      $("#overlay").css("display", "none");
    }
  });

  //Mobile show pay info details

  $(".pay-types_mobile__titleText").on("click", function (e) {
    switch (e.target.id) {
      case "gbdd":
        $("#gbdd_text").slideToggle();
        $(".gbdd").toggleClass("arrowTransform");

        //back to default
        $("#trial_text").slideUp();
        $(".trial").removeClass("arrowTransform");
        $("#tax_text").slideUp();
        $(".tax").removeClass("arrowTransform");
        $("#rosreestr_text").slideUp();
        $(".rosreestr").removeClass("arrowTransform");
        break;

      case "trial":
        $("#trial_text").slideToggle();
        $(".trial").toggleClass("arrowTransform");

        //back to default
        $("#gbdd_text").slideUp();
        $(".gbdd").removeClass("arrowTransform");
        $("#tax_text").slideUp();
        $(".tax").removeClass("arrowTransform");
        $("#rosreestr_text").slideUp();
        $(".rosreestr").removeClass("arrowTransform");
        break;

      case "tax":
        $("#tax_text").slideToggle();
        $(".tax").toggleClass("arrowTransform");

        //back to default
        $("#gbdd_text").slideUp();
        $(".gbdd").removeClass("arrowTransform");
        $("#trial_text").slideUp();
        $(".trial").removeClass("arrowTransform");
        $("#rosreestr_text").slideUp();
        $(".rosreestr").removeClass("arrowTransform");
        break;

      case "rosreestr":
        $("#rosreestr_text").slideToggle();
        $(".rosreestr").toggleClass("arrowTransform");

        //back to default
        $("#gbdd_text").slideUp();
        $(".gbdd").removeClass("arrowTransform");
        $("#trial_text").slideUp();
        $(".trial").removeClass("arrowTransform");
        $("#tax_text").slideUp();
        $(".tax").removeClass("arrowTransform");
        break;

      default:
        break;
    }
  });
});
