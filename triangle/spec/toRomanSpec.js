describe('Roman Numeral Converter', () => {
    it('Converts integers to roman numerals', () => {
        expect(toRoman(1)).toEqual('I');
        expect(toRoman(4)).toEqual('IV');
        expect(toRoman(5)).toEqual('V');
        expect(toRoman(9)).toEqual('IX');
        expect(toRoman(10)).toEqual('X');
        expect(toRoman(40)).toEqual('XL');
        expect(toRoman(50)).toEqual('L');
        expect(toRoman(90)).toEqual('XC');
        expect(toRoman(100)).toEqual('C');
        expect(toRoman(400)).toEqual('CD');
        expect(toRoman(500)).toEqual('D');
        expect(toRoman(900)).toEqual('CM');
        expect(toRoman(1000)).toEqual('M');
        expect(toRoman(1377)).toEqual('MCCCLXXVII');

    })
})