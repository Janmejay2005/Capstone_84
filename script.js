// // Responsive Navbar Toggle
// const menuToggle = document.getElementById('menu-toggle');
// const navbarLinks = document.getElementById('navbar-links');


// menuToggle.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active');
// });

const menuToggle = document.getElementById('menu-toggle');
const navbarLinks = document.getElementById('navbar-links');

if (menuToggle && navbarLinks) {
  menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });
}

const userIcon = document.getElementById('user-icon');
if (userIcon) {
  userIcon.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'login.html';
  });
}

// Navbar link click redirect (to be set by you later)
// document.querySelectorAll('.nav-link').forEach(link => {
//   link.addEventListener('click', (e) => {
//     e.preventDefault();
//     // Replace '#' with your actual page URLs
//     const text = link.textContent.trim().toLowerCase().replace(/\s+/g, '-');
//     window.location.href = `${finalhtml}.html`; // e.g., home.html, courses.html
//   });
// });




// User icon hover handled by CSS, click redirect
document.getElementById('user-icon').addEventListener('click', (e) => {
  e.preventDefault();
  // Replace with your login page URL
  window.location.href = 'login.html';
});

// Main hero buttons click redirect (to be set by you later)
// document.querySelectorAll('.main-btn').forEach((btn, idx) => {
//   btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     // Set your URLs below
//     const urls = [
//       'notes.html',
//       'previous-year-papers.html',
//       'explore-places.html'
//     ];
//     window.location.href = urls[idx];
//   });
// });

// {/* <script>
//   document.getElementById("contactForm").addEventListener("submit", function(e) {
//     e.preventDefault();

//     const name = this.name.value.trim();
//     const email = this.email.value.trim();
//     const course = this.course.value.trim();
//     const subject = this.subject.value.trim();
//     const message = this.message.value.trim();

//     if (!name || !email || !course || !subject || !message) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     // Simulated success message
//     alert("Message submitted successfully!");

//     // Optionally reset form
//     this.reset();
//   });
// </script> */}


const home = document.getElementById('home');
if (home) {
  home.addEventListener('click', (e) => {
    // e.preventDefault();
    window.location.href = 'finalhtml.html';
  });
}

