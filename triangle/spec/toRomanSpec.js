describe('Roman Numeral Converter', () => {
    it("Should convert the number 1 into Roman Numeral I", function () {
        expect(toRoman(1)).toEqual('I');
    });

    it("Should convert the number 4 into Roman Numeral IV", function ()  {
        expect(toRoman(4)).toEqual('IV');
    });

    it("Should convert the number 5 into Roman Numeral V", function () {
        expect(toRoman(5)).toEqual('V');
    });

    it("Should convert the number 9 into Roman Numeral IX", function () {
        expect(toRoman(9)).toEqual('IX');
    });

    it("Should convert the number 10 into Roman Numeral X", function () {
        expect(toRoman(10)).toEqual('X');
    });

    it("Should convert the number 40 into Roman Numeral XL", function () {
        expect(toRoman(40)).toEqual('XL');
    });

    it("Should convert the number 50 into Roman Numeral L", function () {
        expect(toRoman(50)).toEqual('L');
    });

    it("Should convert the number 90 into Roman Numeral XC", function () {
        expect(toRoman(90)).toEqual('XC');
    });
        
    it("Should convert the number 100 into Roman Numeral C", function () {
        expect(toRoman(100)).toEqual('C');
    });

    it("Should convert the number 400 into Roman Numeral CD", function () {
        expect(toRoman(400)).toEqual('CD');
    });
       
    it("Should convert the number 500 into Roman Numeral D", function () {
         expect(toRoman(500)).toEqual('D');
    });

    it("Should convert the number 900 into Roman Numeral CM", function () {
        expect(toRoman(900)).toEqual('CM');
    });

    it("Should convert the number 1000 into Roman Numeral M", function () {
        expect(toRoman(1000)).toEqual('M');
    });

    it("Should convert the number 1377 into Roman Numeral MCCCXXLVII", function () {
        expect(toRoman(1377)).toEqual('MCCCLXXVII');

    });
})