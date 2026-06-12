jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top a").fadeIn();
    } else {
      $(".back-to-top a").fadeOut();
    }
  });

  $(".back-to-top a").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});

// Blog Slider
jQuery(document).ready(function() {

  jQuery('.main-slider .owl-carousel').owlCarousel({
    loop: true,
    smartSpeed: 600,
    items: 1,
    nav: true,
    navText: ["<span class='dashicons dashicons-arrow-left-alt2'></span>","<span class='dashicons dashicons-arrow-right-alt2'></span>"],
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: true,
  });


  jQuery('.blog-section .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    items: 3,
    nav: false,
    navText: ["<span class='dashicons dashicons-arrow-left-alt2'></span>","<span class='dashicons dashicons-arrow-right-alt2'></span>"],
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      },
      1200: {
        items: 3
      },
      1900: {
        items: 3
      }
    },
    autoplay: true,
  });
});


// tabs.js

document.addEventListener("click", (e) => {

  const clickedTab = e.target.closest(".tab-title");

  if (clickedTab) {
    vehicle_rental_redTab(clickedTab);
  }

});

// Default active tab
document.querySelectorAll(".tab-title").forEach((tabTile, index) => {
  tabTile.classList.toggle("active", index === 0);
});

document.querySelectorAll(".tab-content").forEach((tabcontent, index) => {
  tabcontent.classList.toggle("active", index === 0);
});

function vehicle_rental_redTab(clickedTab) {

  const vehicle_rental_tabTiles = [
    ...document.querySelectorAll(".tab-title")
  ];

  const vehicle_rental_tabcontents = [
    ...document.querySelectorAll(".tab-content")
  ];

  const vehicle_rental_activeTabIndex =
    vehicle_rental_tabTiles.findIndex(
      tab => tab === clickedTab
    );

  vehicle_rental_tabTiles.forEach((tabTile, index) => {
    tabTile.classList.toggle(
      "active",
      index === vehicle_rental_activeTabIndex
    );
  });

  vehicle_rental_tabcontents.forEach((tabcontent, index) => {
    tabcontent.classList.toggle(
      "active",
      index === vehicle_rental_activeTabIndex
    );
  });

}