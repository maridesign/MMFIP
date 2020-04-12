document.querySelector('#photo_slider').onclick = function () {
    document.querySelector('.slider_wrap').style.display = 'block';
    document.querySelector('.home_page').style.backgroundSize = 'auto 37%';
}

let winWidth = document.documentElement.clientWidth;

if (winWidth < 700) {
    document.querySelector('#photo_slider').onclick = null;
}

let images = document.querySelectorAll('.slider img');
let current = 0;

function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0');
}

slider();

document.querySelector('.btn_slider_left').onclick = function () {
    if (current - 1 == -1) {
        current = images.length - 1;
    }
    else {
        current--;
    }
    slider();
};

document.querySelector('.btn_slider_right').onclick = function () {
    if (current + 1 == images.length) {
        current = 0;
    }
    else {
        current++;
    }
    slider();
};