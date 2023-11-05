import { useState } from 'react';
import { Section } from './Section';
import { ChapterEnum } from './Chapter';
import { useEffect } from 'react';
import { SectionCarouselItem } from './SectionCarouselItem';

export const SectionCarousel = ({ sections, opacity }) => {
  const [selectedChapter, setSelectedChapter] = useState(ChapterEnum.EXPERIENCE);
  const [activeProjectSection, setActiveProjectSection] = useState(0);
  const [activeExperienceSection, setActiveExperienceSection] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [maxPageNumber, setMaxPageNumber] = useState(sections[selectedChapter].length);
  const [scrollText, setScrollText] = useState('');

  useEffect(() => {
    if (selectedChapter === ChapterEnum.PROJECTS) {
      setPageNumber(activeProjectSection + 1);
      if (activeProjectSection == sections[selectedChapter].length - 1) {
        setScrollText('↓ Scroll down to reach out... Or take a look at my past Experiences!');
      } else {
        setScrollText('');
      }
    } else {
      setPageNumber(activeExperienceSection + 1);
      if (activeExperienceSection == sections[selectedChapter].length - 1) {
        setScrollText('↓ Scroll down to reach out.... Or take a look at my side Projects!');
      } else {
        setScrollText('');
      }
    }
    setMaxPageNumber(sections[selectedChapter].length);
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
    setMaxPageNumber(sections[selectedChapter].length);
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
      <Section
        right
        carousel
        handleChapterClick={handleChapterClick}
        opacity={opacity}
        handlePrev={handlePrev}
        handleNext={handleNext}
        selectedChapter={selectedChapter}
        scrollText={scrollText}
        pageNumber={pageNumber}
        maxPageNumber={maxPageNumber}
      >
        {selectedChapter === ChapterEnum.PROJECTS ? (
          <SectionCarouselItem
            title={sections[selectedChapter][activeProjectSection].title}
            imageSrc={sections[selectedChapter][activeProjectSection].imageSrc}
            bubbles={sections[selectedChapter][activeProjectSection].bubbles}
            description={sections[selectedChapter][activeProjectSection].description}
            award={sections[selectedChapter][activeProjectSection].award}
            githubUrl={sections[selectedChapter][activeProjectSection].githubUrl}
            tryUrl={sections[selectedChapter][activeProjectSection].tryUrl}
          />
        ) : (
          <SectionCarouselItem
            title={sections[selectedChapter][activeExperienceSection].title}
            header={sections[selectedChapter][activeExperienceSection].header}
            imageSrc={sections[selectedChapter][activeExperienceSection].imageSrc}
            bubbles={sections[selectedChapter][activeExperienceSection].bubbles}
            summaries={sections[selectedChapter][activeExperienceSection].summaries}
          />
        )}
      </Section>
    </>
  );
};
