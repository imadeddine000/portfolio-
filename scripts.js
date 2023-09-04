const projects = [
    {
        title: "Pyyplshop Android App ",
        description: "ReactNative(expo),react-native-paper,tailwindcss,firebase",
        link: "https://play.google.com/store/apps/details?id=com.imadeddinekebour.pyyplshop",
    },
    {
        title: "Project 2",
        description: "Description of Project 2",
        link: "https://example.com/project2",
    },
    // Add more project objects as needed
];
function createProjectElements(projects) {
    const projectsSection = document.getElementById('projects');

    projects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.textContent = "View Project";

        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        projectDiv.appendChild(projectLink);

        projectsSection.appendChild(projectDiv);
    });
}

// Call the function to populate the Projects section with the projects
createProjectElements(projects);
