function TriangleType(sideA, sideB, sideC ){
    if (sideA === sideB && sideA === sideC) {
        console.log("Triangle is Equilateral");
        return "Triangle is Equilateral";
    } else if (sideA != sideB && sideA != sideC && sideB != sideC) {
        console.log("Triangle is Scalene");
        return "Triangle is Scalene";
    }  else if (sideA === sideB && sideA != sideC) {
        console.log("Triangle is Isosceles");
        return "Triangle is Isosceles";
    }  
}
