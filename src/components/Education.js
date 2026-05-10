export default function Education() {
  return (
    <section id="education">
      <div className="section-title scroll-page">
        Education
      </div>

      <table className="edu-table">
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institute</th>
            <th>Year</th>
            <th>CPI / %</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>B.E. Robotics &amp; Automation (GTU)</td>
            <td>LDCE, Ahmedabad</td>
            <td>2023–26</td>
            <td>7.09</td>
          </tr>

          <tr>
            <td>Diploma in CS (GTU)</td>
            <td>RCTI Sola</td>
            <td>2020–23</td>
            <td>8.17</td>
          </tr>

          <tr>
            <td>SSC (GSEB)</td>
            <td>GNC Ghodasar</td>
            <td>2020</td>
            <td>67.5%</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}