describe('Check cash register for change', () => {
    
    describe('Not enough money for change', () => {
        it('Should return "Insufficient funds" when cash in drawer is less than change due', () => {
          expect(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toEqual("Insufficient Funds");  
        });
    });

    describe('Closed, change and cash in drawer are equal', () => {
        it('Should return "Closed" when cash in drawer is equal to change due', () => {
            expect(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toEqual("Closed");
        });
    });
});