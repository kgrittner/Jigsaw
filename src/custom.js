/**
 * Created by KarlFast on 7/10/2015.
 */






var init = function(){

    var waypointsInit = function() {


        // Get link by section or article id
        function getRelatedNavigation(el){

            $('#nav a').removeClass('active');

            if($(el).attr('id') === 'footer'){
                return $('nav a[href=#navContactUs]');
            }else{
                return $('nav a[href=#'+$(el).attr('id')+']');
            }
        }

        function scrollTo(id, addPound) {

            if(addPound) { id = '#' + id; };
            $('html,body').animate({scrollTop: $(id).offset().top - 73}, 'slow')
            $('html,body').animate({scrollTop: $(id).offset().top - 79}, 'fast')
        };


        $('section')
            .waypoint(function() {
                getRelatedNavigation(this).addClass('active');
            }, {
                offset: 75
            }
        );

        $('footer')
            .waypoint(function(){
                getRelatedNavigation(this).addClass('active');
            }, {
                offset: 'bottom-in-view'
            }
        );


        $('[data-scrollToId]').on('click',function(e) {
            e.preventDefault();
            var id = $(this).attr('data-scrollToId');
            scrollTo(id, true);
        });


        $('nav a').on('click',function(e) {
            e.preventDefault();
            var id = $(this).attr('href');
            scrollTo(id);
        });

    }

    var contactButtons = function() {

        var url = 'https://www.google.com/maps/place/Jigsaw+LLC/@43.0391229,-87.910984,17z/data=!3m1!4b1!4m2!3m1!1s0x880519a083a30717:0x1049287f56f4cf3b';

        $('#viewmap').click(function(e){
            e.preventDefault();
            window.open(url, '_blank');
        });

        $('#submit').click(function(e){
            e.preventDefault();
        });
    }

    var setHome = function(){

        var isSet = $('#nav > ul > li').find('a.active').length;
        if(!isSet) {
            $('#nav > ul > li:first-child > a').addClass('active');
        }


    }

    var hamburger = function() {
        (function () {

            var toggles = document.querySelectorAll(".cmn-toggle-switch");

            for (var i = toggles.length - 1; i >= 0; i--) {
                var toggle = toggles[i];
                console.log('Hamburger Trigger Look');
                toggleHandler(toggle);
            };

            function toggleHandler(toggle) {
                console.log('Hamburger Trigger');
                toggle.addEventListener("click", function (e) {
                    e.preventDefault();
                    (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
                });
            }

        })();
    }

    var setSlideout = function(){

        var slideout = new Slideout({
            'panel': document.getElementById('main'),
            'menu': document.getElementById('menu'),
            'padding': 256,
            'tolerance': 70
        });

        // Toggle button
        document.querySelector('#navHamburger').addEventListener('click', function () {
            slideout.toggle();
        });

        slideout.on('open', function () {
            $("#btnNavHamburger").addClass('active');
        });

        slideout.on('close', function () {
            $("#btnNavHamburger").removeClass('active');
        });

    }

    var preLoader = function() {

        $(window).bind("load", function () {
            console.log('Window Loaded');
            $('#loader').remove();
            $('html').css({ 'overflow': 'auto' });
        });
    }


    return {
        preLoader: preLoader,
        waypointsInit: waypointsInit,
        contactButtons: contactButtons,
        setHome: setHome,
        hamburger: hamburger,
        setSlideout: setSlideout
    }
};




$(document).ready(function () {
    init().preLoader();
    init().waypointsInit();
    init().contactButtons();
    init().setHome();
    init().hamburger();
    //init().setSlideout();


});