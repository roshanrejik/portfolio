import useScrollReveal from "../useScrollReveal";

const Feedback = ({ dark }) => {
  const revealRef = useScrollReveal();
  return (
    <div className="orido_tm_section" ref={revealRef}>
      <div className="orido_tm_testimonials">
        <div className="container">
          <div className="orido_tm_main_title" data-reveal="up">
            <h3>
              <span>
                Award Winning and 
                <br />
                Achievements
              </span>
            </h3>
          </div>
          <div className="testimonials_in" data-reveal="up" data-reveal-delay="1">
            <img src={`img/hero/welcome.jpg`} alt="" />
            <div className="info">
              <div className="text">
                <p>
                  “Received Lime Light Award from Bibin John CEO of Apps Team Technologies. This journey has been a collaborative masterpiece of code,
                  innovation and team work. From late-night debugging  session to aha moments of breakthrough, every line of code tells a story of resilience and creativity.”
                </p>
              </div>
              <div className="details">
                <h3 className="name">
                  <span>LIME LIGHT AWARD</span>
                </h3>
                <span className="job">Apps Team Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
