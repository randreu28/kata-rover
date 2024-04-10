export type Position = {
  x: number;
  y: number;
};

export type Direction = "N" | "S" | "E" | "W";

/**
 * The representation of the position and rotation of the robot
 */
export type RobotState = {
  position: Position;
  direction: Direction;
};
