// 无控件——图片放大
$(".fancyImg").each(function () {
    let fancyImg = $(this).find("img").attr("src");
    $(this).parents(".fancyboxHz").attr("data-src", fancyImg)
});
$('.fancyImg-02 img').each(function () {
    let iText = $(this).attr('alt');
    $(this).parent().append('<p>' + iText + '</p>');
    $(this).parents(".fancyboxHz").attr("data-caption", iText)
});
Fancybox.bind('.fancyboxHz[data-fancybox="gallery_noCon"]', {
    Thumbs: false,
    Toolbar: false,
    Image: {
        zoom: false,
        click: false,
        wheel: "slide",
    },
});

// ==> 效果组件JS
// 图片放大-02 图集参数
$require(['swiper'], function () {
    var imgTuBox = new Swiper('.imgTuBig', {
        slidesPerGroup: 1,	//滚动个数
        slidesPerView: 2,  //列
        spaceBetween: 15,  //右边距
        autoplay: {
            delay: 5000, //5秒切换一次
        },
        grid: {
            fill: 'row',
            rows: 1, //行
        },
        pagination: {
            el: '.imgTuBig .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.imgTuBig .swiper-button-next',
            prevEl: '.imgTuBig .swiper-button-prev',
        },
        breakpoints: {
            768: {  //当屏幕宽度大于等于768 
                slidesPerView: 5,
                spaceBetween: 20,  //右边距
            },
        }
    })
})