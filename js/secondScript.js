
var galleryRightBtn = document.getElementById("galleryRightBtn");
var galleryLeftBtn = document.getElementById("galleryLeftBtn");
var galleryImageLeft5 = document.getElementById("galleryImageLeft5");
var galleryImageLeft4 = document.getElementById("galleryImageLeft4");
var galleryImageLeft3 = document.getElementById("galleryImageLeft3");
var galleryImageLeft2 = document.getElementById("galleryImageLeft2");
var galleryImageLeft1 = document.getElementById("galleryImageLeft1");
var leftOpacity = [0, 0, 0, 0, 1];
galleryImageLeft5.style.transition = "1s";
galleryImageLeft4.style.transition = "1s";
galleryImageLeft3.style.transition = "1s";
galleryImageLeft2.style.transition = "1s";
galleryImageLeft1.style.transition = "1s";

var galleryImageCenter1 = document.getElementById("galleryImageCenter1");
var galleryImageCenter2 = document.getElementById("galleryImageCenter2");
var galleryImageCenter3 = document.getElementById("galleryImageCenter3");
var galleryImageCenter4 = document.getElementById("galleryImageCenter4");
var galleryImageCenter5 = document.getElementById("galleryImageCenter5");
var centerOpacity = [1, 0, 0, 0, 0];
galleryImageCenter1.style.transition = "1s";
galleryImageCenter2.style.transition = "1s";
galleryImageCenter3.style.transition = "1s";
galleryImageCenter4.style.transition = "1s";
galleryImageCenter5.style.transition = "1s";

var galleryImageRight1 = document.getElementById("galleryImageRight1");
var galleryImageRight2 = document.getElementById("galleryImageRight2");
var galleryImageRight3 = document.getElementById("galleryImageRight3");
var galleryImageRight4 = document.getElementById("galleryImageRight4");
var galleryImageRight5 = document.getElementById("galleryImageRight5");
var rightOpacity = [0, 1, 0, 0, 0];
galleryImageRight1.style.transition = "1s";
galleryImageRight2.style.transition = "1s";
galleryImageRight3.style.transition = "1s";
galleryImageRight4.style.transition = "1s";
galleryImageRight5.style.transition = "1s";
//
function leftCenterImage() {
    for(i=0; i<centerOpacity.length; i++) {
    if (i==4) {
        if (centerOpacity[i] == 1) {
            centerOpacity[i] = 0;
            centerOpacity[3] = 1; 
            galleryImageCenter5.style.opacity = 0;
            galleryImageCenter4.style.opacity = 1;
            galleryImageCenter4.src=galleryImageCenter4.getAttribute('src');
            break;
        }
    }
    if (i==3) {
        if (centerOpacity[i] == 1) {
            centerOpacity[i] = 0;
            centerOpacity[2] = 1; 
            galleryImageCenter4.style.opacity = 0;
            galleryImageCenter3.style.opacity = 1;
            galleryImageCenter3.src=galleryImageCenter3.getAttribute('src');
            break;
        }
    }
    if (i==2) {
        if (centerOpacity[i] == 1) {
            centerOpacity[i] = 0;
            centerOpacity[1] = 1; 
            galleryImageCenter3.style.opacity = 0;
            galleryImageCenter2.style.opacity = 1;
            galleryImageCenter2.src=galleryImageCenter2.getAttribute('src');
            break;
        }
    }
    if (i==1) {
        if (centerOpacity[i] == 1) {
            centerOpacity[i] = 0;
            centerOpacity[0] = 1; 
            galleryImageCenter2.style.opacity = 0;
            galleryImageCenter1.style.opacity = 1;
            galleryImageCenter1.src=galleryImageCenter1.getAttribute('src');
            break;
        }
    }
    if (i==0) {
        if (centerOpacity[i] == 1) {
            centerOpacity[i] = 0;
            centerOpacity[4] = 1; 
            galleryImageCenter1.style.opacity = 0;
            galleryImageCenter5.style.opacity = 1;
            galleryImageCenter5.src=galleryImageCenter5.getAttribute('src');
            break;
        }
    }
}
}

