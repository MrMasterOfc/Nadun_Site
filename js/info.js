// Toggle visibility of sections
const toggleButtons = document.querySelectorAll('.toggle-button');
const projectOptions = document.querySelectorAll('.project-option');
const projectDetails = document.querySelectorAll('[id^="projectV"]'); // Select all project detail divs
const projectsButton = document.getElementById('projectsButton');
const projectsOptions = document.getElementById('projectsOptions');

// Toggle visibility of a section when the toggle button is clicked
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);
    targetElement.classList.toggle('hidden');
  });
});

// Handle project option visibility
projectsButton.addEventListener('click', () => {
  // Toggle the visibility of the project options (v1, v2, v3 buttons)
  projectsOptions.classList.toggle('hidden');

  // Hide all project details
  projectDetails.forEach(detail => {
    detail.classList.add('hidden');
  });
});

// Hide other project details and show the clicked project detail
projectOptions.forEach(option => {
  option.addEventListener('click', () => {
    const targetId = option.getAttribute('data-target');

    // Hide all project details
    projectDetails.forEach(detail => detail.classList.add('hidden'));

    // Show the selected project details
    const selectedProject = document.getElementById(targetId);
    selectedProject.classList.toggle('hidden');
  });
});

// WhatsApp Button for Contact Us
const whatsappButton = document.getElementById('whatsappButton');
whatsappButton.addEventListener('click', () => {
  window.location.href = "https://wa.me/94720797915";
});
