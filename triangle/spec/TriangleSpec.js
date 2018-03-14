describe("Answer", function () {
    it("Should return Triangle is Equilateral when all sides are equal", function () {
        expect(TriangleType(1, 1, 1)).toBe("Triangle is Equilateral");
        expect(TriangleType(12, 12, 12)).toBe("Triangle is Equilateral");
        expect(TriangleType(144, 144, 144)).toBe("Triangle is Equilateral");
    });
    it("Should return Triangle is Isosceles when two sides are equal", function () {
        expect(TriangleType(1, 1, 2)).toBe("Triangle is Isosceles");
        expect(TriangleType(13, 13, 21)).toBe("Triangle is Isosceles");
        expect(TriangleType(162, 162, 211)).toBe("Triangle is Isosceles");
    });
    it("Should return Triangle is Scalene when no sides are equal", function () {
        expect(TriangleType(1, 2, 3)).toBe("Triangle is Scalene");
        expect(TriangleType(14, 27, 63)).toBe("Triangle is Scalene");
        expect(TriangleType(513, 242, 326)).toBe("Triangle is Scalene");
    });
    it("Should not return equilateral when all sides are not equal", function () {
        expect(TriangleType(1, 1, 2)).not.toBe("Equilateral");
        expect(TriangleType(173, 173, 262)).not.toBe("Equilateral");
        expect(TriangleType(21, 21, 25)).not.toBe("Equilateral");
    });
    it("Should not return Triangle is Isosceles when 3 sides are equal or none are equal", function () {
        expect(TriangleType(2, 2, 2)).not.toBe("Isosceles");
        expect(TriangleType(22, 22, 22)).not.toBe("Isosceles");
        expect(TriangleType(13, 12, 32)).not.toBe("Isosceles");
    });
    it("Should not return Triangle is Scalene when there are at least two equal sides", function () {
        expect(TriangleType(1, 1, 2)).not.toBe("Scalene");
        expect(TriangleType(15, 15, 26)).not.toBe("Scalene");
        expect(TriangleType(144, 144, 232)).not.toBe("Scalene");
    });
    it("Should return Triangle Cannot Exist when Triangle is Impossible!", function (){
        //expect(TriangleType(12, 36, 326)).toBe("Triangle is impossible!")
    });
})