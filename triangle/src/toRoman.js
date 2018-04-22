function toRoman(num) {
    // first create an empty string for the resulting answer
    let romanNumeral = '';
    // create two arrays for roman numerals and decimal numbers
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    // loop over each element
    for (var i = 0; i <= decimal.length; i++){
    // find the number smaller than or equal to argument
    while (num % decimal[i] < num) {
    // add matching roman numeral to string
        romanNumeral += roman[i];
    //subtract decimal value
        num -= decimal[i];
    } 
}
return romanNumeral;
}