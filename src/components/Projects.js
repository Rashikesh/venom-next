export default function Projects() {
  return (
    <section id="projects">
      <div className="section-title scroll-page">
        Projects
      </div>

      {/* Project 1 */}

      <div className="entry">
        <div className="entry__header">
          <div className="entry__title">
            Quadra Drum Filling Gantry Robotic Machine
          </div>

          <div className="entry__meta">
            KB Associate · Internship (ongoing)
          </div>
        </div>

        <div className="entry__body">
          Spearheading software-logic integration for a
          vision-guided drum filling machine. Developed modular
          Siemens SCL code synchronizing servo motion with
          Festo pneumatic systems.
        </div>

        <div className="entry__tags">
          <span className="tag">Siemens PLC / SCL</span>
          <span className="tag">Servo Motion</span>
          <span className="tag">Mech-Mind Vision</span>
          <span className="tag">Point Cloud</span>
          <span className="tag">Pneumatics</span>
        </div>
      </div>

      {/* Project 2 */}

      <div className="entry">
        <div className="entry__header">
          <div className="entry__title">
            Hand Exoskeleton Model
          </div>

          <div className="entry__meta">
            College Project
          </div>
        </div>

        <div className="entry__body">
          3D-printed robotic hand exoskeleton replicating
          human finger kinematics via Arduino and servo
          motors.
        </div>

        <div className="entry__tags">
          <span className="tag">Arduino</span>
          <span className="tag">Computer Vision</span>
          <span className="tag">3D Printing</span>
          <span className="tag">Servo Control</span>
        </div>
      </div>
    </section>
  );
}