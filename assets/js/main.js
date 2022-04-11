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
    //   Get Faviorts 
    debugger
    var faviortsCount = localStorage.getItem("faviorts-count");
    var retrievedFaviorts = JSON.parse(localStorage.getItem('faviortsListMob'));
    console.log(retrievedFaviorts)
    if(retrievedFaviorts == null){
      document.getElementById("faviorts-count").innerText = "0";
      document.querySelector("#faviorts .not-found-data").style.display = "block";
    }

    else{
      document.querySelector("#faviorts .not-found-data").style.display = "none";
      for (var i = 0; i < retrievedFaviorts.length; i++){
          document.getElementById("faviorts-count").innerText = i+1;
          const faviortsContainer = document.querySelector('.faviorts-container-mob')
          const navlistElement = `
          <div class="card-box card-doctor p-2 py-4 card-detail">
                            <div class="row">
                                <div class="col-lg-2 ">
                                    <div class="row">
                                        <div class="col-3 avatar txt-left" id="faviort-img">
                                        ${retrievedFaviorts[i].cardImg}
                                        </div>
                                        <div class="col-9">
                                            <div class="d-flex">
                                                <h6 class="title-card txt-md" id="title">
                                                ${retrievedFaviorts[i].title}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-7  detail mt-3" id="faviort-details">
                                 ${retrievedFaviorts[i].cardDetails}
                                </div>
                                <div class="col-lg-3 d-flex value-card react-icon text-center">
                                    <div></div>
                                    <div class="reserves justify-content-around w-100">
                                        <div class="mb-0 d-flex avaliable-btn">
                                            <p class="">الإجمالي</p>
                                            <h5 id="faviort-price">${retrievedFaviorts[i].price}</h5>
                                        </div>
                                        <button type="button" class="btn" id="unsave">مسح</button>
                                    </div>
                                </div>
                            </div>
                        </div>`    
      faviortsContainer.insertAdjacentHTML('beforeend',navlistElement);
     
      }
    }

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
        select('.main-opacity').classList.toggle('no-opacity')
    
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


// Hide offers slider when click service in home page 

$('#nav-tab-main-cats .nav-link').click(function(){ 
    document.getElementById('specialOffers').style.display='none';
    document.getElementById('footer').style.display='none';
});


//   Share slected service name 
$('.parent-header1').click(function(){ 
    var typeService =  document.querySelector('.child-header1 #title-tab').innerText;
    localStorage.setItem("selected-service", typeService);
    localStorage.setItem("service-num", "1");
    console.log(typeService)   
});
$('.parent-header2').click(function(){ 
    var typeService =  document.querySelector('.child-header2 #title-tab').innerText;
    localStorage.setItem("selected-service", typeService);
    localStorage.setItem("service-num", "2");
    console.log(typeService)   
});
$('.parent-header3').click(function(){ 

    var typeService =  document.querySelector('.child-header3 #title-tab').innerText;
    localStorage.setItem("selected-service", typeService);
    localStorage.setItem("service-num", "3");
    console.log(typeService)   
});
$('.parent-header4').click(function(){ 

    var typeService =  document.querySelector('.child-header4 #title-tab').innerText;
    localStorage.setItem("selected-service", typeService);
    localStorage.setItem("service-num", "4");
    console.log(typeService)   
});
$('.parent-header5').click(function(){ 

    var typeService =  document.querySelector('.child-header5 #title-tab').innerText;
    localStorage.setItem("selected-service", typeService);
    localStorage.setItem("service-num", "5");
    console.log(typeService)   
});

$('.child-header1').click(function(){
    var typeService =  document.querySelector('.child-header1.active #title-tab').innerText; 
    localStorage.setItem("selected-service", typeService);
    localStorage.setItem("service-num", "1");
    console.log(typeService)
});

$('.child-header2').click(function(){
    var typeService =  document.querySelector('.child-header2.active #title-tab').innerText; 
    localStorage.setItem("selected-service", typeService);
    localStorage.setItem("service-num", "2");
    console.log(typeService)
});


$('.child-header3').click(function(){
    var typeService =  document.querySelector('.child-header3.active #title-tab').innerText; 
    localStorage.setItem("selected-service", typeService);
    localStorage.setItem("service-num", "3");
    console.log(typeService)
});


$('.child-header4').click(function(){
    var typeService =  document.querySelector('.child-header4.active #title-tab').innerText; 
    localStorage.setItem("selected-service", typeService);
    localStorage.setItem("service-num", "4");
    console.log(typeService)
});


$('.child-header5').click(function(){

    var typeService =  document.querySelector('.child-header5.active #title-tab').innerText; 
    localStorage.setItem("selected-service", typeService);
    localStorage.setItem("service-num", "5");
    console.log(typeService)
});

 /**
     * Services dropdowns
*/
jQuery(".services-links a").click(function(e) {
    e.preventDefault();
    var activeLink =  jQuery(this).text().trim();
    if(window.location.href == "index.html")
    {
        var services = document.getElementById("nav-home-care-tab").innerText;
        var governments = document.getElementById("nav-government-tab").innerText;
        var consults = document.getElementById("nav-consultation-tab").innerText;
        var homeCare = document.getElementById("nav-covid-tab").innerText;
        var examinations = document.getElementById("nav-examinations-tab").innerText;
        const tabs = [services, governments, consults, homeCare, examinations];
        for (let i = 0; i < tabs.length; i++) {
        if ( activeLink === tabs[0]) {
            document.getElementById("nav-home-care-tab").classList.add("active");
            document.getElementById('nav-home-care').classList.add('active');
            document.getElementById('nav-home-care').classList.add('show');
            var service1 =  document.querySelector('#nav-home-care #title-tab').innerText; 
            localStorage.setItem("selected-service", service1);
            localStorage.setItem("service-num", "1");
            console.log(service1)
        }
        if ( activeLink === tabs[1]) {
            document.getElementById('nav-government-tab').classList.add('active');
            document.getElementById('nav-government').classList.add('active');
            document.getElementById('nav-government').classList.add('show');
            var service2 =  document.querySelector('#nav-government #title-tab').innerText; 
            localStorage.setItem("selected-service", service2);
            localStorage.setItem("service-num", "2");
            console.log(service2)
            
        }
        if ( activeLink === tabs[2]) {
            document.getElementById('nav-consultation-tab').classList.add('active');
            document.getElementById('nav-consultation').classList.add('active');
            document.getElementById('nav-consultation').classList.add('show');
            var service3 =  document.querySelector('#nav-consultation #title-tab').innerText; 
            localStorage.setItem("selected-service", service3);
            localStorage.setItem("service-num", "3");
            console.log(service3)
        }
        if ( activeLink === tabs[3]) {
            document.getElementById('nav-covid-tab').classList.add('active');
            document.getElementById('nav-covid').classList.add('active');
            document.getElementById('nav-covid').classList.add('show');
            var service4 =  document.querySelector('#nav-covid #title-tab').innerText;
            localStorage.setItem("selected-service", service4);
            localStorage.setItem("service-num", "4");
            console.log(service4)
        }
        if ( activeLink === tabs[4]) {
            document.getElementById('nav-examinations-tab').classList.add('active');
            document.getElementById('nav-examinations').classList.add('active');
            document.getElementById('nav-examinations').classList.add('show');
            var service5 =  document.querySelector('#nav-examinations #title-tab').innerText; 
            localStorage.setItem("selected-service", service5);
            localStorage.setItem("service-num", "5");
            console.log(service5)
        }
        }
    }

    else{
        var queryString = "?activeService=" + activeLink
        window.location.href = "index.html" + queryString;
    }
});





