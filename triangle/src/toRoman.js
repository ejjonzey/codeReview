function toRoman(num) {
    const arabicToRoman = {
      1000: 'M',
      900: 'CM',
      500: 'D',
      400: 'CD',
      100: 'C',
      90: 'XC',
      50: 'L',
      40: 'XL',
      10: 'X',
      9: 'IX',
      5: 'V',
      4: 'IV',
      1: 'I'
    };
    return Object.keys(arabicToRoman)
       .reverse()
       .reduce((romanNumeral, decimalNumber) => {
         let initialString = '';
         while (num % decimalNumber < num) {
           initialString += arabicToRoman[decimalNumber];
           num -= decimalNumber;
         }
         return romanNumeral + initialString;
       }, '');
  }
toRoman(1136);
  