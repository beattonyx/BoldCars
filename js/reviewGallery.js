
var reviewGalleryRightBtn = document.getElementById("reviewGalleryRightBtn");
var reviewGalleryLeftBtn = document.getElementById("reviewGalleryLeftBtn");

var reviewGallery1 = document.getElementById("reviewGallery1");
var reviewGallery2 = document.getElementById("reviewGallery2");
var reviewGallery3 = document.getElementById("reviewGallery3");
var reviewGallery1_opacity = document.getElementById("reviewGallery1_opacity");
var reviewGallery2_opacity = document.getElementById("reviewGallery2_opacity");
var reviewGallery3_opacity = document.getElementById("reviewGallery3_opacity");

var reviewLeftOpacity = [1, 0, 0];
var reviewRightOpacity = [0, 1, 0];
reviewGallery1.style.transition = "1s";
reviewGallery2.style.transition = "1s";
reviewGallery3.style.transition = "1s";
reviewGallery1_opacity.style.transition = "1s";
reviewGallery2_opacity.style.transition = "1s";
reviewGallery3_opacity.style.transition = "1s";

function moveLeftLeftImage() {
    for(i=0; i<reviewLeftOpacity.length; i++) {
    if (i==2) {
        if (reviewLeftOpacity[i] == 1) {
            reviewLeftOpacity[i] = 0;
            reviewLeftOpacity[0] = 1; 
            reviewGallery3.style.opacity = 0;
            reviewGallery1.style.opacity = 1;
            break;
        }
    }
    if (i==1) {
        if (reviewLeftOpacity[i] == 1) {
            reviewLeftOpacity[i] = 0;
            reviewLeftOpacity[2] = 1; 
            reviewGallery2.style.opacity = 0;
            reviewGallery3.style.opacity = 1;
            break;
        }
    }
    if (i==0) {
        if (reviewLeftOpacity[i] == 1) {
            reviewLeftOpacity[i] = 0;
            reviewLeftOpacity[1] = 1; 
            reviewGallery1.style.opacity = 0;
            reviewGallery2.style.opacity = 1;
            break;
        }
    }
}
}

function moveLeftRightImage() {
    for(i=0; i<reviewRightOpacity.length; i++) {
    if (i==2) {
        if (reviewRightOpacity[i] == 1) {
            reviewRightOpacity[i] = 0;
            reviewRightOpacity[0] = 1; 
            reviewGallery3_opacity.style.opacity = 0;
            reviewGallery1_opacity.style.opacity = 1;
            break;
        }
    }
    if (i==1) {
        if (reviewRightOpacity[i] == 1) {
            reviewRightOpacity[i] = 0;
            reviewRightOpacity[2] = 1; 
            reviewGallery2_opacity.style.opacity = 0;
            reviewGallery3_opacity.style.opacity = 1;
            break;
        }
    }
    if (i==0) {
        if (reviewRightOpacity[i] == 1) {
            reviewRightOpacity[i] = 0;
            reviewRightOpacity[1] = 1; 
            reviewGallery1_opacity.style.opacity = 0;
            reviewGallery2_opacity.style.opacity = 1;
            break;
        }
    }
}
}

function moveRightLeftImage() {
    for(i=0; i<reviewLeftOpacity.length; i++) {
    if (i==2) {
        if (reviewLeftOpacity[i] == 1) {
            reviewLeftOpacity[i] = 0;
            reviewLeftOpacity[1] = 1; 
            reviewGallery3.style.opacity = 0;
            reviewGallery2.style.opacity = 1;
            break;
        }
    }
    if (i==1) {
        if (reviewLeftOpacity[i] == 1) {
            reviewLeftOpacity[i] = 0;
            reviewLeftOpacity[0] = 1; 
            reviewGallery2.style.opacity = 0;
            reviewGallery1.style.opacity = 1;
            break;
        }
    }
    if (i==0) {
        if (reviewLeftOpacity[i] == 1) {
            reviewLeftOpacity[i] = 0;
            reviewLeftOpacity[2] = 1; 
            reviewGallery1.style.opacity = 0;
            reviewGallery3.style.opacity = 1;
            break;
        }
    }
}
}

function moveRightRightImage() {
    for(i=0; i<reviewRightOpacity.length; i++) {
    if (i==2) {
        if (reviewRightOpacity[i] == 1) {
            reviewRightOpacity[i] = 0;
            reviewRightOpacity[1] = 1; 
            reviewGallery3_opacity.style.opacity = 0;
            reviewGallery2_opacity.style.opacity = 1;
            break;
        }
    }
    if (i==1) {
        if (reviewRightOpacity[i] == 1) {
            reviewRightOpacity[i] = 0;
            reviewRightOpacity[0] = 1; 
            reviewGallery2_opacity.style.opacity = 0;
            reviewGallery1_opacity.style.opacity = 1;
            break;
        }
    }
    if (i==0) {
        if (reviewRightOpacity[i] == 1) {
            reviewRightOpacity[i] = 0;
            reviewRightOpacity[2] = 1; 
            reviewGallery1_opacity.style.opacity = 0;
            reviewGallery3_opacity.style.opacity = 1;
            break;
        }
    }
}
}

function sliderLeft() {
    moveLeftRightImage();
    moveLeftLeftImage();
}

function sliderRight() {
    moveRightLeftImage();
    moveRightRightImage();
}

reviewGalleryRightBtn.onclick = sliderRight;
reviewGalleryLeftBtn.onclick = sliderLeft;