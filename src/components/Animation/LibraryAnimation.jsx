export const LibraryAnimation = (timeline, libraryRef) => {
    // library movement
    timeline.current.from(
      libraryRef.current.position,
      {
        duration: 0.5,
        x: -2,
      },
      0.5
    );
    // library rotation
    timeline.current.from(
      libraryRef.current.rotation,
      {
        duration: 0.5,
        y: -Math.PI / 2,
      },
      0
    );
  };