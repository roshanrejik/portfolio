import useScrollReveal from "../useScrollReveal";

const About = () => {
  const revealRef = useScrollReveal();
  return (
    <div className="orido_tm_section" id="about" ref={revealRef}>
      <div className="orido_tm_about">
        <div className="container">
          <div className="about_header" data-reveal="up">
            <div className="orido_tm_main_title">
              <h3>
                <span>About Me</span>
              </h3>
            </div>
          </div>
          <div className="about_in">
            <div className="about_text_col">
              <p className="about_lead" data-reveal="left" data-reveal-delay="1">
                Senior Mobile Software Engineer with <strong>4+ years</strong> of experience delivering high-quality web and cross-platform mobile applications.
              </p>
              <p className="about_body" data-reveal="left" data-reveal-delay="2">
                Proven expertise in end-to-end development, production deployments to App Store & Play Store, performance optimization, and scalable API design. Skilled in building user-centric products with measurable business impact.
              </p>s
              <p className="about_body" data-reveal="left" data-reveal-delay="3">
                Expertise in React.js, Next.js, React Native, Node.js, Express, and MongoDB. I specialize in building scalable mobile architectures and real-time applications supporting thousands of concurrent users.
              </p>
              <div className="about_cta" data-reveal="up" data-reveal-delay="4">
                <div className="orido_tm_boxed_button">
                  <a href="img/cv/RNCV.pdf" download>
                    Download Resume{" "}
                    <img className="svg" src="img/svg/paper.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="about_stats_col">
              <div className="about_stat_card" data-reveal="zoom" data-reveal-delay="1">
                <div className="stat_icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                </div>
                <h4 className="stat_number">4+</h4>
                <span className="stat_label">Years Experience</span>
              </div>
              <div className="about_stat_card" data-reveal="zoom" data-reveal-delay="2">
                <div className="stat_icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                </div>
                <h4 className="stat_number">15+</h4>
                <span className="stat_label">Projects Delivered</span>
              </div>
              <div className="about_stat_card" data-reveal="zoom" data-reveal-delay="3">
                <div className="stat_icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <h4 className="stat_number">3</h4>
                <span className="stat_label">Companies</span>
              </div>
              <div className="about_stat_card" data-reveal="zoom" data-reveal-delay="4">
                <div className="stat_icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                </div>
                <h4 className="stat_number">8+</h4>
                <span className="stat_label">Frameworks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
