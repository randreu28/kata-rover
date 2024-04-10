import { expect, test } from "bun:test";
import main from "./main";

test("Low complexity tests", () => {
  expect(main("L")).toBe("0:0:W");
  expect(main("R")).toBe("0:0:E");
  expect(main("F")).toBe("0:1:N");
});

test("Middle complexity tests", () => {
  expect(main("RFF")).toBe("2:0:E");
  expect(main("LFF")).toBe("8:0:W");
  expect(main("LLFF")).toBe("0:8:S");
  expect(main("FRFFR")).toBe("2:1:S");
});

test("High complexity tests", () => {
  expect(main("LFFRFF")).toBe("8:2:N");
  expect(main("LLFFFRF")).toBe("9:7:W");
  expect(main("FRFFRLRF")).toBe("2:0:S");
  expect(main("FFFFLRLLFFFFRR")).toBe("0:0:N");
});
