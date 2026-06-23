function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React-Vite",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub"
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;