function myFunction() {
  var element = document.getElementById("para");

  if (element.style.display === "none") {
    element.style.display = "block"; // Show the element
  } else {
    element.style.display = "none"; // Hide the element
  }

// updating the text of button when user clicks on it
  var button = document.querySelector('button');
  if (element.style.display === "none") {
    button.innerText = "Show";
  } else {
    button.innerText = "Hide";
  }
}