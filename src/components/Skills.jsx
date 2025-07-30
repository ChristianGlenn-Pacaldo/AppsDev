
const Skills = () => {
  return (
    <div className="skills-card">
      <h2 className="skills-title">Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-labels">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="skill-bar-bg">
            <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
