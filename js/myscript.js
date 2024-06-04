//variables
var leftScrollButton = document.getElementById('firstScrollBrandsBtn');
var scrollBrands = document.getElementById('scrollBrands');
var rightScrollButton = document.getElementById('secondScrollBrandsBtn');
var scrollBrandsImage = document.getElementById("scrollBrandsImage");

function leftScrollButtonOn() {
    scrollBrands.style.transition = 'all 0.2s';
    scrollBrands.style.transitionTimingFunction = 'linear';
    scrollBrands.style.backgroundImage = "url('/images/scrollLeft.svg')";
}

function leftScrollButtonLeave() {
    scrollBrands.style.transition = 'all 0.2s';
    scrollBrands.style.transitionTimingFunction = 'linear';
    scrollBrands.style.backgroundImage = "url('/images/scroll.svg')";
}

function rightScrollButtonOn() {
    scrollBrands.style.transition = 'all 0.2s';
    scrollBrands.style.transitionTimingFunction = 'linear';
    scrollBrands.style.backgroundImage = "url('/images/scrollRight.svg')";
}

function rightScrollButtonLeave() {
    scrollBrands.style.transition = 'all 0.2s';
    scrollBrands.style.transitionTimingFunction = 'linear';
    scrollBrands.style.backgroundImage = "url('/images/scroll.svg')";
}

function rightScrollButtonOnclick () {
    rightScrollButton.onclick = null;
    sideScroll(scrollBrandsImage,'right',15,500,10);
}

function leftScrollButtonOnclick () {
    leftScrollButton.onclick = null;
    sideScroll(scrollBrandsImage,'left',15,500,10);
}

rightScrollButton.onclick = rightScrollButtonOnclick;
leftScrollButton.onclick = leftScrollButtonOnclick;

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
            rightScrollButton.onclick = rightScrollButtonOnclick;
            leftScrollButton.onclick = leftScrollButtonOnclick;
        }
    }, speed);
}