function leftLeftImage() {
    for(i=0; i<leftOpacity.length; i++) {
    if (i==4) {
        if (leftOpacity[i] == 1) {
            leftOpacity[i] = 0;
            leftOpacity[3] = 1; 
            galleryImageLeft5.style.opacity = 0;
            galleryImageLeft4.style.opacity = 1;
            break;
        }
    }
    if (i==3) {
        if (leftOpacity[i] == 1) {
            leftOpacity[i] = 0;
            leftOpacity[2] = 1; 
            galleryImageLeft4.style.opacity = 0;
            galleryImageLeft3.style.opacity = 1;
            break;
        }
    }
    if (i==2) {
        if (leftOpacity[i] == 1) {
            leftOpacity[i] = 0;
            leftOpacity[1] = 1; 
            galleryImageLeft3.style.opacity = 0;
            galleryImageLeft2.style.opacity = 1;
            break;
        }
    }
    if (i==1) {
        if (leftOpacity[i] == 1) {
            leftOpacity[i] = 0;
            leftOpacity[0] = 1; 
            galleryImageLeft2.style.opacity = 0;
            galleryImageLeft1.style.opacity = 1;
            break;
        }
    }
    if (i==0) {
        if (leftOpacity[i] == 1) {
            leftOpacity[i] = 0;
            leftOpacity[4] = 1; 
            galleryImageLeft1.style.opacity = 0;
            galleryImageLeft5.style.opacity = 1;
            break;
        }
    }
}
}

function leftRightImage() {
    for(i=0; i<rightOpacity.length; i++) {
    if (i==4) {
        if (rightOpacity[i] == 1) {
            rightOpacity[i] = 0;
            rightOpacity[3] = 1; 
            galleryImageRight5.style.opacity = 0;
            galleryImageRight4.style.opacity = 1;
            break;
        }
    }
    if (i==3) {
        if (rightOpacity[i] == 1) {
            rightOpacity[i] = 0;
            rightOpacity[2] = 1; 
            galleryImageRight4.style.opacity = 0;
            galleryImageRight3.style.opacity = 1;
            break;
        }
    }
    if (i==2) {
        if (rightOpacity[i] == 1) {
            rightOpacity[i] = 0;
            rightOpacity[1] = 1; 
            galleryImageRight3.style.opacity = 0;
            galleryImageRight2.style.opacity = 1;
            break;
        }
    }
    if (i==1) {
        if (rightOpacity[i] == 1) {
            rightOpacity[i] = 0;
            rightOpacity[0] = 1; 
            galleryImageRight2.style.opacity = 0;
            galleryImageRight1.style.opacity = 1;
            break;
        }
    }
    if (i==0) {
        if (rightOpacity[i] == 1) {
            rightOpacity[i] = 0;
            rightOpacity[4] = 1; 
            galleryImageRight1.style.opacity = 0;
            galleryImageRight5.style.opacity = 1;
            break;
        }
    }
}
}

function rightCenterImage() {
    for(i=0; i<centerOpacity.length; i++) {
    if (i==4) {
        if (centerOpacity[i] == 1) {
            centerOpacity[i] = 0;
            centerOpacity[0] = 1; 
            galleryImageCenter5.style.opacity = 0;
            galleryImageCenter1.style.opacity = 1;
            galleryImageCenter1.src=galleryImageCenter1.getAttribute('src');
            break;
        }
    }
    if (i==3) {
        if (centerOpacity[i] == 1) {
            centerOpacity[i] = 0;
            centerOpacity[4] = 1; 
            galleryImageCenter4.style.opacity = 0;
            galleryImageCenter5.style.opacity = 1;
            galleryImageCenter5.src=galleryImageCenter5.getAttribute('src');
            break;
        }
    }
    if (i==2) {
        if (centerOpacity[i] == 1) {
            centerOpacity[i] = 0;
            centerOpacity[3] = 1; 
            galleryImageCenter3.style.opacity = 0;
            galleryImageCenter4.style.opacity = 1;
            galleryImageCenter4.src=galleryImageCenter4.getAttribute('src');
            break;
        }
    }
    if (i==1) {
        if (centerOpacity[i] == 1) {
            centerOpacity[i] = 0;
            centerOpacity[2] = 1; 
            galleryImageCenter2.style.opacity = 0;
            galleryImageCenter3.style.opacity = 1;
            galleryImageCenter3.src=galleryImageCenter3.getAttribute('src');
            break;
        }
    }
    if (i==0) {
        if (centerOpacity[i] == 1) {
            centerOpacity[i] = 0;
            centerOpacity[1] = 1; 
            galleryImageCenter1.style.opacity = 0;
            galleryImageCenter2.style.opacity = 1;
            galleryImageCenter2.src=galleryImageCenter2.getAttribute('src');
            break;
        }
    }
}
}

