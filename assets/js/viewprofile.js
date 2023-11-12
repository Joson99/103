/* ------ Variables ------ */

// Hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Book Appointment Button inside the header
const bookAppointmentButton = document.querySelector('.book-appointment');

/* ------ End Variables ------ */

// Function to disable scrolling
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// Function to enable scrolling
function enableScroll() {
    document.body.style.overflow = 'auto';
}

// Function to hide the hamburger menu
function hideHamburgerMenu() {
    navLinks.classList.remove('active');
    enableScroll(); // Enable scrolling
}

// Function to toggle hamburger menu
function toggleHamburgerMenu() {
    navLinks.classList.toggle('active');
}

// Open or close navLinks when hamburger is clicked
hamburger.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click propagation
    toggleHamburgerMenu();
});

// Close the hamburger menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (navLinks.classList.contains('active') && event.target !== hamburger && !navLinks.contains(event.target)) {
        hideHamburgerMenu();
    }
});

// Scroll to the top when the button is clicked with smooth scrolling
const scrollButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});











document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.profile-nav-item');
    const formRows = document.querySelectorAll('.form-row');

    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            item.classList.add('active');

            formRows.forEach(formRow => formRow.style.display = 'none');
            formRows[index].style.display = 'flex';
        });
    });
});





function home() {
    window.location.href = 'clientafterlog.html#home';
}

function services() {
    window.location.href = 'clientafterlog.html#services';
}

function doctors() {
    window.location.href = 'clientafterlog.html#doctors';
}

function aboutus() {
    window.location.href = 'clientafterlog.html#about-us';
}

function contact() {
    window.location.href = 'clientafterlog.html#contact';
}

function backtoHome() {
    window.location.href = 'clientafterlog.html#home';
}
















// Update the username indicator based on the currently logged in user
function updateUsernameIndicator() {
    var usernameSpan = document.getElementById("username-span");
    var loggedInUsername = sessionStorage.getItem('username');
  
    if (loggedInUsername) {
        // Update the content of the span element
        if (loggedInUsername.length > 15) {
            // Display only the first 15 characters followed by "..."
            usernameSpan.textContent = loggedInUsername.substring(0, 15) + "...";
        } else {
            usernameSpan.textContent = loggedInUsername;
        }

        // Make the username indicator visible (if it's hidden)
        document.getElementById("username-indicator").style.display = "block";
    } else {
        // No user is logged in, hide the username indicator
        document.getElementById("username-indicator").style.display = "none";
    }
}

// Call this function to update the username indicator whenever needed
updateUsernameIndicator();
