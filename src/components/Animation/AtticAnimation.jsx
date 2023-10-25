export const AtticAnimation = (timeline, atticRef) => {
  // attic floor
  timeline.current.from(
    atticRef.current.position,
    {
      duration: 1.5,
      y: 2,
    },
    0
  );
  timeline.current.from(
    atticRef.current.position,
    {
      duration: 0.5,
      z: -2,
    },
    1.5
  );
};
