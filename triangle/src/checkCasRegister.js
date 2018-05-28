const denomination = [
        {'One hundred': 100.00},
        {'Twenty': 20.00},
        {'Ten': 10.00},
        {'Five': 5.00},
        {'One': 1.00},
        {'Quarter': 0.25},
        {'Dime': 0.10},
        {'Nickel': 0.05},
        {'Penny': 0.01}
    ];

function checkCashRegister(price, cash, cashInDrawer) {
    let change = cash - price;

    let register = cashInDrawer.reduce(function(account, current) {
        account.total += current[1];
        account[current[0]] = current[1];
        return account;
    }, {total: 0});

    if(register.total === change) {
        return "Closed";
    }

    if(register.total < change) {
        return "Insufficient Funds"
    };
}