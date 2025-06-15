const userInput = document.getElementById('userInput');
  const charCount = document.getElementById('charCount');

  userInput.addEventListener('input', function() {
    // Get the current number of characters in the textarea
    const currentLength = userInput.value.length;

    // Update the text content of the character count paragraph
    charCount.textContent = 'Characters: ' + currentLength;
  });
  // This ensures the count is correct even before the user starts typing.
  charCount.textContent = 'Characters: ' + userInput.value.length;