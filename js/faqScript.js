var button_1 = document.getElementById('button_1');
var button_2 = document.getElementById('button_2');
var button_3 = document.getElementById('button_3');
var button_4 = document.getElementById('button_4');
var button_5 = document.getElementById('button_5');
var button_6 = document.getElementById('button_6');
var button_7 = document.getElementById('button_7');
var section6 = document.getElementById('section6');
var sectionHeight = 750;

var textAreaDiv_1 = document.getElementById('textAreaDiv_1');
var textAreaDiv_2 = document.getElementById('textAreaDiv_2');
var textAreaDiv_3 = document.getElementById('textAreaDiv_3');
var textAreaDiv_4 = document.getElementById('textAreaDiv_4');
var textAreaDiv_5 = document.getElementById('textAreaDiv_5');
var textAreaDiv_6 = document.getElementById('textAreaDiv_6');
var textAreaDiv_7 = document.getElementById('textAreaDiv_7');

var accordion_2 = document.getElementById('accordion_2');

var buttonState_1 = true;
var buttonState_2 = true;
var buttonState_3 = true;
var buttonState_4 = true;
var buttonState_5 = true;
var buttonState_6 = true;
var buttonState_7 = true;

button_1.style.transition = '0.5s';
button_2.style.transition = '0.5s';
button_3.style.transition = '0.5s';
button_4.style.transition = '0.5s';
button_5.style.transition = '0.5s';
button_6.style.transition = '0.5s';
button_7.style.transition = '0.5s';
section6.style.transition = '0.5s';

function hideTextArea1() {
    if (buttonState_1) {
        textAreaDiv_1.style.transition = 'height 0.5s, opacity 0.2s';
        textAreaDiv_1.style.height = '0px';
        textAreaDiv_1.style.opacity = 0;
        var timer = setInterval(function(){
            textAreaDiv_1.style.marginTop = '0px';
            window.clearInterval(timer);
        }, 150);
        if (sectionHeight != 750) {
            sectionHeight = sectionHeight - 62;
            section6.style.height = sectionHeight + 'px';
        } 
        button_1.style.transform = 'rotate(-180deg)';
        button_1.src = "images/dropdownGray.png";
        buttonState_1 = false;
    } else {
        textAreaDiv_1.style.transition = 'height 0.5s, opacity 0.8s';
        textAreaDiv_1.style.height = '52px';
        textAreaDiv_1.style.opacity = 1;
        textAreaDiv_1.style.marginTop = '10px';
        sectionHeight = sectionHeight + 62;
        section6.style.height = sectionHeight + 'px'; 

        button_1.style.transform = 'rotate(0)';
        button_1.src = "images/dropdown.png";

        buttonState_1 = true;
    }
}

function hideTextArea2() {
    if (buttonState_2) {
        textAreaDiv_2.style.transition = 'height 0.5s, opacity 0.2s';
        textAreaDiv_2.style.height = '0px';
        textAreaDiv_2.style.opacity = 0;
        var timer = setInterval(function(){
            textAreaDiv_2.style.marginTop = '0px';
            window.clearInterval(timer);
        }, 150);
        if (sectionHeight != 750) {
            sectionHeight = sectionHeight - 114;
            section6.style.height = sectionHeight + 'px';
        } 
        button_2.style.transform = 'rotate(-180deg)';
        button_2.src = "/images/dropdownGray.png";
        buttonState_2 = false;
    } else {
        textAreaDiv_2.style.transition = 'height 0.5s, opacity 1.6s';
        textAreaDiv_2.style.height = '104px';
        textAreaDiv_2.style.opacity = 1;
        textAreaDiv_2.style.marginTop = '10px';
        sectionHeight = sectionHeight + 114;
        section6.style.height = sectionHeight + 'px'; 

        button_2.style.transform = 'rotate(0)';
        button_2.src = "/images/dropdown.png";

        buttonState_2 = true;
    }
}

function hideTextArea3() {
    if (buttonState_3) {
        textAreaDiv_3.style.transition = 'height 0.5s, opacity 0.2s';
        textAreaDiv_3.style.height = '0px';
        textAreaDiv_3.style.opacity = 0;
        var timer = setInterval(function(){
            textAreaDiv_3.style.marginTop = '0px';
            window.clearInterval(timer);
        }, 150);
        if (sectionHeight != 750) {
            sectionHeight = sectionHeight - 114;
            section6.style.height = sectionHeight + 'px';
        } 
        button_3.style.transform = 'rotate(-180deg)';
        button_3.src = "/images/dropdownGray.png";
        buttonState_3 = false;
    } else {
        textAreaDiv_3.style.transition = 'height 0.5s, opacity 1.6s';
        textAreaDiv_3.style.height = '104px';
        textAreaDiv_3.style.opacity = 1;
        textAreaDiv_3.style.marginTop = '10px';
        sectionHeight = sectionHeight + 114;
        section6.style.height = sectionHeight + 'px'; 

        button_3.style.transform = 'rotate(0)';
        button_3.src = "/images/dropdown.png";

        buttonState_3 = true;
    }
}