function rightLeftImage() {
    for(i=0; i<leftOpacity.length; i++) {
    if (i==4) {
        if (leftOpacity[i] == 1) {
            leftOpacity[i] = 0;
            leftOpacity[0] = 1; 
            galleryImageLeft5.style.opacity = 0;
            galleryImageLeft1.style.opacity = 1;
            break;
        }
    }
    if (i==3) {
        if (leftOpacity[i] == 1) {
            leftOpacity[i] = 0;
            leftOpacity[4] = 1; 
            galleryImageLeft4.style.opacity = 0;
            galleryImageLeft5.style.opacity = 1;
            break;
        }
    }
    if (i==2) {
        if (leftOpacity[i] == 1) {
            leftOpacity[i] = 0;
            leftOpacity[3] = 1; 
            galleryImageLeft3.style.opacity = 0;
            galleryImageLeft4.style.opacity = 1;
            break;
        }
    }
    if (i==1) {
        if (leftOpacity[i] == 1) {
            leftOpacity[i] = 0;
            leftOpacity[2] = 1; 
            galleryImageLeft2.style.opacity = 0;
            galleryImageLeft3.style.opacity = 1;
            break;
        }
    }
    if (i==0) {
        if (leftOpacity[i] == 1) {
            leftOpacity[i] = 0;
            leftOpacity[1] = 1; 
            galleryImageLeft1.style.opacity = 0;
            galleryImageLeft2.style.opacity = 1;
            break;
        }
    }
}
}

function rightRightImage() {
    for(i=0; i<rightOpacity.length; i++) {
    if (i==4) {
        if (rightOpacity[i] == 1) {
            rightOpacity[i] = 0;
            rightOpacity[0] = 1; 
            galleryImageRight5.style.opacity = 0;
            galleryImageRight1.style.opacity = 1;
            break;
        }
    }
    if (i==3) {
        if (rightOpacity[i] == 1) {
            rightOpacity[i] = 0;
            rightOpacity[4] = 1; 
            galleryImageRight4.style.opacity = 0;
            galleryImageRight5.style.opacity = 1;
            break;
        }
    }
    if (i==2) {
        if (rightOpacity[i] == 1) {
            rightOpacity[i] = 0;
            rightOpacity[3] = 1; 
            galleryImageRight3.style.opacity = 0;
            galleryImageRight4.style.opacity = 1;
            break;
        }
    }
    if (i==1) {
        if (rightOpacity[i] == 1) {
            rightOpacity[i] = 0;
            rightOpacity[2] = 1; 
            galleryImageRight2.style.opacity = 0;
            galleryImageRight3.style.opacity = 1;
            break;
        }
    }
    if (i==0) {
        if (rightOpacity[i] == 1) {
            rightOpacity[i] = 0;
            rightOpacity[1] = 1; 
            galleryImageRight1.style.opacity = 0;
            galleryImageRight2.style.opacity = 1;
            break;
        }
    }
}
}

function sliderLeft() {
    leftCenterImage();
    leftLeftImage();
    leftRightImage();
}

function sliderRight() {
    rightCenterImage();
    rightLeftImage();
    rightRightImage();
}

galleryLeftBtn.onclick = sliderRight;
galleryRightBtn.onclick = sliderLeft;