// import './src/js/slider';
import Swiper from "swiper";
const gallery = document.querySelector('.gallery__slider');
if(gallery){
    const swiper = new Swiper(gallery, {
			slidesPerView: 3,
            spaceBetween: 50,
		})
}