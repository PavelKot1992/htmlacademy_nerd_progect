// Код для всплывающего окна

const contactUsOpenPopup = document.querySelector('#contact-us-open-popup');
const popup = document.querySelector('#popup');
const popupCloseButton = popup.querySelector('#popup-close-button');
const popupForm = popup.querySelector('form');
let popupLogin = popup.querySelector('#name');
let popupEmail = popup.querySelector('#email');
let popupText = popup.querySelector('#text');
let formSubmitStatus = false;

let isStorageSupport = true;
let storage = "";
let storageEmail = "";

try{
	storage = localStorage.getItem("login");
	storageEmail = localStorage.getItem("email");
}catch(err){
	isStorageSupport = false;
}


contactUsOpenPopup.onclick = function (evt){
  evt.preventDefault;  
	popup.classList.add('popup-show');
	popupLogin.focus();
	if(storage){
		popupLogin.value = storage;
		popupEmail.focus();
	} 
	
	if(storageEmail){
		popupEmail.value = storageEmail;
		popupText.focus();
	}
}

popupCloseButton.onclick = function(){
	popup.classList.remove('popup-show');
	popupLogin.classList.remove('popup-input-error');
	popupEmail.classList.remove('popup-input-error');
	popupText.classList.remove('popup-input-error');
}
document.addEventListener('keydown', function(evt){
	if(evt.keyCode === 27){
		popup.classList.remove('popup-show');
		popupLogin.classList.remove('popup-input-error');
		popupEmail.classList.remove('popup-input-error');
		popupText.classList.remove('popup-input-error');
	}
});



popupForm.addEventListener('submit', function(evt){
	formSubmitStatus = true;
		if(!popupLogin.value || !popupEmail.value || !popupText.value){
			evt.preventDefault();
			if(!popupLogin.value){
				popupLogin.classList.remove('popup-input-error');
				popupLogin.offsetWidth = popupLogin.offsetWidth;
				popupLogin.classList.add('popup-input-error');
			}else{
				popupLogin.classList.remove('popup-input-error');
				if(isStorageSupport){
				localStorage.setItem('login', popupLogin.value);
				}
			}
			if(!popupEmail.value){
				popupEmail.classList.remove('popup-input-error');
				popupEmail.offsetWidth = popupLogin.offsetWidth;
				popupEmail.classList.add('popup-input-error');
			}
			else{
				popupEmail.classList.remove('popup-input-error');
				if(isStorageSupport){
				localStorage.setItem('email', popupEmail.value);
				}
			}
			if(!popupText.value){
				popupText.classList.remove('popup-input-error');
				popupText.offsetWidth = popupLogin.offsetWidth;
				popupText.classList.add('popup-input-error');
			}
			else{
				popupText.classList.remove('popup-input-error');
				if(isStorageSupport){
				localStorage.setItem('text', popupText.value);
				}
			}
			console.log('Все поля должны быть заполнены!');
		}
});

popupLogin.addEventListener('keydown', function(){
	if(formSubmitStatus){
		 if(popupLogin.value){
			popupLogin.classList.remove('popup-input-error');
		 }else{
			popupLogin.classList.add('popup-input-error');
		 }
	}
});
popupEmail.addEventListener('keydown', function(){
	if(formSubmitStatus){
		 if(popupEmail.value){
			popupEmail.classList.remove('popup-input-error');
		 }else{
			popupEmail.classList.add('popup-input-error');
		 }
	}
});
popupText.addEventListener('keydown', function(){
	if(formSubmitStatus){
		 if(popupText.value){
			popupText.classList.remove('popup-input-error');
		 }else{
			popupText.classList.add('popup-input-error');
		 }
	}
});

popupLogin.addEventListener('change', function(){
	if(formSubmitStatus){
		 if(popupLogin.value){
			popupLogin.classList.remove('popup-input-error');
		 }
	}
});
popupEmail.addEventListener('change', function(){
	if(formSubmitStatus){
		 if(popupEmail.value){
			popupEmail.classList.remove('popup-input-error');
		 }
	}
});
popupText.addEventListener('chenge', function(){
	if(formSubmitStatus){
		 if(popupText.value){
			popupText.classList.remove('popup-input-error');
		 }
	}
});

// Код для слайдера на главной странице

let sliderIndicatorButtons = document.querySelectorAll('.slider-indicator-button');
let slide1 = document.querySelector('.header-slider_item-iphones');
let slide2 = document.querySelector('.header-slider_item-imac');
let slide3 = document.querySelector('.header-slider_item-tablet');
let slideButton1 = document.querySelector('.slider-indicator-button1');
let slideButton2 = document.querySelector('.slider-indicator-button2');
let slideButton3 = document.querySelector('.slider-indicator-button3');

sliderIndicatorButtons.forEach(element => {
  element.onclick = () => {
		if(!element.classList.contains('slider-indicator-current')){
			slideButton1.classList.add('slider-indicator-current');
			slideButton2.classList.remove('slider-indicator-current');
			slideButton3.classList.remove('slider-indicator-current');
		}
		if(!element.classList.contains('slider-indicator-current')){
			slideButton2.classList.add('slider-indicator-current');
			slideButton1.classList.remove('slider-indicator-current');
			slideButton3.classList.remove('slider-indicator-current');
		}
		if(!element.classList.contains('slider-indicator-current')){
			slideButton3.classList.add('slider-indicator-current');
			slideButton2.classList.remove('slider-indicator-current');
			slideButton1.classList.remove('slider-indicator-current');
		}
      if(element.ariaLabel == 'Первый слайд'){
        if(slide1.classList.contains('slider-display-none')){
					slide1.classList.remove('slider-display-none');
					slide2.classList.add('slider-display-none');
					slide3.classList.add('slider-display-none');
				}
      }
       else if(element.ariaLabel == 'Второй слайд'){
        if(slide2.classList.contains('slider-display-none')){
					slide2.classList.remove('slider-display-none');
					slide1.classList.add('slider-display-none');
					slide3.classList.add('slider-display-none');
				}
        
      }
       else if(element.ariaLabel == 'Третий слайд'){
        if(slide3.classList.contains('slider-display-none')){
					slide3.classList.remove('slider-display-none');
					slide2.classList.add('slider-display-none');
					slide1.classList.add('slider-display-none');
				}
      }
  }
});