
function Projects() {
    const projects = [
        {
            title: "E-Commerce Website",
            desc: "Frontend Website",
            link: "https://eco-vite.netlify.app"
        },
        {
            title: "Recipie-finer website",
            desc: "A responsive Recipe Finder website built with React to discover delicious recipes.",
            link: "https://laraib-recipes-website.netlify.app/"
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
