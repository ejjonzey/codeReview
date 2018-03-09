describe("Answer", function () {
    it("Should return Triangle is Equilateral when all sides are equal", function () {
        expect(TriangleType(1, 1, 1)).toEqual("Triangle is Equilateral");
    });
})