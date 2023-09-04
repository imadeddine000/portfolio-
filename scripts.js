const projects = [
    {
        title: "Pyyplshop Android App ",
        description: "ReactNative(expo),react-native-paper,tailwindcss,firebase",
        link: "https://play.google.com/store/apps/details?id=com.imadeddinekebour.pyyplshop",
    },
    
    
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


createProjectElements(projects);
