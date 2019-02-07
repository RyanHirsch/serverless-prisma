import { ping } from "../ping";

test("Ping reverses passed in id", () => {
  const id = "some id";
  const result = ping(null, { id });
  expect(result).toEqual("di emos");
});
