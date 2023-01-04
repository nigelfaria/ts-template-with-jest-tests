import { pigIt } from "./pigLatin";
describe("test pig Latin function ", () => {
  it("should return empty string when empty string is input", () => {
    expect(pigIt("")).toBe("");
  });
  it("should return igPay atinlay siay oolcay for pigIt('Pig latin is cool')", () => {
    expect(pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
  });
  it("should return igPay atinlay siay oolcay for pigIt('Hello world !')", () => {
    expect(pigIt("Hello world !")).toBe("elloHay orldway !");
  });

});
