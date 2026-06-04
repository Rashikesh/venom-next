export default function BackgroundRoom() {
  return (
    <div className="room">
      <div className="wall back-wall"></div>

      <div className="wall left-wall"></div>

      <div className="wall right-wall"></div>

      <div className="floor"></div>

      <div className="floating-card one">
        {/* <div class="main-preview">
        <img
          id="featured"
          src="../images/main_preview.png"
          alt="Featured Preview"
        ></img>
      </div> */}
      </div>

      <div className="floating-card two"></div>

      <div className="floating-card three"></div>

      <div className="ambient-light"></div>
    </div>
  );
}
