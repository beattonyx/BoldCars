const nameForm = document.getElementById('formName');
const phoneForm = document.getElementById('formPhoneNumber');
const questionForm = document.getElementById('letterFrom');
var nameSpan = document.getElementById('namePlaceholder');
var phoneSpan = document.getElementById('phoneNumberPlaceholder');
var questionSpan = document.getElementById('questionPlaceholder');
const faqBookButton = document.getElementById('faqBookButton');
var nameFormModal = document.getElementById('formNameModal');
var phoneFormModal = document.getElementById('formPhoneNumberModal');
var questionFormModal = document.getElementById('letterFromModal');
var nameSpanModal = document.getElementById('namePlaceholderModal');
var phoneSpanModal = document.getElementById('phoneNumberPlaceholderModal');
var questionSpanModal = document.getElementById('questionPlaceholderModal');

nameForm.addEventListener("focus", (event) => {
        nameSpan.style.display = "none";
  });
  
nameForm.addEventListener("blur", (event) => {
    let text = nameForm.value;
    if (text) {
        nameSpan.style.display = "none";
    } else {
        nameSpan.style.display = "block";
    }
  });

phoneForm.addEventListener("focus", (event) => {
    phoneSpan.style.display = "none";
});
    
phoneForm.addEventListener("blur", (event) => {
      let text = phoneForm.value;
      if (text) {
        phoneSpan.style.display = "none";
      } else {
        phoneSpan.style.display = "block";
      }
});

phoneForm.addEventListener("keypress", (e) => {
    var regExp = /[a-zA-Z]/g;
    var string = e.key;
            
    if(regExp.test(string)){
        e.preventDefault();
    } 
    
});

questionForm.addEventListener("focus", (event) => {
    questionSpan.style.display = "none";
});

questionForm.addEventListener("blur", (event) => {
let text = questionForm.value;
if (text) {
    questionSpan.style.display = "none";
} else {
    questionSpan.style.display = "block";
}
});




nameFormModal.addEventListener("focus", (event) => {
    nameSpanModal.style.display = "none";
});

nameFormModal.addEventListener("blur", (event) => {
let text = nameFormModal.value;
if (text) {
    nameSpanModal.style.display = "none";
} else {
    nameSpanModal.style.display = "block";
}
});

phoneFormModal.addEventListener("focus", (event) => {
phoneSpanModal.style.display = "none";
});

phoneFormModal.addEventListener("blur", (event) => {
  let text = phoneFormModal.value;
  if (text) {
    phoneSpanModal.style.display = "none";
  } else {
    phoneSpanModal.style.display = "block";
  }
});

phoneFormModal.addEventListener("keypress", (e) => {
var regExp = /[a-zA-Z]/g;
var string = e.key;
        
if(regExp.test(string)){
    e.preventDefault();
} 

});

questionFormModal.addEventListener("focus", (event) => {
questionSpanModal.style.display = "none";
});

questionFormModal.addEventListener("blur", (event) => {
let text = questionFormModal.value;
if (text) {
questionSpanModal.style.display = "none";
} else {
questionSpanModal.style.display = "block";
}
});