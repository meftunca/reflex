import Color from "./Color";

it("works", () => {
  expect(
    new Color("rgba(255, 255, 255, 0.5)").darken(0.1)
  ).toMatchInlineSnapshot(`"rgba(255, 255, 255, 0.6)"`);
});
