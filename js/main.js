var elModalBtn = document.querySelector('.js-header-search-btn');
var elModalWindow = document.querySelector('.search-modal');

elModalBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  elModalWindow.classList.add('search-modal--open');
})

window.onclick = function(event) {
  if (event.target == elModalWindow) {
    elModalWindow.classList.remove('search-modal--open');
  }
}

var elNavBtn = document.querySelector('.js-nav-btn');
var elNavClass = document.querySelector('.site-header__nav');

if (elNavBtn) {
  elNavBtn.addEventListener('click', function(){
    elNavClass.classList.toggle('site-header__nav--active');
    elNavBtn.classList.toggle('header-main__burger--closed');
  })
}

var elSiteMain = document.querySelector(".site-main");
var elJsButtonOne = document.querySelector(".js-btn-one");
var elJsButtonTwo = document.querySelector(".js-btn-two");

elJsButtonOne.addEventListener("click", function () {
    elSiteMain.classList.add("site-main-open-list");
    elSiteMain.classList.remove("site-main-open-grid");

} )

elJsButtonTwo.addEventListener("click", function () {
  elSiteMain.classList.add("site-main-open-grid");
  elSiteMain.classList.remove("site-main-open-list");

} )


window.addEventListener('resize', function(event){
  var newWidth = window.innerWidth;
  if (newWidth <= 650) {
    elSiteMain.classList.add("site-main-open-grid");
    elSiteMain.classList.remove("site-main-open-list");
  }
});

$(document).ready(function(){
  $('.slicking').slick({
    adaptiveHight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 705,
        // settings: "unslick",
        slidesToShow: 0.5,
        slidesToScroll: 1
      }

    ]
  });
});


var elCategorySectionButtonOne = document.querySelector('.js-btn-one')
var elFiltreFormInfoProduct = document.querySelector('.filtre-form__products')
var elCategorySectionButtonTwo = document.querySelector('.js-btn-two')

elCategorySectionButtonOne.addEventListener('click', function(){
  elFiltreFormInfoProduct.classList.add('filtre-form__products--close')
})
