  // function showSection(id){
  //     const sections = document.querySelectorAll('.slider');
  //     sections.forEach(section => section.classList.remove('active'));
  //     const buttons = document.querySelectorAll('.filters button');
  //     buttons.forEach(btn => btn.classList.remove('active'));
  //     const el = document.getElementById(id);
  // const elChild = el.firstElementChild;

  // el.classList.add('active');
  // if (elChild) elChild.classList.add('activated');
  // if (event.target) event.target.classList.add('active');

  // const first = document.getElementById('firstslideritem');
  // const second = document.getElementById('secondslideritem');
  // const third = document.getElementById('thirdslideritem');

  // const productsEl = document.getElementsByClassName('products')[0];

  // if (elChild === first) {
  //   productsEl.classList.remove('activated');
  //   document.getElementById('cardsection1')?.classList.add('activated');
  // } else if (elChild === second) {
  //   productsEl.classList.remove('activated');
  //   document.getElementById('cardsection5')?.classList.add('activated');
  // } else if(elChild === third) {
  //   productsEl.classList.remove('activated');
  //   document.getElementById('cardsection9')?.classList.add('activated');
  // }
  //     /*const el = document.getElementById(id);
  //     const elChild = el.firstElementChild;
  //     el.classList.add('active');
  //     elChild.classList.add('activated');
  //     event.target.classList.add('active');
  //     if(elChild === document.getElementById('firstlideritem')){
  //         document.getElementsByClassName('products').classList.remove('activated');
  //         document.getElementById('cardsection1').classList.add('activated');
  //     }  else if(elChild === document.getElementById('secondslideritem')){
  //         document.getElementsByClassName('products').classList.remove('activated');
  //         document.getElementById('cardsection5').classList.add('activated');
  //     } else {
  //         document.getElementsByClassName('products').classList.remove('activated');
  //         document.getElementById('cardsection9').classList.add('activated');
  //     }
  //     console.log(elChild);
  //     console.log(document.getElementById('firstlideritem'));
  //     console.log(elChild === document.getElementById('firstlideritem'));
  //     */
  // }


  // function cardSection(id){
  //     const cardSections = document.querySelectorAll('.products');
  //     cardSections.forEach(section => section.classList.remove('activated'));
  //     const cardButtons = document.querySelectorAll('.slider div');
  //     cardButtons.forEach(btn => btn.classList.remove('activated'));
  //     document.getElementById(id).classList.add('activated');
  //     event.target.classList.add('activated');
  // }


  function cardSection(id){
    $('.products').removeClass('activated');
    $(`#${id}`).addClass('activated');
    $('.slider-item').removeClass('redborder');
  } 

  $(document).ready(function () {
    $('.creambutton').click(function () { 
      $('.slider').removeClass('d-flex');
      $('#section1').addClass('d-flex');
      $('.filtersbutton').removeClass('filtersbuttonactive');
      $('.creambutton').addClass('filtersbuttonactive');
      $('.slider-item').removeClass('redborder');
      $('.slider-item').removeClass('redborder');
      $('#firstlideritem').addClass('redborder');
      $('.products').removeClass('activated');
      $('#cardsection1').addClass('activated');
    });
    $('.hotbutton').click(function () { 
      $('.slider').removeClass('d-flex');
      $('#section2').addClass('d-flex');
      $('.filtersbutton').removeClass('filtersbuttonactive');
      $('.hotbutton').addClass('filtersbuttonactive');
      $('.slider-item').removeClass('redborder');
      $('#secondslideritem').addClass('redborder');
      $('.products').removeClass('activated');
      $('#cardsection5').addClass('activated');
    });
    $('.coldbutton').click(function () { 
      $('.slider').removeClass('d-flex');
      $('#section3').addClass('d-flex');
      $('.filtersbutton').removeClass('filtersbuttonactive');
      $('.coldbutton').addClass('filtersbuttonactive');
      $('.slider-item').removeClass('redborder');
      $('#thirdslideritem').addClass('redborder');
      $('.products').removeClass('activated');
      $('#cardsection8').addClass('activated');
    });

    $('.slider-item').click(function () {
      $('.slider-item').removeClass('redborder');
      $(this).addClass('redborder');

    });

 
     
  });

