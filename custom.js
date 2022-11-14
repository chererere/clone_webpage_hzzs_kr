
console.log(window.visualViewport.width);

// 1024보다 작으면 슬라이더 꺼지게
window.onload=()=>{
    if ( window.visualViewport.width > 1024 ){
        new Swiper(".bestSwiper", {
            slidesPerView: 5.5,
            spaceBetween: 15,
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
        });
    }
};

// 브라우저에서 크기가 변했을때 새로고침 되게
window.onresize=()=>{
    // console.log(window.visualViewport.width);
    location.reload();
    if ( window.visualViewport.width > 1024 ){
        new Swiper(".bestSwiper", {
            slidesPerView: 5.5,
            spaceBetween: 15,
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
        });
    }
}


// 날짜 오늘날짜로 설정하기 #text_today
(function (){
let today = new Date();
let year=today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();

const text_today_El = document.querySelector('.text_today');
text_today_El.textContent = `${year.toString().slice(-2)}${("00"+month.toString()).slice(-2)}${("00"+date.toString()).slice(-2)}`;
})();


// 하트에 위시리스트 붙이기 .pop_wishlist_container
const heart_icons_El = document.querySelectorAll('.heart_icon');
const del_heart_icon_El = ''; 
const pop_wishlist_cover_El = document.querySelector('.pop_wishlist_cover');
const del_pop_wishlist_cover_El = document.querySelector('.del_pop_wishlist_cover');
const wish_list_container_El = document.querySelector('.pop_wishlist_container');
const del_wish_list_container_El = document.querySelector('.del_pop_wishlist_container');
pop_wishlist_cover_El.addEventListener('click', hide_wishlist);
del_pop_wishlist_cover_El.addEventListener('click', hide_wishlist);

heart_icons_El.forEach((hIcon)=>{
  hIcon.addEventListener('click',show_wishlist);
  function show_wishlist(){
    if (this.classList[1] === "on"){
      console.log('on 있다')
      del_wish_list_container_El.style.top = 0;
      del_pop_wishlist_cover_El.classList.add('on');
      const del_heart_icon_El = this.classList.remove('on'); 
    }else{
      console.log('on 없다'); 
      wish_list_container_El.style.top = 0;
      pop_wishlist_cover_El.classList.add('on');
      const del_heart_icon_El = this.classList.add('on'); 
    }
  }
})

function hide_wishlist(){
  wish_list_container_El.style.top = "-217px";
  del_wish_list_container_El.style.top = "-217px";
  pop_wishlist_cover_El.classList.remove('on');
  del_pop_wishlist_cover_El.classList.remove('on');
  console.log('들어갔다')
}

