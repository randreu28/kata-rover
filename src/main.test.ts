import { expect, test } from "bun:test";
import main from "./main";

test("Low complexity tests", () => {
  expect(main("L")).toBe("0:0:W");
  expect(main("R")).toBe("0:0:E");
  expect(main("F")).toBe("0:1:N");
});

test("Middle complexity tests", () => {
  expect(main("RFF")).toBe("2:0:E");
  expect(main("LFF")).toBe("-2:0:W");
  expect(main("LLFF")).toBe("0:-2:S");
  expect(main("FRFFR")).toBe("2:1:S");
});

test("High complexity tests", () => {
  //TODO
});
