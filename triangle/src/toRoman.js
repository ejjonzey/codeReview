function toRoman(numberToConvert) {
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
  return Object
    .keys(arabicToRoman)
    .reverse()
    .reduce((romanNumeral, decimalNumber) => {
      let initialRomanNumeral = '';
      while (convertToRomanNumeral(numberToConvert, decimalNumber)) {
        initialRomanNumeral += arabicToRoman[decimalNumber];
        numberToConvert -= decimalNumber;
      }
      return romanNumeral + initialRomanNumeral;
    }, '');
}

function convertToRomanNumeral(numberToConvert, decimalNumber) {
  return numberToConvert % decimalNumber < numberToConvert;
}

