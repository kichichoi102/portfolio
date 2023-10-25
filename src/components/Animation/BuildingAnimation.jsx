export const FLOOR_HEIGHT = 2.3;
export const FLOORS = 3;

export const BuildingAnimation = (timeline, buildingRef) => {
    // vertical "camera" movement
    timeline.current.to(
      buildingRef.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (FLOORS - 1),
      },
      0
    );

    // Office Rotation
    timeline.current.to(buildingRef.current.rotation, { duration: 1, x: 0, y: Math.PI / 6, z: 0 }, 0);
    timeline.current.to(buildingRef.current.rotation, { duration: 1, x: 0, y: -Math.PI / 6, z: 0 }, 1);
    // Office movement
    timeline.current.to(
      buildingRef.current.position,
      {
        duration: 1,
        x: -1,
        z: 2,
      },
      0
    );
    timeline.current.to(
      buildingRef.current.position,
      {
        duration: 1,
        x: 1,
        z: 2,
      },
      1
    );
  };