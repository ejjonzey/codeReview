function TriangleType(sideA, sideB, sideC ){
if (impossibleTriangle(sideA, sideB, sideC)) {
        return "Triangle is impossible";
} else if (equilateralTriangle(sideA, sideB, sideC)) {
        return "Triangle is Equilateral";
} else if (scaleneTriangle(sideA, sideB, sideC)) {
        return "Triangle is Scalene";
} else if (isoscelesTriangle(sideA, sideB, sideC)) {
        return "Triangle is Isosceles";
    };  
    
};

function isoscelesTriangle(sideA, sideB, sideC) {
    return sideA === sideB && sideA != sideC;
}

function scaleneTriangle(sideA, sideB, sideC) {
    return sideA != sideB && sideA != sideC && sideB != sideC;
}

function equilateralTriangle(sideA, sideB, sideC) {
    return sideA === sideB && sideA === sideC;
}

function impossibleTriangle(sideA, sideB, sideC) {
    return sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA;
}

