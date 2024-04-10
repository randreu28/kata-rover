import type { Direction, RobotState, Position } from "./types";

/**
 * Executes the given Rover command
 * @param command The command to execute (ex: "FFRFF")
 * @returns The final position and direction of the robot
 */
export default function main(command: string) {
  const initialState: RobotState = {
    position: { x: 0, y: 0 },
    direction: "N",
  };

  const { position, direction } = command
    .split("")
    .reduce<RobotState>((acc, curr) => {
      if (curr === "L" || curr === "R") {
        return { ...acc, direction: rotate(acc.direction, curr) };
      }

      if (curr === "F") {
        return { ...acc, position: move(acc.position, acc.direction) };
      }

      throw new Error("Invalid command");
    }, initialState);

  return `${position.x}:${position.y}:${direction}`;
}

/**
 * Rotates the robot to the next cardinal point
 * @param direction A cardinal point (ex: N, indincating North)
 * @returns The new direction
 */
function rotate(direction: Direction, command: "L" | "R") {
  const directions: Direction[] = ["N", "E", "S", "W"];
  const currentIndex = directions.indexOf(direction);

  const rotationAmount = command === "R" ? 1 : -1;
  const newIndex =
    (currentIndex + rotationAmount + directions.length) % directions.length;

  return directions[newIndex];
}

/**
 * Moves the robot to the next position
 * @param position The current position
 * @param direction The current direction
 * @returns The new cardinal position
 */
function move(position: Position, direction: Direction) {
  const maxX = 9;
  const maxY = 9;

  switch (direction) {
    case "N":
      return { ...position, y: position.y >= maxY ? 0 : position.y + 1 };
    case "S":
      return { ...position, y: position.y <= 0 ? maxY : position.y - 1 };
    case "E":
      return { ...position, x: position.x >= maxX ? 0 : position.x + 1 };
    case "W":
      return { ...position, x: position.x <= 0 ? maxX : position.x - 1 };
  }
}
