import useScrollReveal from "../useScrollReveal";

const Home = () => {
  const revealRef = useScrollReveal();
  return (
    <div className="orido_tm_hero orido_tm_section" id="home" ref={revealRef}>
      <div className="container">
        <div className="hero_inner">
          <div className="hero_content">
            <span className="hero_tagline" data-reveal="down">Full-Stack Software Engineer & Mobile Expert</span>
            <h1 className="hero_title" data-reveal="up" data-reveal-delay="1">
              Hi, I&apos;m <span className="name_highlight">Roshan Reji K</span>
              <img className="svg wave_icon" src="img/svg/hi.svg" alt="" />
            </h1>
            <p className="hero_description" data-reveal="up" data-reveal-delay="2">
              A Full-Stack Software Engineer with 4+ years of experience delivering
              high-quality web and cross-platform mobile applications using React,
              React Native, and Node.js.
            </p>
            <div className="hero_buttons" data-reveal="up" data-reveal-delay="3">
              <div className="orido_tm_boxed_button">
                <a className="anchor" href="#contact">
                  Say Hello{" "}
                  <img className="svg" src="img/svg/send.svg" alt="" />
                </a>
              </div>
              <div className="orido_tm_simple_button">
                <a className="line_effect anchor" href="#portfolio">
                  My Works{" "}
                  <img className="svg" src="img/svg/top-arrow.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="orido_tm_follow hero_social" data-reveal="up" data-reveal-delay="4">
              <span>Follow me:</span>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/roshanrejik" target="_blank" rel="noopener noreferrer">
                    <img className="svg" src="img/svg/social/linkedin.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/roshanrejik" target="_blank" rel="noopener noreferrer">
                    <img className="svg" src="img/svg/social/github.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
