$(document).ready(function() {
    var carousel = $("#carousel").featureCarousel({
        trackerIndividual: false,
        largeFeatureWidth: 384,
        sidePadding: 10,
        trackerSummation: false,
        smallFeatureHeight:0.8,
        smallFeatureOffset: 30,
        autoPlay: 0
    });
    $(".fancybox").fancybox();
    $(".front").on('click',function () {
        $(this).parents('.flipper').addClass('flipper-active');
    });
    $(".back").on('click',function () {
        $(this).parents('.flipper').removeClass('flipper-active');
    });
    $(".mobil_bt").on('click',function () {
        $("header .menu .bg-mobil").slideDown();
    });
    $("header .menu ul li.head-mobil-menu span").on('click',function () {
        $("header .menu .bg-mobil").slideUp();
    });
    $(document).on("scroll",function () {
        if($(".block").length>0){
            var scroll = $(window).scrollTop();
            $(".block").each(function () {
                var index = $(this).index()-1;
                var begin = $(this).offset().top -50;
                var heightBlock = $(this).height();
                var end = begin + heightBlock;
                if(scroll > begin && scroll <= end){
                    $(".menu .menu-item").removeClass("active");
                    $(".menu .menu-item").eq(index).addClass("active");
                }
                // if(scroll > $(document).height()-1000){
                //     $(".menu .menu-item").removeClass("active");
                //     $(".menu .menu-item").eq(index).addClass("active");
                // }
            })
        }
    });
    $(".menu ul>li.menu-item").on('click',function() {
        var index = $(this).index();
        $("html, body").animate({scrollTop: $(".block").eq(index-1).offset().top},"slow");
        if(window.screen.width < 768 ){
            $("header .menu .bg-mobil").slideUp();
        }
    });
    $(".translate").on('click',function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active').text('see translation');
            $('.carousel-image').show();
            $('.translation').hide();
        } else {
            $(this).addClass('active').text('see original');
            $('.carousel-image').hide();
            $('.translation').show();
        }
    })
});

// Адаптивные скрипты, которые срабатывают только при определенном разрешении экрана
// Документация: https://github.com/maciej-gurban/responsive-bootstrap-toolkit
(function($, document, window, viewport) {
	function resizeWindow() {
		// $("a").click(function() {
		// 	if (viewport.is("lg")) {
		// 		return false;
		// 	};
		// });
};
$(document).ready(function() {
	resizeWindow();
});
$(window).bind("resize", function() {
	viewport.changed(function(){
		resizeWindow();
	});
});
})(jQuery, document, window, ResponsiveBootstrapToolkit);
$(window).load(function() {
    $(".left img").animated("bounceInLeft","bounceInLeft");
    $(".using img").animated("bounceInRight","bounceInRight");
});