// ------- Image Slider JS -------

// All selectors
const images = document.querySelectorAll('.img-slider-item');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

// Create same number of dots as there are number of images
for(let i = 0; i < images.length; i++) {
    let dot = document.createElement('div');
    dot.classList.add('dot');

    dotsContainer.appendChild(dot);
}

// Get all dots in an array
const dots = document.querySelectorAll('.dot');
dots[0].classList.add('active'); // initiate first dot as active

// A variable to manipulate the behiviour of active dots
let currentDot = 0;

// Arrange all images in the same line
images.forEach((image, i) => {
    image.style.left = `${i * 100}%`;
});

// Functions to show images and manage activity of dots on button click
const toNextImg = () => {
    images.forEach(image => {
        if(image.style.left === '0%') {
            image.style.left = `${(images.length - 1) * 100}%`;
        } else {
            image.style.left = JSON.stringify((parseInt(image.style.left.split('%')[0]) - 100)) + "%";
        }
    });
    dots[currentDot].classList.remove('active');
    currentDot = (currentDot + 1) % dots.length;
    dots[currentDot].classList.add('active');
}

const toPreviousImg = () => {
    images.forEach(image => {
        if(image.style.left === `${(images.length - 1) * 100}%`) {
            image.style.left = "0%";
        } else {
            image.style.left = JSON.stringify(parseInt(image.style.left.split('%')[0]) + 100) + "%";
        }
    });
    dots[currentDot].classList.remove('active');
    if(currentDot === 0) {
        currentDot = dots.length - 1;
        dots[currentDot].classList.add('active');
    } else {
        currentDot = Math.abs((currentDot - 1) % dots.length);
        dots[currentDot].classList.add('active');
    }
}

const toCertainImg = i => {
    let diff = Math.abs(i - currentDot);
    if(currentDot < i) {
        for(let i = 0; i < diff; i++) {
            toNextImg();
        }
    } else if(currentDot > i) {
        for(let i = 0; i < diff; i++) {
            toPreviousImg();
        }
    }
}

// Event Listeners for previous and next buttons
next.addEventListener('click', (e) => {
    toNextImg();
});

previous.addEventListener('click', (e) => {
    toPreviousImg();
});

// To images with dots
dots.forEach((dot, i) => {
    dot.addEventListener('click', e => {
        toCertainImg(i);
    });
})

// To run the image slider automatically
const autoSlide = () => {
    toNextImg();
}

setInterval(autoSlide, 10000);

// Back To Top Button

const backToTop = document.querySelector('.to-top');

backToTop.addEventListener('click', e => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})