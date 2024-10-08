// document.addEventListener('click', function(event) {
//     var navMenu = document.getElementById('navigation-menu');
//     var authButtons = document.getElementById('auth-buttons');
//     var hamburger = document.querySelector('.hamburger');

//     if (!navMenu.contains(event.target) && !authButtons.contains(event.target) && !hamburger.contains(event.target)) {
//         navMenu.classList.remove('visible');
//         authButtons.classList.remove('visible');
//     }
// });
function toggleMenu() {
    var navMenu = document.querySelector('nav'); // Selects the nav element
    var authButtons = document.getElementById('auth-buttons');
    navMenu.classList.toggle('visible');
    authButtons.classList.toggle('visible');
}


document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

 
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');


    firstNameError.textContent = '';
    lastNameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    passwordError.textContent = '';


    let isValid = true;

 
    if (!firstName) {
        firstNameError.textContent = 'First name is required';
        isValid = false;
    }
    if (!lastName) {
        lastNameError.textContent = 'Last name is required';
        isValid = false;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }

   
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
        phoneError.textContent = 'Please enter a valid phone number';
        isValid = false;
    }

 
    if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
        isValid = false;
    }

  
    if (isValid) {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            phone_number: phone,
            email: email,
            password: password
        };

        console.log(formData);
        alert('Form submitted successfully');
       
    }
});
