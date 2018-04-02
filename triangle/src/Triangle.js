function TriangleType(sideA, sideB, sideC ){
    if (sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA) {
        console.log("Triangle is Impossible");
        return "Triangle is impossible";
    } else if (sideA === sideB && sideA === sideC) {
        console.log("Triangle is Equilateral");
        return "Triangle is Equilateral";
    } else if (sideA != sideB && sideA != sideC && sideB != sideC) {
        console.log("Triangle is Scalene");
        return "Triangle is Scalene";
    }  else if (sideA === sideB && sideA != sideC) {
        console.log("Triangle is Isosceles");
        return "Triangle is Isosceles";
    };  
    
};

