// Получить элементы
let modal = document.getElementById('modal');
let openModalBtn = document.getElementById('menuButton');
let closeBtn = document.getElementById('closeMenuButton');

let modalForma = document.getElementById('modalForm');
let closeBtnForma = document.getElementById('closeModalFormaButton');

var modalHomeButton = document.getElementById('modalHomeButton');
var modalAboutUsButton = document.getElementById('modalAboutUsButton');
var modalOurSrvicesButton = document.getElementById('modalOurSrvicesButton');
var modalGalleryButton = document.getElementById('modalGalleryButton');
var modalReviewsButton = document.getElementById('modalReviewsButton');
var modalFAQButton = document.getElementById('modalFAQButton');
var modalContactsButton = document.getElementById('modalContactsButton');

let modalSection1 = document.getElementById('section1');
let modalSection2 = document.getElementById('section2');
let modalSection3 = document.getElementById('section3');
let modalSection4 = document.getElementById('section4');
let modalSection5 = document.getElementById('section5');
let modalSection6 = document.getElementById('section6');
let modalSection7 = document.getElementById('section7');

let bookButton = document.getElementById('bookButton');
let ourServicesBookButton = document.getElementById('ourServicesBookButton');
let ourGalleryBookButton = document.getElementById('ourGalleryBookButton');
let modalFormButton = document.getElementById('modalFormButton');

function scrollTo1() {
    closeModal();
    section1.scrollIntoView({ behavior: 'smooth' });
}

function scrollTo2() {
    closeModal();
    section2.scrollIntoView({ behavior: 'smooth' });
}

function scrollTo3() {
    closeModal();
    section3.scrollIntoView({ behavior: 'smooth' });
}

function scrollTo4() {
    closeModal();
    section4.scrollIntoView({ behavior: 'smooth' });
}

function scrollTo5() {
    closeModal();
    section5.scrollIntoView({ behavior: 'smooth' });
}

function scrollTo6() {
    closeModal();
    section6.scrollIntoView({ behavior: 'smooth' });
}

function scrollTo7() {
    closeModal();
    section7.scrollIntoView({ behavior: 'smooth' });
}

function showModal() {
    modal.classList.add('show');
    setTimeout(function() {
        modal.style.display = 'block';
        document.body.classList.add('no-scroll');
    }, 10); // Allow time for the opacity transition
}

function closeModal() {
    modal.classList.remove('show');
    setTimeout(function() {
        modal.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }, 500); // Wait for the transition to complete
}

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('show');
        setTimeout(function() {
            modal.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }, 500); // Wait for the transition to complete
    }
});

function showFormModal() {
    modalForma.classList.add('show');
    setTimeout(function() {
        modalForma.style.display = 'block';
        document.body.classList.add('no-scroll');
    }, 10); // Allow time for the opacity transition
}

function closeFormModal() {
    modalForma.classList.remove('show');
    setTimeout(function() {
        modalForma.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }, 500); // Wait for the transition to complete
}

window.addEventListener('click', function(event) {
    if (event.target === modalForma) {
        modalForma.classList.remove('show');
        setTimeout(function() {
            modalForma.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }, 500); // Wait for the transition to complete
    }
});

function sendLetter() {
    if (nameForm.value.trim() == "") {
        alert('Please enter your name.'); // Показываем сообщение об ошибке в виде диалогового окна
        return;
    } 
    if (phoneForm.value.trim() == "") {
        alert('Please enter your phone.'); // Показываем сообщение об ошибке в виде диалогового окна
        return;
    } 

    if (questionForm.value.trim() == "") {
        alert('Please enter your question.'); // Показываем сообщение об ошибке в виде диалогового окна
        return;
    }
    let subject = nameForm.value;
    let body =  "Phone number: " + phoneForm.value + "\n" + " " + questionForm.value;
    alert('Your letter has been sent successfully, we will contact you shortly.');
    fetch('/run-script', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ subject, body })
    })
            .then(response => response.json())
            .then(data => {
                letterSent();
                console.log(data.message);
            })
            .catch(error => {
                alert('Something wrong :(');
                console.error('Error:', error);
            });
}

function letterSent() {
    nameForm.value = "";
    phoneForm.value = "";
    questionForm.value = "";
    nameSpan.style.display = "block";
    phoneSpan.style.display = "block";
    questionSpan.style.display = "block"; // Показываем сообщение об ошибке в виде диалогового окна
}


function sendLetterFromModal() {
    if (nameFormModal.value.trim() == "") {
        alert('Please enter your name.'); // Показываем сообщение об ошибке в виде диалогового окна
        return;
    } 
    if (phoneFormModal.value.trim() == "") {
        alert('Please enter your phone.'); // Показываем сообщение об ошибке в виде диалогового окна
        return;
    } 

    if (questionFormModal.value.trim() == "") {
        alert('Please enter your question.'); // Показываем сообщение об ошибке в виде диалогового окна
        return;
    }
    let subject = nameFormModal.value;
    let body =  "Phone number: " + phoneFormModal.value + "\n" + " " + questionFormModal.value;
    closeFormModal();
    alert('Your letter has been sent successfully, we will contact you shortly.');
    fetch('/BoldCars/run-script', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ subject, body })
    })
            .then(response => response.json())
            .then(data => {
                //letterSentModal();
                console.log(data.message);
            })
            .catch(error => {
                alert('Something wrong :(');
                console.error('Error:', error);
            });
}

function letterSentModal() {
    nameFormModal.value = "";
    phoneFormModal.value = "";
    questionFormModal.value = "";
    nameSpanModal.style.display = "block";
    phoneSpanModal.style.display = "block";
    questionSpanModal.style.display = "block"; // Показываем сообщение об ошибке в виде диалогового окна
}

openModalBtn.onclick = showModal;
closeBtn.onclick = closeModal;
closeBtnForma.onclick = closeFormModal;
modalHomeButton.onclick = scrollTo1; 
modalAboutUsButton.onclick = scrollTo2; 
modalOurSrvicesButton.onclick = scrollTo3; 
modalGalleryButton.onclick = scrollTo4; 
modalReviewsButton.onclick = scrollTo5; 
modalFAQButton.onclick = scrollTo6; 
modalContactsButton.onclick = scrollTo7; 
bookButton.onclick = showFormModal; 
ourServicesBookButton.onclick = showFormModal; 
ourGalleryBookButton.onclick = showFormModal; 
faqBookButton.onclick = sendLetter;
modalFormButton.onclick = sendLetterFromModal;