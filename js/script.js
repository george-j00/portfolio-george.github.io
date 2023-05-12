const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

  function validateForm() {
  // Check if all fields are filled in.
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("e-mail").value;
  var message = document.getElementById("message").value;

  if (firstName == "") {
    alert("Please enter your first name.");
    return false;
  }

  if (lastName == "") {
    alert("Please enter your last name.");
    return false;
  }

  if (email == "") {
    alert("Please enter your email address.");
    return false;
  }

  // Check if email is valid.
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (message == "") {
    alert("Please enter a message.");
    return false;
  }

  // All fields are filled in and valid.
  return true;
}


// Get the form element
const form = document.querySelector('.form');

// Add an event listener to the form submit button
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Create a new FormData object
  const formData = new FormData(form);

  // Iterate over the form data and log each key-value pair
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  // Alternatively, you can convert the form data to an object
  const formDataObject = Object.fromEntries(formData.entries());
  console.log(formDataObject);
});