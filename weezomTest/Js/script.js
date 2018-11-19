$(document).ready(function () {
    var modalEnt = $(".modal-enter");
    var modalCall = $(".modal-callback");
    var curr = $(".tab:not(.active)");
    var prev = $(".tabs button.active");
    $("button.enter").click(function () {
        modalEnt.addClass("show-enter");
        setTimeout(() => {
            $(".modal-enter .block").addClass("transform");
        }, 100);
    });
    $(".call-back").click(function () {
        modalCall.addClass("show-enter");
        setTimeout(() => {
            $(".modal-callback .block").addClass("transform");
        }, 100);
    });
    $(".icon-close").click(function () {
        $(".modal-enter .block").removeClass("transform");
        $(".modal-callback .block").removeClass("transform");
        setTimeout(() => {
            modalCall.removeClass("show-enter");
            modalEnt.removeClass("show-enter");
        }, 400);
    });
    curr.click(function () {
        $(".tw").show();
        $(".on").hide();
        prev.removeClass('active');
        curr.addClass('active');
    });
    prev.click(function () {
        $(".on").show();
        $(".tw").hide();
        curr.removeClass('active');
        prev.addClass('active');
    });
    $(".category").click(function () {
        var selectCategory = $(".select-category");
        selectCategory.toggle();
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".selectCategory").length) {
            $('.selectCategory').hide();
  }
     e.stopPropagation();
});
    var catOptions = $("li.optjq");
    catOptions.click(function() {
        $(".category span").text($(this).text());
    });
    $("div.menu").click(function() {
        $(".podmenu").slideToggle();
    });
    var flag = true;
    $(window).scroll(function () { 
        var block = $(".main");
        //var scrollEvent = ($(window).scrollTop() < (block.position().top - $(window).height()));
        if ($(window).scrollTop() > block.offset().top - ($(window).height() - 200) && flag) {
            $(".product-wrap").addClass("tranY");
            flag = false;
        }
    });
});
