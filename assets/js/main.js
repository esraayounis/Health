/**
 * Template Name: Medicio - v4.3.0
 * Template URL: https://bootstrapmade.com/medicio-free-bootstrap-theme/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function() {
    "use strict";


    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    let selectTopbar = select('#topbar')
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled')
                if (selectTopbar) {
                    selectTopbar.classList.add('topbar-scrolled')
                }
            } else {
                selectHeader.classList.remove('header-scrolled')
                if (selectTopbar) {
                    selectTopbar.classList.remove('topbar-scrolled')
                }
            }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }


     /**
     * Mobile reservations btn
     */
    $('.open-reservations').click(function() {
        select('#reservation').classList.toggle('open-reservations')
        select('#reservation').classList.toggle('dis-block')
        select('.booking path').classList.toggle('fill-active')
        $('#home').toggleClass('dis-none')
        $('.basic-content').toggleClass('dis-none')
        $('#faviorts').toggleClass('dis-none')

    })

    /*
     * Mobile faviorts btn
    */
    $('.open-faviorts').click(function() {
      select('#faviorts').classList.toggle('open-faviorts')
      select('#faviorts').classList.toggle('dis-block')
      select('.favorite path').classList.toggle('fill-active')
      $('#home').toggleClass('dis-none')
      $('.basic-content').toggleClass('dis-none')
      $('#reservation').toggleClass('dis-none')
    })

     /*
     * Mobile offers btn
    */
     $('.open-offers').click(function() {
        select('.offers path').classList.toggle('fill-active')
        window.location.href = "special-offers.html";

      })


    /**
     * Mobile nav toggle
     */
    $('.open-mobile-menu, .over-lay-mobile, .btn-close-menu').click(function() {
        select('#navbar').classList.toggle('open-mobile-menu')
        $('body').toggleClass('overflow-hidden')
        $('.over-lay-mobile').toggleClass('d-none')

    })

    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
            if (select('#navbar').classList.contains('navbar-mobile')) {
                e.preventDefault()
                this.nextElementSibling.classList.toggle('dropdown-active')
            }
        }, true)
        // $('').toggleClass('dropdown-active')

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
        if (select(this.hash)) {
            e.preventDefault()

            let navbar = select('#navbar')
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile')
                let navbarToggle = select('.open-mobile-menu')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
            }
            scrollto(this.hash)
        }
    }, true)

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
        }
    });

    /**
     * Preloader
     */
    let preloader = select('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove()
        });
    }

    /**
     * Hero carousel indicators
     */
    let heroCarouselIndicators = select("#hero-carousel-indicators")
    let heroCarouselItems = select('#heroCarousel .carousel-item', true)

    heroCarouselItems.forEach((item, index) => {
        (index === 0) ?
        heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
            heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
    });

    

    /**
     * Initiate gallery lightbox
     */
    const galleryLightbox = GLightbox({
        selector: '.gallery-lightbox'
    });

    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });

})()


jQuery(".services-links a").click(function(e) {
    // debugger
    e.preventDefault();
    var activeLink =  jQuery(this).text().trim();
    var services = document.getElementById("nav-home-care-tab").innerHTML;
    var governments = document.getElementById("nav-government-tab span").innerHTML;
    var consults = document.getElementById("nav-consultation-tab").innerHTML;
    var homeCare = document.getElementById("nav-covid-tab").innerHTML;
    var examinations = document.getElementById("nav-examinations-tab").innerHTML;
    const tabs = ["services", "governments", "consults", "homeCare", "examinations"];
    for (let i = 0; i < tabs.length; i++) {
      if ( activeLink === tabs[i]) {
        $(this).addClass('active');
       }
    }
});


// ======== Home Page =============

  /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
function openUserDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
     }
    }
}


  // Share Selected Services
function openServicesDropdown() {
    document.getElementById("servicesDropdown").classList.toggle("show");
}

// $('.child-header').click(function(){
//     debugger
//     var x = $('this').text;
//     function getService(x) {
//        debugger
//       var service = $('.child-header.active span').text();
//       localStorage.setItem("selected-service", service);
//       console.log(service)
//    }
// });


// Hide offers slider when click service in home page 

$('.nav-link').click(function(){ 
    document.getElementById('specialOffers').style.display='none';
    document.getElementById('footer').style.display='none';
});

