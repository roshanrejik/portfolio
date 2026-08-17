import { Fragment, useEffect, useState } from "react";
import { filter_hashtag } from "../utilits";
import Counter from "./Counter";
import useScrollReveal from "../useScrollReveal";

const counts = [
  {
    name: "Years Experience",
    value: 4,
    suffix: "+",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    ),
  },
  {
    name: "Mobile Apps & Deployments",
    value: 15,
    suffix: "+",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
    ),
  },
  {
    name: "Tech Companies",
    value: 3,
    suffix: "",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
    ),
  },
  {
    name: "Startup Time Improvement",
    value: 600,
    suffix: "ms",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
    ),
  },
];

const skills = [
  { name: "React Native", icon: "img/svg/reactnative.svg" },
  { name: "Expo", icon: "img/svg/reactnative.svg" },
  { name: "TypeScript", icon: "img/svg/typescript.png" },
  { name: "JavaScript (ES6+)", icon: "img/svg/reactjs.svg" },
  { name: "React.js", icon: "img/svg/reactjs.svg" },
  { name: "Redux Toolkit", icon: "img/svg/nextjs.svg" },
  { name: "GraphQL", icon: "img/svg/nextjs.svg" },
  { name: "Tamagui & Reanimated", icon: "img/svg/reactnative.svg" },
  { name: "Jest & RTL", icon: "img/svg/reactjs.svg" },
  { name: "Datadog & Mixpanel", icon: "img/svg/aws.png" },
  { name: "Fastlane & CircleCI", icon: "img/svg/docker.png" },
  { name: "REST APIs & Auth0", icon: "img/svg/express.svg" },
];

const experiences = [
  {
    company: "Cloudium Software - Kochi, India",
    designation: "Senior Software Engineer",
    time: "04/2026 – Current",
    highlights: [
      "Refactored and optimized the React Native codebase to improve performance, maintainability, and scalability.",
      "Reduced app startup time (by 600ms) and JavaScript bundle size (by 30%) through performance tuning.",
      "Built reusable components and enhanced application stability across iOS and Android.",
      "Utilized Datadog for application performance monitoring and crash analysis."
    ]
  },
  {
    company: "Apps Team Technologies Pvt. Ltd. - Kochi, Kerala",
    designation: "Senior Software Developer",
    time: "11/2023 – 03/2026",
    highlights: [
      "Delivered production-ready mobile applications using React Native and TypeScript within defined scope and timeline.",
      "Followed Test-Driven Development (TDD) practices to ensure reliable, maintainable codebase.",
      "Integrated mobile apps with secure backend APIs using token-based authentication (JWT-based systems).",
      "Enhanced application performance and stability by 30% through optimized component rendering and state management.",
      "Supported DevSecOps initiatives by contributing to CI/CD pipelines and secure release workflows."
    ]
  },
  {
    company: "CoStrategix - Bangalore, Karnataka",
    designation: "Software Developer",
    time: "05/2022 – 11/2023",
    highlights: [
      "Developed cross-platform mobile features using React Native following clean architecture practices.",
      "Integrated REST APIs and implemented secure authentication flows.",
      "Contributed to iterative software releases in an Agile development environment using React Native and TypeScript.",
      "Collaborated with QA and DevOps teams to improve release quality and operational efficiency."
    ]
  }
];

const educations = [
  {
    institution: "Kuvempu University - Shimoga",
    certificate: "Bachelor's Degree (GPA: 7.86)",
    time: "11/2021",
  }
];

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContentTab = (value) => (activeTab == value ? "current" : "");
  const expertRef = useScrollReveal();
  const counterRef = useScrollReveal();

  useEffect(() => {
    filter_hashtag();
  }, [activeTab]);

  return (
    <Fragment>
      <div className="orido_tm_section" ref={expertRef}>
        <div className="orido_tm_informations">
          <div className="container">
            <div className="informations_inner">
              <div className="left">
                <div className="orido_tm_main_title" data-reveal="left">
                  <h3>
                    <span>
                      My expert
                      <br />
                      areas
                    </span>
                  </h3>
                </div>
                <div className="text" data-reveal="left" data-reveal-delay="1">
                  <p>
                    I specialize in developing high-performance, cross-platform mobile applications using React Native, Expo, and TypeScript, ensuring native-level fluid UI and optimal performance across iOS and Android.
                  </p>
                  <p>
                    Strong expertise in Test-Driven Development (TDD), token-based authentication (JWT), state management (Redux Toolkit), and integrating complex REST and GraphQL APIs.
                  </p>
                  <p>
                    Experienced in performance tuning, reducing JavaScript bundle sizes by 30% and app startup times by 600ms using Datadog monitoring, Tamagui, and Reanimated.
                  </p>
                  <p>
                    Proficient in setting up CI/CD workflows, Fastlane automation, and managing seamless production deployments to both the Apple App Store and Google Play Store.
                  </p>
                </div>
                {/* <div className="orido_tm_boxed_button">
                  <a href="#">
                    My Resume{" "}
                    <img className="svg" src="img/svg/paper.svg" alt="" />
                  </a>
                </div> */}
              </div>
              <div className="right" data-reveal="right" data-reveal-delay="2">
                <div className="filter">
                  <ul>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(1)}`}
                        onClick={() => setActiveTab(1)}
                        data-tab="tab_1"
                      >
                        <span>Skills</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(2)}`}
                        onClick={() => setActiveTab(2)}
                        data-tab="tab_2"
                      >
                        <span>Experience</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(3)}`}
                        onClick={() => setActiveTab(3)}
                        data-tab="tab_3"
                      >
                        <span>Education</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                  <span className="ccc" />
                </div>
                <div className="content">
                  <div id="tab_1" className={`wrapper ${activeContentTab(1)}`}>
                    <div className="skillbox">
                      <ul>
                        {skills.map((skill, i) => (
                          <li key={i} className="skill_animate" style={{ animationDelay: `${i * 0.06}s` }}>
                            <div className="list_inner">
                              <span className="icon">
                                <span className="in">
                                  <img
                                    // className="svg"
                                    src={skill.icon}
                                    alt=""
                                  />
                                </span>
                              </span>
                              <p className="name">
                                {skill.name}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_2" className={`wrapper ${activeContentTab(2)}`}>
                    <div className="timelinebox">
                      <ul>
                        {experiences.map((experience, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{experience.time}</span>
                                <span className="company">
                                  {experience.company}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{experience.designation}</span>
                                </h3>
                                {experience.highlights && (
                                  <ul className="job_highlights">
                                    {experience.highlights.map((item, idx) => (
                                      <li key={idx}>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_3" className={`wrapper ${activeContentTab(3)}`}>
                    <div className="timelinebox">
                      <ul>
                        {educations.map((education, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{education.time}</span>
                                <span className="company">
                                  {education.institution}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{education.certificate}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /INFORMATIONS */}
      {/* COUNTER */}
      <div className="orido_tm_section" ref={counterRef}>
        <div className="orido_tm_counter">
          <div className="container">
            <div className="counter_list">
              <ul>
                {counts.map((count, i) => (
                  <li key={i} data-reveal="up" data-reveal-delay={`${i + 1}`}>
                    <div className="list_inner">
                      <div className="counter_icon">{count.icon}</div>
                      <h3>
                        <Counter end={count.value} />
                        {count.suffix && <span className="counter_suffix">{count.suffix}</span>}
                      </h3>
                      <span className="title">{count.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ExpertAreas;
