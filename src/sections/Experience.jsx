import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/Experience.css'; // Import custom CSS for animations and styling

const Experience = () => {
  // Use useInView for the entire section and individual items
  const [sectionRef, sectionInView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section id="experience" className="py-5 experience-section" ref={sectionRef}>
      <div className="container">
        <h2 className="text-center mb-5">Experience</h2>
        <div className="timeline">
          {/* Timeline Item 1 */}
          <div className="timeline-item">
            {/* Left Content */}
            <div
              className={`timeline-content left ${sectionInView && inView1 ? 'animate' : ''}`}
              ref={ref1}
            >
              <div className="timeline-card">
                <h3>MERN Stack Developer</h3>
                <p>
                  Worked on building scalable web applications using React, Node.js, Express, and MongoDB.
                  Collaborated with cross-functional teams to deliver high-quality products.
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div
              className={`timeline-content right ${sectionInView && inView2 ? 'animate' : ''}`}
              ref={ref2}
            >
              <div className="timeline-details">
                <h4>KryptoHive</h4>
                <p>Position: MERN Stack Developer</p>
                <p>Duration: June 2022 - June 2023</p>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="timeline-item">
            {/* Left Content */}
            <div
              className={`timeline-content left ${sectionInView && inView3 ? 'animate' : ''}`}
              ref={ref3}
            >
              <div className="timeline-details">
                <h4>Silver Concepts LLC</h4>
                <p>Position: Frontend Developer</p>
                <p>Duration: June 2023 - August 2024</p>
              </div>
            </div>

            {/* Right Content */}
            <div
              className={`timeline-content right ${sectionInView && inView4 ? 'animate' : ''}`}
              ref={ref4}
            >
              <div className="timeline-card">
                <h3>Frontend Developer</h3>
                <p>
                  Specialized in building responsive and interactive user interfaces using React and modern frontend tools.
                  Delivered projects on time with a focus on user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;