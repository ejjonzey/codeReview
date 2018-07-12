describe('Check cash register for change', () => {

    describe('Insufficient Funds, not enough money for change', () => {
        it('Should return "Insufficient Funds" when cash in drawer is less than change due', () => {
            expect(checkCashRegister(19.50, 20.00, [
                [
                    "PENNY", 0.01
                ],
                [
                    "NICKEL", 0
                ],
                [
                    "DIME", 0
                ],
                [
                    "QUARTER", 0
                ],
                [
                    "ONE", 0
                ],
                [
                    "FIVE", 0
                ],
                [
                    "TEN", 0
                ],
                [
                    "TWENTY", 0
                ],
                ["ONE HUNDRED", 0]
            ])).toEqual("Insufficient Funds");
        });
    });

    describe('Closed, change and cash in drawer are equal', () => {
        it('Should return "Closed" when cash in drawer is equal to change due', () => {
            expect(checkCashRegister(19.50, 20.00, [
                [
                    "PENNY", 0.50
                ],
                [
                    "NICKEL", 0
                ],
                [
                    "DIME", 0
                ],
                [
                    "QUARTER", 0
                ],
                [
                    "ONE", 0
                ],
                [
                    "FIVE", 0
                ],
                [
                    "TEN", 0
                ],
                [
                    "TWENTY", 0
                ],
                ["ONE HUNDRED", 0]
            ])).toEqual("Closed");
        });
    });

    describe('Open, cash in drawer is greater than change', () => {
        it('Should return array when change in drawer is greater than change due', () => {
            expect(checkCashRegister(3.26, 100.00, [
                [
                    "PENNY", 1.01
                ],
                [
                    "NICKEL", 2.05
                ],
                [
                    "DIME", 3.10
                ],
                [
                    "QUARTER", 4.25
                ],
                [
                    "ONE", 90.00
                ],
                [
                    "FIVE", 55.00
                ],
                [
                    "TEN", 20.00
                ],
                [
                    "TWENTY", 60.00
                ],
                ["ONE HUNDRED", 100.00]
            ])).toEqual([
                [
                    "TWENTY", 60.00
                ],
                [
                    "TEN", 20.00
                ],
                [
                    "FIVE", 15.00
                ],
                [
                    "ONE", 1.00
                ],
                [
                    "QUARTER", 0.50
                ],
                [
                    "DIME", 0.20
                ],
                [
                    "PENNY", 0.04
                ]
            ]);
        });
    });

    describe('Closed, incorrect money in drawer to make change', () => {
        it('Should return "Insufficient Funds" when cash in drawer cannot make proper change', () => {
            expect(checkCashRegister(15, 20, [
                [
                    "PENNY", 0
                ],
                [
                    "NICKEL", 0
                ],
                [
                    "DIME", 0
                ],
                [
                    "QUARTER", 0
                ],
                [
                    "ONE", 0
                ],
                [
                    "FIVE", 0
                ],
                [
                    "TEN", 10.00
                ],
                [
                    "TWENTY", 0
                ],
                ["ONE HUNDRED", 0]
            ])).toEqual("Insufficient funds")
        });
    });
});