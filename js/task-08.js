const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formDate = {
    mail,
    password,
    };
    
    if (mail === '' || password === '') {
        alert('All fields of the form must be filled out');
        return false;
    }; 

    console.log(formDate);

    form.reset();
};
