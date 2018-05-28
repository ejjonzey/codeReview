describe('Roman Numeral Converter', () => {

    describe('Base minus 1', () => {
        it('Should return 1 before the closest base when given 4 or 9', () => {
            expect(toRoman(4)).toEqual("IV");
            expect(toRoman(9)).toEqual("IX");
        });
    });

    describe('Base plus 1', () => {
        it('Should return 1 after the closest base when given 6 or 11', () => {
            expect(toRoman(6)).toEqual('VI');
            expect(toRoman(11)).toEqual('XI');
        });
    });

    describe('Base minus 10', () => {
        it('Should return 10 before the closest base when given 40 or 90', () => {
            expect(toRoman(40)).toEqual('XL');
            expect(toRoman(90)).toEqual('XC');
        });
    });

    describe('Base plus 10', () => {
        it('Should return 10 after the closest base when given 60 or 110', () => {
            expect(toRoman(60)).toEqual('LX');
            expect(toRoman(110)).toEqual('CX');
        });
    });

    describe('Base minus 100', () => {
        it('Should return 100 before the closest base when given 400 or 900', () => {
            expect(toRoman(400)).toEqual('CD');
            expect(toRoman(900)).toEqual('CM');
        });
    });

    describe('Base plus 100', () => {
        it('Should return 100 after the closest base when given 600 or 1100', () => {
            expect(toRoman(600)).toEqual('DC');
            expect(toRoman(1100)).toEqual('MC');
        });
    });
    
    it("Should convert the number 1377 into Roman Numeral MCCCXXLVII", function () {
        expect(toRoman(1377)).toEqual('MCCCLXXVII');

    });
})