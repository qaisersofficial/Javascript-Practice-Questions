    const signupForm = document.getElementById('signupForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorParagraph = document.getElementById('error');

  signupForm.addEventListener('submit', function(event) {

    event.preventDefault();

    errorParagraph.textContent = '';
    let isValid = true;

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value;

    // Validate Name
    if (nameValue === '') {
      errorParagraph.textContent = 'Name cannot be empty.';
      isValid = false;
      nameInput.focus();
      return; 
    }

    // 3. Validate Email
    if (!emailValue.includes('@') || !emailValue.includes('.')) {
      errorParagraph.textContent = 'Please enter a valid email address.';
      isValid = false;
      emailInput.focus();
      return;
    }
    const atIndex = emailValue.indexOf('@');
    const dotIndex = emailValue.lastIndexOf('.');
    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex === emailValue.length - 1) {
        errorParagraph.textContent = 'Please enter a valid email address.';
        isValid = false;
        emailInput.focus();
        return;
    }


    // 4. Validate Password
    if (passwordValue.length < 6) {
      errorParagraph.textContent = 'Password must be at least 6 characters long.';
      isValid = false;
      passwordInput.focus();
      return;
    }

    // If all inputs are valid
    if (isValid) {
      errorParagraph.textContent = ''; 
      alert('Form submitted successfully!'); 
    }
  });