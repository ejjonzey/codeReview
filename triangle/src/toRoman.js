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
  return Object
    .keys(arabicToRoman)
    .reverse()
    .reduce((romanNumeral, decimalNumber) => {
      let initialRomanNumeral = '';
      while (romanNumeralConverter(num, decimalNumber)) {
        initialRomanNumeral += arabicToRoman[decimalNumber];
        num = romanNumeralRemainder(num, decimalNumber);
      }
      return finalRomanNumeral(romanNumeral, initialRomanNumeral);
    }, '');
}

function finalRomanNumeral(romanNumeral, initialRomanNumeral) {
  return romanNumeral + initialRomanNumeral;
}

function romanNumeralRemainder(num, decimalNumber) {
  num -= decimalNumber;
  return num;
}

function romanNumeralConverter(num, decimalNumber) {
  return num % decimalNumber < num;
}

