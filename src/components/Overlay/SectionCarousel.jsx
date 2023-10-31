import { useState } from 'react';
import { Section } from './Section';

export const SectionCarousel = ({ sections }, props) => {
  const [activeSection, setActiveSection] = useState(0);

  const handleNext = () => {
    if (activeSection < sections.length - 1) {
      setActiveSection(activeSection + 1);
    }
  };

  const handlePrev = () => {
    if (activeSection > 0) {
      setActiveSection(activeSection - 1);
    }
  };

  return (
    <>
      <Section right carousel opacity={props.opacity} handlePrev={handlePrev} handleNext={handleNext}>
        {sections[activeSection].content}
      </Section>
    </>
  );
};
