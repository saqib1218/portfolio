import React from 'react';
import { useInView } from 'react-intersection-observer';
import { techStack } from '../utils/constants';
import '../styles/TechStack.css'; // Import custom CSS for animations and styling

// Import SVG components
import Frontend4 from '../assets/Tech Icons/Fontend/polygon4.tsx';
import Frontend5 from '../assets/Tech Icons/Fontend/polygon5.tsx';
import Frontend6 from '../assets/Tech Icons/Fontend/polygon6.tsx';
import Frontend8 from '../assets/Tech Icons/Fontend/polygon8.tsx';
import Frontend9 from '../assets/Tech Icons/Fontend/polygon9.tsx';
import Database2 from '../assets/Tech Icons/Database/database2.tsx';
import Dev5 from '../assets/Tech Icons/Devops/dev5.tsx';
import Dev4 from '../assets/Tech Icons/Devops/dev4.tsx';
import Frontend1 from '../assets/Tech Icons/Fontend/polygon1.tsx';

const TechStack = () => {
  // Map tech names to their corresponding SVG components
  const getTechIcon = (techName) => {
    switch (techName) {
      case 'HTML':
        return <Frontend1 />;
      case 'Express.js':
        return <Frontend4 />;
      case 'React.js':
        return <Frontend5 />;
      case 'Node.js':
        return <Frontend6 />;
      case 'JavaScript':
        return <Frontend8 />;
      case 'Next.js':
        return <Frontend9 />;
      case 'MongoDB':
        return <Database2 />;
      case 'AWS':
        return <Dev5 />;
      case 'Docker':
        return <Dev4 />;
      default:
        return null;
    }
  };

  return (
    <section id="tech-stack" className="py-5 tech-stack-section">
      <div className="container">
        <h2 className="text-center mb-5">Tech Stack</h2>
        <div className="row">
          {techStack.map((tech, index) => {
            const { ref, inView } = useInView({
              triggerOnce: false, // Trigger every time the element comes into view
              threshold: 0.1, // Trigger when 10% of the element is visible
            });

            return (
              <div
                key={index}
                ref={ref}
                className="col-md-3 col-sm-6 text-center mb-4"
              >
                <div
                  className={`tech-card ${inView ? 'animate' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Render the corresponding SVG component */}
                  <div className="tech-icon">
                    {getTechIcon(tech.name)}
                  </div>
                  <h5 className="mt-3">{tech.name}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;