  $(document).ready(function () {
    //preload
    $(window).load(function() {
        $(".loader").delay(900).fadeOut("slow");
    })

    let fix=document.querySelector('.menu-fix');
    if(fix){
        document.querySelector('.menu-fix').addEventListener('click',function(){
            document.querySelector('.overlay').classList.toggle('active');
            document.querySelector('body').classList.toggle('push');
            document.querySelector('.sidenav').classList.toggle('active');
            document.querySelector('header').classList.toggle('push-menu')
            document.querySelector('main').classList.toggle('push-menu')
            document.querySelector('footer').classList.toggle('push-menu')
        })
    }
    let elementCloses=document.querySelectorAll('.close-menu');
    elementCloses.forEach(e => {
        e.addEventListener('click',function(e){
            e.preventDefault();
            document.querySelector('header').classList.toggle('push-menu')
            document.querySelector('main').classList.toggle('push-menu')
            document.querySelector('footer').classList.toggle('push-menu')
            document.querySelector('body').classList.toggle('push')
            document.querySelector('.sidenav').classList.toggle('active');
            document.querySelector('.overlay').classList.toggle('active');
        })
    });
    // ====================2: header scroll=================
    let elementcarausel=document.querySelector('.carausel-wrap');
    if(elementcarausel) {
        let h =elementcarausel.offsetHeight;
        window.addEventListener('scroll',function(){
            if(window.scrollY > h){
                document.querySelector('header').classList.add('active');
            }else{
                document.querySelector('header').classList.remove('active');
            }
        })
    }
    let w=window.screen.width;
    if(w < 1023){
        window.addEventListener('scroll',function(){
            if(window.scrollY > 200){
                $('header').addClass('active-tablet');
            }else{
                $('header').removeClass('active-tablet');
            }
        })
    }
    //click humberger
    document.querySelector('.humberger').addEventListener('click',function(){
        this.classList.toggle('active');
        document.querySelector('.menu-mobile').classList.toggle('active');
    })
    //carausel
    $('.carousel-main').flickity({
        pageDots: false,
        autoPlay: 3500,
        friction: 0.15,
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        friction: 0.8,
    });
    //category
    $('.category-slider').flickity({
        // groupCells: 2,
        pageDots: false,
        wrapAround: true,
        groupCells: 1,
        selectedAttraction: 0.01,
        friction: 0.3,
        prevNextButtons: false
    });
    var $workRoom = $('.category-slider.work-room').flickity();
      // prev
    $('.previous-work-room').on( 'click', function() {
        $workRoom.flickity('previous');
      });
      // next
    $('.next-work-room').on( 'click', function() {
        $workRoom.flickity('next');
    });
    var $livingRoom = $('.category-slider.living-room').flickity();
      // prev
    $('.previous-living-room').on( 'click', function() {
        $livingRoom.flickity('previous');
      });
      // next
    $('.next-living-room').on( 'click', function() {
        $livingRoom.flickity('next');
    });
    var $kitchen = $('.category-slider.kitchen').flickity();
      // prev
    $('.previous-kitchen').on( 'click', function() {
        $kitchen.flickity('previous');
      });
      // next
    $('.next-kitchen').on( 'click', function() {
        $kitchen.flickity('next');
    });
    var $bedroom = $('.category-slider.bed-room').flickity();
      // prev
    $('.previous-bed-room').on( 'click', function() {
        $bedroom.flickity('previous');
      });
      // next
    $('.next-bed-room').on( 'click', function() {
        $bedroom.flickity('next');
    });
    var $bathroom = $('.category-slider.bath-room').flickity();
      // prev
    $('.previous-bath-room').on( 'click', function() {
        $bathroom.flickity('previous');
      });
      // next
    $('.next-bath-room').on( 'click', function() {
        $bathroom.flickity('next');
    });
    var $carouselMain = $('.carausel-list').flickity();
      // prev
    $('.previous-carausel').on( 'click', function() {
        $carouselMain.flickity('previous');
      });
      // next
    $('.next-carausel').on( 'click', function() {
        $carouselMain.flickity('next');
    });
    //product-setail
    $('.slide-img').flickity({
        contain: true,
        pageDots: true,
        freeScroll: true,
        wrapAround: true,
    });
   
    //back to top
    $('.backtotop').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
    //hover btn
    const buttons = document.querySelectorAll(".btn-bl");
    buttons.forEach((button) => {
        const hover = button.querySelector(".btn-bl .hover");
        ["mouseenter", "mouseleave"].forEach((event) => {
          button.addEventListener(event, (e) => {
            hover.style.left = `${e.offsetX}px`;
            hover.style.top = `${e.offsetY}px`;
          });
        });
    });
    //show dropdow select
    $('.classify .selected').click(function(){
        $(this).closest('.classify').toggleClass('is-active');
    })
    $('.classify ul li span').click(function(){
        let value=$(this).closest('li').attr('data-valua');
        $(this).closest('.classify').find('.selected').text($(this).text());
        $(this).closest('.classify').removeClass('is-active');
        var $mediaElements = $(".project-page .col-lg-4.col-md-6");
        console.log(value);
        if (value == "all") {
            $mediaElements.slideDown("slow");
        }
        if(value == "type2"){
            $mediaElements.slideUp();
            $('.type-2').slideDown("slow");
        }
        if(value == "type3"){
            $mediaElements.slideUp();
            $('.type-3').slideDown("slow");
        }
        
    })
    $(window).on('load', function(){
        $('.svg').svgToInline();
    })

    //modal img
    function open_close_gallery(){
        var this_element = '';
        $('.wrapper-inner-content-image-hover').click(function() {
        $('#fullscreen-image').find('img.img').remove();
        this_element = $(this);
        this_element.parent().find('img.img').clone().appendTo('#fullscreen-image');
        $('#fullscreen').show();    
        $('#fullscreen').removeClass('fadeOut').addClass('fadeIn');    
        $('#fullscreen-image').removeClass('fadeOutDown').addClass('fadeInDown');
        });	
        $('#fullscreen-inner-close').click(function() {
        $('#fullscreen').removeClass('fadeIn').addClass('fadeOut').delay(500).hide(0);
         $('#fullscreen-image').removeClass('fadeInDown').addClass('fadeOutDown');
        });	
        
    }
    $('#fullscreen-inner-right').click(function(){
        $('#fullscreen-image img:first-child').insertAfter( $('#fullscreen-image img:last-child') );
    })
    $('#fullscreen-inner-left').click(function(){
        $('#fullscreen-image img:last-child').insertBefore( $('#fullscreen-image img:first-child') );
    })
    open_close_gallery();
    //ajax load more
    var ajaxDelay = 2000;
    $(".product-more").on("click", function(e){
        var data=[
            {img:'img/venice2.jpg'},
            {img:'img/venice3.jpg'},
            {img:'img/venice4.jpg'},
            {img:'img/venice5.jpg'},
            {img:'img/venice6.jpg'},
            {img:'img/venice7.jpg'},
        ]
        var items='';
        if(data){
            for (let i = 0; i < data.length; i++) {
                items+= `<div class="col-md-4">
                            <div class="box-product">
                                <a class="img" href="profuct-detail.html">
                                    <img src=${data[i].img} alt="">
                                </a>
                                <h3 class="title">Ghế gỗ sồi loại 1</h3>
                                <div class="price">
                                    <span class="text">giá</span>
                                    :
                                    <span class="number">700.000 vnd</span>
                                </div>
                                <div class="wrap-btn">
                                    <a href="profuct-detail.html">
                                        <img src="img/arrow.svg" alt="">
                                        <span>CHI TIẾT</span></a>
                                </div>
                            </div>
                        </div>`       
            }
        }
        let $newrow = $(items);
        e.preventDefault();
        // call ajax
        var seft = $(this)
        seft.addClass('loading');
        setTimeout(function() {
            $(".category-detail .category-item .row").append($newrow)
            seft.removeClass('loading');
        }, ajaxDelay);
    });
});
