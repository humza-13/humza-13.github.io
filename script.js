function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function loadProjectDetails(projectIdentifier) {
  // Redirect to the details page with the project identifier in the URL
  window.location.href = `details.html?project=${projectIdentifier}`;
}

// Attach a click event handler to each project container
const projectContainers = document.querySelectorAll('.project-container');
projectContainers.forEach(container => {
  container.addEventListener('click', (event) => {
      const projectIdentifier = container.getAttribute('data-project');
      loadProjectDetails(projectIdentifier);
  });
});
