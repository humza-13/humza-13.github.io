// Function to retrieve the project identifier from the URL
function getProjectIdentifier() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('project');
  }
  
  // Function to load and display project details
  function loadProjectDetails() {
    const projectIdentifier = getProjectIdentifier();
  
    // Fetch project details using the identifier and update the page content
    fetch('projects-data.json')
      .then(response => response.json())
      .then(data => {
        const projectData = data[projectIdentifier];
        if (projectData) {
          // Update the project details on the page
          document.getElementById('project-name').textContent = projectData.name;
          document.getElementById('project-image').src = projectData.image;
        } else {
          console.error(`Project with identifier ${projectIdentifier} not found.`);
        }
      })
      .catch(error => {
        console.error('Error fetching project data: ', error);
      });
  }
  
  // Load project details when the details.html page loads
  loadProjectDetails();
  