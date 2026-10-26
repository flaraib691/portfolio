
function Projects() {
    const projects = [
        {
            title: "Blood Donation System",
            desc: `A full-stack MERN application that connects blood donors with recipients.
             It allows users to register as donors , search donors by bloog-group and locations.`
        },
        {
            title: "E-Commerce Website",
            desc: "Full Stack Shopping Website",
            link: "https://eco-vite.netlify.app"
        },
        {
            title: "Portfolio Website",
            desc: "Modern React Portfolio",
            link: "https://httpsportfolionetlify.netlify.app/"
        }
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="project-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>

                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
