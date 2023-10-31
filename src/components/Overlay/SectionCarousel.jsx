import { useState } from 'react';
import { Section } from './Section';
import { ChapterEnum } from './Chapter';

export const SectionCarousel = ({ sections }, props) => {
  const [selectedChapter, setSelectedChapter] = useState(ChapterEnum.PROJECTS);
  const [activeProjectSection, setActiveProjectSection] = useState(0);
  const [activeExperienceSection, setActiveExperienceSection] = useState(0);

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
  };

  const handleNext = () => {
    if (selectedChapter === ChapterEnum.PROJECTS) {
      if (activeProjectSection < sections[selectedChapter].length - 1) {
        setActiveProjectSection(activeProjectSection + 1);
      }
    } else {
      if (activeExperienceSection < sections[selectedChapter].length - 1) {
        setActiveExperienceSection(activeExperienceSection + 1);
      }
    }
  };

  const handlePrev = () => {
    if (selectedChapter === ChapterEnum.PROJECTS) {
      if (activeProjectSection > 0) {
        setActiveProjectSection(activeProjectSection - 1);
      }
    } else {
      if (activeExperienceSection > 0) {
        setActiveExperienceSection(activeExperienceSection - 1);
      }
    }
  };

  return (
    <>
      <Section right carousel handleChapterClick={handleChapterClick} opacity={props.opacity} handlePrev={handlePrev} handleNext={handleNext} selectedChapter={selectedChapter}>
        {selectedChapter === ChapterEnum.PROJECTS ? sections[selectedChapter][activeProjectSection].content : sections[selectedChapter][activeExperienceSection].content}
      </Section>
    </>
  );
};
