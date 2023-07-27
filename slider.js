document.addEventListener("DOMContentLoaded", function() {
setInterval(goNext,3500)
})
const slides = document.querySelectorAll(".slide");
let counter = 0;
const totalSlides = slides.length;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = totalSlides - 1;
    }
    slideImage();
};

const goNext = () => {
    counter++;
    if (counter >= totalSlides) {
        counter = 0;
    }
    slideImage();
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};






document.addEventListener("DOMContentLoaded", function() {
    setInterval(goNext1,3000)
    })
    const slides1 = document.querySelectorAll(".slide1");
    let counter1 = 0;
    const totalSlides1 = slides1.length;
    
    slides1.forEach((slide1, index) => {
        slide1.style.left = `${index * 100}%`;
    });
    
    const goPrev1 = () => {
        counter1--;
        if (counter1 < 0) {
            counter1 = totalSlides1 - 1;
        }
        slideImage1();
    };
    
    const goNext1 = () => {
        counter1++;
        if (counter1 >= totalSlides) {
            counter1 = 0;
        }
        slideImage1();
    };
    
    const slideImage1 = () => {
        slides1.forEach((slide1) => {
            slide1.style.transform = `translateX(-${counter1 * 100}%)`;
        });
    };

    let valueDisplays=document.querySelectorAll(".num")
let interval=1000;

valueDisplays.forEach((valueDisplay)=>{
	let startValue=1;
	let v=1;
	let endValue=parseInt(valueDisplay.getAttribute("data-val"));
	let duration=Math.floor(interval/endValue);
	let counter=setInterval(function(){
		startValue+=1;
		v+=400;
		valueDisplay.textContent=startValue;
		document.getElementById('nu').textContent=v;
		if(startValue==endValue ){
			document.getElementById('nu').textContent=100000;
			clearInterval(counter);
		}
	},duration);
});
    
