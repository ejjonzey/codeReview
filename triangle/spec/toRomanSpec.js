describe('Roman Numeral Converter', () => {
    it("Should return I when 1 is input", function () {
        expect(toRoman(1)).toEqual('I');
    });

    it("Should return IV when 4 is input", function ()  {
        expect(toRoman(4)).toEqual('IV');
    });

    it("Should return V when 5 is input", function () {
        expect(toRoman(5)).toEqual('V');
    });

    it("Should return IX when 9 is input", function () {
        expect(toRoman(9)).toEqual('IX');
    });

    it("Should return X when 10 is input", function () {
        expect(toRoman(10)).toEqual('X');
    });

    it("Should return XL when 40 is input", function () {
        expect(toRoman(40)).toEqual('XL');
    });

    it("Should return L when 50 is input", function () {
        expect(toRoman(50)).toEqual('L');
    });

    it("Should return XC when 90 is input", function () {
        expect(toRoman(90)).toEqual('XC');
    });
        
    it("Should return C when 100 is input", function () {
        expect(toRoman(100)).toEqual('C');
    });

    it("Should return CD when 400 is input", function () {
        expect(toRoman(400)).toEqual('CD');
    });
       
    it("Should return D when 500 is input", function () {
         expect(toRoman(500)).toEqual('D');
    });

    it("Should return CM when 900 is input", function () {
        expect(toRoman(900)).toEqual('CM');
    });

    it("Should return M when 1000 is input", function () {
        expect(toRoman(1000)).toEqual('M');
    });

    it("Should return MCCCLXXVII when 1377 is input", function () {
        expect(toRoman(1377)).toEqual('MCCCLXXVII');

    });
})