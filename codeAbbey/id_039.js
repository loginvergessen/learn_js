/*
Title:  Share Price Volatility
Link:   https://www.codeabbey.com/index/task_view/share-price-volatility
*/

output(sharePriceVolatility(input()));

function sharePriceVolatility(stocks) {
    const output = [];
    for (let i = 0; i < stocks; i++) {
        let stock = input()
                        .split(' ');
        const stockName = stock.shift();
        stock = stock.map(str => Number(str));
        const standardDeviation = standardDeviationCalculator(stock);
        const brokerComission = meanCalculator(stock) / 100;

        if ((standardDeviation / 4) >= brokerComission) {
            output.push(stockName);
        }
    }
    return output.join(' ');
}

function standardDeviationCalculator(numberset) {
    let mean = meanCalculator(numberset);
    let distanceArray = [];
    for (const number of numberset) {
        distanceArray.push(Math.pow(mean - number, 2));
    }
    return Math.sqrt(meanCalculator(distanceArray));
}

function meanCalculator(numberset) {
    let M = 0;
    for (const number of numberset) {
        M += number;
    }
    return M / numberset.length;
}