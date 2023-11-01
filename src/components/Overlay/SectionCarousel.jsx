import { useState } from 'react';
import { Section } from './Section';
import { ChapterEnum } from './Chapter';
import { useEffect } from 'react';

export const SectionCarousel = ({ sections, opacity }) => {
  const [selectedChapter, setSelectedChapter] = useState(ChapterEnum.EXPERIENCE);
  const [activeProjectSection, setActiveProjectSection] = useState(0);
  const [activeExperienceSection, setActiveExperienceSection] = useState(0);
  const [scrollText, setScrollText] = useState('');

  useEffect(() => {
    if (selectedChapter === ChapterEnum.PROJECTS) {
      if (activeProjectSection == sections[selectedChapter].length - 1) {
        setScrollText('↓ Scroll down to see more... Or take a look at my past Experiences!');
      } else {
        setScrollText('');
      }
    } else {
      if (activeExperienceSection == sections[selectedChapter].length - 1) {
        setScrollText('↓ Scroll down to see more.... Or take a look at my side Projects!');
      } else {
        setScrollText('');
      }
    }
  }, [activeProjectSection, activeExperienceSection, selectedChapter]);

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
      <Section right carousel handleChapterClick={handleChapterClick} opacity={opacity} handlePrev={handlePrev} handleNext={handleNext} selectedChapter={selectedChapter} scrollText={scrollText}>
        {selectedChapter === ChapterEnum.PROJECTS ? sections[selectedChapter][activeProjectSection].content : sections[selectedChapter][activeExperienceSection].content}
      </Section>
    </>
  );
};
