export default function Experience() {
  return (
    <section id="experience">
      <div className="section-title scroll-page">
        Experience &amp; Internships
      </div>

      {/* Experience 1 */}

      <div className="entry">
        <div className="entry__header">
          <div className="entry__title">
            Laptop Technician
          </div>

          <div className="entry__meta">
            Internship · Jul – Nov 2023
          </div>
        </div>

        <div className="entry__body">
          Diagnosed software issues, performed system
          debugging and data recovery.
        </div>
      </div>

      {/* Experience 2 */}

      <div className="entry">
        <div className="entry__header">
          <div className="entry__title">
            SolidWorks Design
          </div>

          <div className="entry__meta">
            IGTR · Internship · Jun – Jul 2024
          </div>
        </div>

        <div className="entry__body">
          Modelled mechanical components in SolidWorks,
          produced dimensioned 2D sketches, and generated
          technical drawings.
        </div>

        <div className="entry__tags">
          <span className="tag">SolidWorks</span>
          <span className="tag">3D Modelling</span>
          <span className="tag">Technical Drawings</span>
        </div>
      </div>
    </section>
  );
}