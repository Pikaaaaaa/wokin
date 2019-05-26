$(document).ready(function () {

    // auth menu
    var $authToggle = $('.auth-toggle');
    var $authClose = $('.auth__close');
    var $auth = $('.auth');
    var $currentAuth;
    var $currentAuthClose;
    var $currentAuthHeight;
    var $header = $('.header');

    $authToggle.click(function (e) {
        e.preventDefault();

        $currentAuth = $($(this).data('target'));

        $auth.removeClass('d-block fadeInDown animated');

        $currentAuth.addClass('d-block fadeInDown animated');

        $currentAuthHeight = $currentAuth.outerHeight();

        $header.css('top', $currentAuthHeight + 'px');

    });

    $authClose.click(function (e) {
        e.preventDefault();

        $currentAuthClose = $($(this).data('target'));

        $currentAuth.removeClass('d-block fadeInDown animated');

        $header.css('top', 0);
    });

    // menu
    var $menuItem = $('.menu--header .menu__item');
    var $currentSectionId;
    var $header = $('.header');
    var $headerHeightValue = parseInt($header.css('height'));
    var $contentSection = $(".content__section");
    var $contentSectionMarginTopValue = parseInt($contentSection.css('margin-top'));
    var $currentSectionOffset;

    $menuItem.click(function (e) {
        e.preventDefault();

        $currentSectionId = this.hash;

        $currentSectionOffset = parseInt($($currentSectionId).offset().top) - $headerHeightValue - $contentSectionMarginTopValue;

        $('html, body').stop().animate({
            'scrollTop': $currentSectionOffset
        }, 700, 'swing');
    });

    // ingredients overlay
    var $ingredients = $('.header__ingredient-list');
    var $ingredientsOverlay = $('.ingredients-overlay');
    var $closeIngredientsOverlay = $('.ingredients__close');

    $ingredients.click(function (e) {
        e.preventDefault;
        $ingredientsOverlay.addClass('active fadeIn animated');
        $ingredients.addClass('active');
        $('.header__ingredient-list-title').css('color', '#ED1C24');
    });
    $closeIngredientsOverlay.click(function () {
        $ingredientsOverlay.removeClass('active fadeIn animated');
        $ingredients.removeClass('active');
        $('.header__ingredient-list-title').css('color', '#000');
    });

    $ingredients.click(function () {
        $('html, body').animate({
            scrollTop: $(".site").offset().top
        }, 1000);
    });

    // Overlay menu
    var $overlayNav = $('.overlay-nav');
    var $closeOverlayNav = $overlayNav.find('.overlay-nav__close');
    var $overlayNavToggle = $('.overlay-nav-toggle');
    var $menu = $('.menu--header');

    $menu.clone().removeClass('menu--header d-none d-lg-block').addClass('menu--overlay-nav').appendTo('.overlay-nav__content');

    $overlayNavToggle.click(function () {
        $overlayNav.addClass('d-block fadeIn animated');
    });
    $closeOverlayNav.click(function () {
        $overlayNav.removeClass('d-block fadeIn animated');
    });

    // Product Overlay
    var $currentProduct;
    var $productOverlay = $('.product__overlay');
    var $currentProductOverlay;
    var $productIngredientsShow = $('.product__ingredients-show');
    var $currentProductIngredientsShow;
    var $productIngredientsClose = $('.product__ingredients-close');
    var $currentProductIngredientsClose;

    $productIngredientsShow.click(function () {

        $productOverlay.removeClass('active fadeIn animated');

        $productIngredientsClose.addClass('d-none');

        $productIngredientsShow.removeClass('d-none');

        $currentProduct = $(this).closest('.product');

        $currentProductOverlay = $currentProduct.find('.product__overlay');

        $currentProductOverlay.addClass("active fadeIn animated");

        $currentProductIngredientsClose = $currentProduct.find('.product__ingredients-close');

        $currentProductIngredientsClose.removeClass("d-none");

        $currentProductIngredientsShow = $currentProduct.find('.product__ingredients-show');

        $currentProductIngredientsShow.addClass("d-none");

    });

    $productIngredientsClose.click(function () {

        $productOverlay.removeClass("active fadeIn animated");

        $productIngredientsClose.addClass("d-none");

        $productIngredientsShow.removeClass("d-none");

    });

    //ingredients body overlay

    var $ingredientsBodyOverlay = $('.ingredients__body-overlay');
    var $ingredientsBodyOverlayClose = $('.ingredients__body-overlay-close');
    var $district = $('.district');
    var $selectDistinctModal = $('.select-distinct-modal');
    
    $district.click(function(){
        $selectDistinctModal.modal('hide');
        $('html, body').css('overflowY', 'hidden');
        $ingredientsBodyOverlay.addClass('d-block fadeIn animated');
    });
    
    $ingredientsBodyOverlayClose.click(function (e) {
        e.preventDefault;
        $('html, body').css('overflowY', '');
        $ingredientsBodyOverlay.removeClass('d-block animated slideInUp');
        
    });

    // footer menu
    var $footerMenuToggle = $('.footer__toggle-menu');
    var $footerSubMenu = $('.menu--footer-submenu');
    var $footerCloseMenu = $('.footer__close-menu');

    $footerMenuToggle.click(function () {
        $footerSubMenu.addClass("d-block fadeIn animated");
        $footerMenuToggle.addClass("d-none");
        $footerCloseMenu.addClass('d-block');
    });
    $footerCloseMenu.click(function () {
        $footerSubMenu.removeClass("d-block fadeIn animated");
        $footerMenuToggle.removeClass("d-none");
        $footerCloseMenu.removeClass('d-block');
    });
    
    //cart
    
    var $cart = $('.cart');
    var $cartClose = $('.cart__top-close');
    var $cartToggle = $('.header__el--cart');
    var $cartItem = $('.cart__content-product');
    var $currentCartItem;
    var $delCartItem = $('.cart__item-control--delete');
    var $delCartItemConfirm = $('.cart__item-del--confirm');
    var $cartItemBottomMain = $('.cart__content-item-bottom');
    var $cartItemConfirmDel = $('.cart__item-control-confirm-delete');
    var $cartItemConfirmNo = $('.cart__item-control-confirm-no');
    
    $cartToggle.click(function (e) {
        e.preventDefault();
        $cart.addClass('d-block animated slideInRight');
    });
    
    $cartClose.click(function (e) {
        e.preventDefault();
        $cart.removeClass('d-block animated slideInRight');
    });
    
    $delCartItem.click(function(e){
        e.preventDefault();
        $(this).closest('.cart__content-item-bottom').addClass('d-none').removeClass('d-flex');
        $currentCartItem = $(this).closest('.cart__content-product');
        $currentDelCartItemConfirm = $currentCartItem.find('.cart__item-del-confirm');
        $currentDelCartItemConfirm.addClass('d-flex animated slideInRight').removeClass('d-none');
    });
    
    $cartItemConfirmDel.click(function(e){
        e.preventDefault();
        $currentCartItem.remove();
    });
    
    $cartItemConfirmNo.click(function(e){
        e.preventDefault();
        $currentDelCartItemConfirm.addClass('d-none');
        $currentDelCartItemConfirm.removeClass('d-flex slideInRight animated');
        $cartItemBottomMain.removeClass('d-none');
        $cartItemBottomMain.addClass('d-flex')
    });
    
});