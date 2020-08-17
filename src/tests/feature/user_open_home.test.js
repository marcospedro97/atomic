
describe("user-view-testimonials-section feature tests", () => {
    beforeAll(async () => {
      jest.setTimeout(30000);
      await page.setExtraHTTPHeaders({
        "Accept-Language": "pt-BR",
      });
      await page.goto(URL, { waitUntil: "domcontentloaded" });
    });
    it("should be abble to se posts", () => {
      //ASSERT
      
    });
});