function hideTextArea4() {
    if (buttonState_4) {
        textAreaDiv_4.style.transition = 'height 0.5s, opacity 0.2s';
        textAreaDiv_4.style.height = '0px';
        textAreaDiv_4.style.opacity = 0;
        var timer = setInterval(function(){
            textAreaDiv_4.style.marginTop = '0px';
            window.clearInterval(timer);
        }, 150);
        if (sectionHeight != 750) {
            sectionHeight = sectionHeight - 88;
            section6.style.height = sectionHeight + 'px';
        } 
        button_4.style.transform = 'rotate(-180deg)';
        button_4.src = "/images/dropdownGray.png";
        buttonState_4 = false;
    } else {
        textAreaDiv_4.style.transition = 'height 0.5s, opacity 1.4s';
        textAreaDiv_4.style.height = '78px';
        textAreaDiv_4.style.opacity = 1;
        textAreaDiv_4.style.marginTop = '10px';
        sectionHeight = sectionHeight + 88;
        section6.style.height = sectionHeight + 'px'; 

        button_4.style.transform = 'rotate(0)';
        button_4.src = "/images/dropdown.png";

        buttonState_4 = true;
    }
}

function hideTextArea5() {
    if (buttonState_5) {
        textAreaDiv_5.style.transition = 'height 0.5s, opacity 0.2s';
        textAreaDiv_5.style.height = '0px';
        textAreaDiv_5.style.opacity = 0;
        var timer = setInterval(function(){
            textAreaDiv_5.style.marginTop = '0px';
            window.clearInterval(timer);
        }, 150);
        if (sectionHeight != 750) {
            sectionHeight = sectionHeight - 62;
            section6.style.height = sectionHeight + 'px';
        } 
        button_5.style.transform = 'rotate(-180deg)';
        button_5.src = "/images/dropdownGray.png";
        buttonState_5 = false;
    } else {
        textAreaDiv_5.style.transition = 'height 0.5s, opacity 1.2s';
        textAreaDiv_5.style.height = '52px';
        textAreaDiv_5.style.opacity = 1;
        textAreaDiv_5.style.marginTop = '10px';
        sectionHeight = sectionHeight + 62;
        section6.style.height = sectionHeight + 'px'; 

        button_5.style.transform = 'rotate(0)';
        button_5.src = "/images/dropdown.png";

        buttonState_5 = true;
    }
}

function hideTextArea6() {
    if (buttonState_6) {
        textAreaDiv_6.style.transition = 'height 0.5s, opacity 0.2s';
        textAreaDiv_6.style.height = '0px';
        textAreaDiv_6.style.opacity = 0;
        var timer = setInterval(function(){
            textAreaDiv_6.style.marginTop = '0px';
            window.clearInterval(timer);
        }, 150);
        if (sectionHeight != 750) {
            sectionHeight = sectionHeight - 114;
            section6.style.height = sectionHeight + 'px';
        } 
        button_6.style.transform = 'rotate(-180deg)';
        button_6.src = "/images/dropdownGray.png";
        buttonState_6 = false;
    } else {
        textAreaDiv_6.style.transition = 'height 0.5s, opacity 1.4s';
        textAreaDiv_6.style.height = '104px';
        textAreaDiv_6.style.opacity = 1;
        textAreaDiv_6.style.marginTop = '10px';
        sectionHeight = sectionHeight + 114;
        section6.style.height = sectionHeight + 'px'; 

        button_6.style.transform = 'rotate(0)';
        button_6.src = "/images/dropdown.png";

        buttonState_6 = true;
    }
}

function hideTextArea7() {
    if (buttonState_7) {
        textAreaDiv_7.style.transition = 'height 0.5s, opacity 0.2s';
        textAreaDiv_7.style.height = '0px';
        textAreaDiv_7.style.opacity = 0;
        var timer = setInterval(function(){
            textAreaDiv_7.style.marginTop = '0px';
            window.clearInterval(timer);
        }, 150);
        if (sectionHeight != 750) {
            sectionHeight = sectionHeight - 38;
            section6.style.height = sectionHeight + 'px';
        } 
        button_7.style.transform = 'rotate(-180deg)';
        button_7.src = "/images/dropdownGray.png";
        buttonState_7 = false;
    } else {
        textAreaDiv_7.style.transition = 'height 0.5s, opacity 1s';
        textAreaDiv_7.style.height = '28px';
        textAreaDiv_7.style.opacity = 1;
        textAreaDiv_7.style.marginTop = '10px';
        sectionHeight = sectionHeight + 38;
        section6.style.height = sectionHeight + 'px'; 

        button_7.style.transform = 'rotate(0)';
        button_7.src = "/images/dropdown.png";

        buttonState_7 = true;
    }
}
hideTextArea1();
hideTextArea2();
hideTextArea3();
hideTextArea4();
hideTextArea5();
hideTextArea6();
hideTextArea7();

button_1.onclick = hideTextArea1;
button_2.onclick = hideTextArea2;
button_3.onclick = hideTextArea3;
button_4.onclick = hideTextArea4;
button_5.onclick = hideTextArea5;
button_6.onclick = hideTextArea6;
button_7.onclick = hideTextArea7;