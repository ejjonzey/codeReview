describe("Answer", function () {
    it("Should return Triangle is Equilateral when all sides are equal", function () {
        expect(TriangleType(1, 1, 1)).toBe("Triangle is Equilateral");
    });
    it("Should return Triangle is Isosceles when two sides are equal", function (){
        expect(TriangleType(1, 1, 2)).toBe("Triangle is Isosceles");
    });
    it("Should return Triangle is Scalene when no sides are equal", function () {
        expect(TriangleType(1, 2, 3)).toBe("Triangle is Scalene")
    });
    it("Should return Triangle Cannot Exist")
})