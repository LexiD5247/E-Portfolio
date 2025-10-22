//template_4gsd1xf
//service_05ic6o7
//OILUGn6Bsuv4ITP-D

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
    .sendForm(
       'service_05ic6o7',
       'template_4gsd1xf',
       event.target,
       'OILUGn6Bsuv4ITP-D'
    ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service if temporarily unavaliable. Please email me directly at email@email.com"
        );
    })
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}