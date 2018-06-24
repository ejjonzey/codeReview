function checkCashRegister(price, cash, cashInDrawer) {

    const denominations = [
        {
            name: 'ONE HUNDRED',
            value: 100.00
        }, {
            name: 'TWENTY',
            value: 20.00
        }, {
            name: 'TEN',
            value: 10.00
        }, {
            name: 'FIVE',
            value: 5.00
        }, {
            name: 'ONE',
            value: 1.00
        }, {
            name: 'QUARTER',
            value: 0.25
        }, {
            name: 'DIME',
            value: 0.10
        }, {
            name: 'NICKEL',
            value: 0.05
        }, {
            name: 'PENNY',
            value: 0.01
        }
    ];

    let change = cash - price;

    let register = cashInDrawer.reduce(function (accumulator, current) {
        accumulator.total += current[1];
        accumulator[current[0]] = current[1];
        return accumulator;
    }, {total: 0});

    if (Closed(register, change)) {
        return 'Closed';
    }

    if (insufficientFunds(register, change)) {
        return 'Insufficient Funds';
    }

    let customerChange = denominations.reduce(function (accumulator, current) {
        let value = 0;
        while (changeFromRegister(register, current, change)) {
            change -= current.value;
            register[current.name] -= current.value;
            value += current.value;

            change = Math.round(change * 100) / 100;
        }

        if (value > 0) {
            accumulator.push([current.name, value]);
        }
        return accumulator;
    }, []);

    if (customerChange.length < 1 || change > 0) {
        return "Insufficient funds"
    }

    return customerChange;
}

checkCashRegister(3.26, 100.00, [
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
]);

function changeFromRegister(register, current, change) {
    return register[current.name] > 0 && change >= current.value;
}

function insufficientFunds(register, change) {
    return register.total < change;
}

function Closed(register, change) {
    return register.total === change;
}
