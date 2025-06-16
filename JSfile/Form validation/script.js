    const signupForm = document.getElementById('signupForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    // const errorParagraph = document.getElementById('error');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    // Validate Name
    function validateName() {
    const nameValue = nameInput.value.trim();
    if (nameValue === '') {
      nameError.textContent = 'Name cannot be empty.';
      return false;
    } else {
      nameError.textContent = ''; 
      return true;
    }
  }

    // 3. Validate Email
    function validateEmail() {
    const emailValue = emailInput.value.trim();
    const atIndex = emailValue.indexOf('@');
    const dotIndex = emailValue.lastIndexOf('.');

    if (!emailValue.includes('@') || atIndex < 1 || dotIndex < atIndex + 2 || dotIndex === emailValue.length - 1) {
      emailError.textContent = 'Please enter a valid email address.';
      return false;
    } else {
      emailError.textContent = '';
      return true;
    }
  }


    // 4. Validate Password
    function validatePassword() {
    const passwordValue = passwordInput.value;
    if (passwordValue.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters long.';
      return false;
    } else {
      passwordError.textContent = '';
      return true;
    }
  }

  signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Run all validation functions on submit
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // If all fields are valid, then submit
    if (isNameValid && isEmailValid && isPasswordValid) {
      alert('Form submitted successfully!');
    } else {
      // If any field is invalid
      if (!isNameValid) {
        nameInput.focus();
      } else if (!isEmailValid) {
        emailInput.focus();
      } else if (!isPasswordValid) {
        passwordInput.focus();
      }
    }
  });