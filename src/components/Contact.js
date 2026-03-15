import useScrollReveal from "../useScrollReveal";

const Contact = () => {
  const revealRef = useScrollReveal();
  return (
    <div className="orido_tm_section" id="contact" ref={revealRef}>
      <div className="orido_tm_contact">
        <div className="container">
          <div className="infobox" data-reveal="up">
            <div className="video_button">
              {/* <a
                className="popup-youtube"
                href="https://www.youtube.com/watch?v=7e90gBu4pas"
              > */}
              <img
                className="anim_circle"
                src="img/roshan_profile.jpg"
                alt="Roshan Reji K"
              />
              {/* <img className="svg" src="img/svg/play.svg" alt="" /> */}
              {/* </a> */}
            </div>
            <div className="text">
              <h3>{`Let's`} work together</h3>
              <p>
                {`Let's`} embark on this journey together, where your objectives become our mission, and our collaborative efforts pave the way for your business triumph.
              </p>
            </div>
            <div className="orido_tm_boxed_button">
              <a href="#">
                Say Hello <img className="svg" src="img/svg/send.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="connect" data-reveal="up" data-reveal-delay="1">
            <div className="left">
              <ul>
                <li>
                  <span className="name">Call:</span>
                  <p>
                    <a className="line_effect" href="tel:971551381851" target="_blank" rel="noopener noreferrer">
                      +91-9019431231
                    </a>
                  </p>
                </li>
                <li>
                  <span className="name">Email:</span>
                  <p>
                    <a className="line_effect" href="mailto:samsudeen.mohammedkunhi@gmail.com" target="_blank" rel="noopener noreferrer">
                      roshanrejik@gmail.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="orido_tm_follow">
                <span>Follow me:</span>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/roshanrejik" target="_blank" rel="noopener noreferrer">
                      <img className="svg" src="img/svg/social/linkedin.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/roshanrejik" target="_blank" rel="noopener noreferrer">
                      <img
                        className="svg"
                        src="img/svg/social/github.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img
                        className="svg"
                        src="img/svg/social/instagarm.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="element">
          <img className="svg" src="img/svg/elements.svg" alt="" />
        </span>
        <span className="element2">
          <img className="svg" src="img/svg/element-2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Contact;
