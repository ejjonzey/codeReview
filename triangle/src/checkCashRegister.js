function checkCashRegister(price, cash, cashInDrawer) {

    const denominations = [
        {
            name: 'ONE HUNDRED',
            amount: 100.00
        }, {
            name: 'TWENTY',
            amount: 20.00
        }, {
            name: 'TEN',
            amount: 10.00
        }, {
            name: 'FIVE',
            amount: 5.00
        }, {
            name: 'ONE',
            amount: 1.00
        }, {
            name: 'QUARTER',
            amount: 0.25
        }, {
            name: 'DIME',
            amount: 0.10
        }, {
            name: 'NICKEL',
            amount: 0.05
        }, {
            name: 'PENNY',
            amount: 0.01
        }
    ];

    let amountLeft = cash - price;

    let register = drawerObject(cashInDrawer);

    if (closedRegister(register, amountLeft)) {
        return 'Closed';
    }

    if (insufficientFunds(register, amountLeft)) {
        return 'Insufficient Funds';
    }

    let customerChange = denominations.reduce(function (accumulator, current) {
        let amount = 0;
        while (changeFromRegister(register, current, amountLeft)) {
            amountLeft -= current.amount;
            register[current.name] -= current.amount;
            amount += current.amount;

            roundAmountLeft();
        }

        if (amount > 0) {
            accumulator.push([current.name, amount]);
        }
        return accumulator;
    }, []);

    if (customerChange.length < 1 || amountLeft > 0) {
        return "Insufficient funds"
    }

    return customerChange;

    function roundAmountLeft() {
        amountLeft = Math.round(amountLeft * 100) / 100;
    }
}


function drawerObject(cashInDrawer) {
    return cashInDrawer.reduce(function (accumulator, current) {
        accumulator.total += current[1];
        accumulator[current[0]] = current[1];
        return accumulator;
    }, { total: 0 });
}

function changeFromRegister(register, current, amountLeft) {
    return register[current.name] > 0 && amountLeft >= current.amount;
}

function insufficientFunds(register, amountLeft) {
    return register.total < amountLeft;
}

function closedRegister(register, amountLeft) {
    return register.total === amountLeft;
}

