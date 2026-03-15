import { useEffect } from "react";
import { scrollTop } from "../utilits";

const ProgressBar = () => {
  useEffect(() => {
    window.addEventListener("scroll", scrollTop);
    return () => window.removeEventListener("scroll", scrollTop);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="progressbar" onClick={handleClick}>
      <svg
        className="progress_arrow"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
      <svg className="progress_ring" viewBox="0 0 36 36">
        <circle
          className="progress_ring_bg"
          cx="18"
          cy="18"
          r="16"
          fill="none"
          strokeWidth="2"
        />
        <circle
          className="progress_ring_fill"
          cx="18"
          cy="18"
          r="16"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
export default ProgressBar;
