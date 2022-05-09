/*
Title:  Two Printers
Link:   https://www.codeabbey.com/index/task_view/two-printers
*/

output(twoPrinters(input()));

function twoPrinters(testCases) {
    const output = [];

    for (let i = 0; i < testCases; i++) {
        const data = input()
                    .split(' ')
                    .map(str => Number(str));

        const p1 = new Printer(data[0]);
        const p2 = new Printer(data[1]);
        let pages = data[2];
        let next;

        while (pages--) {
            next = p1.next() <= p2.next() ? p1 : p2;
            next.queuePage();
        }
        output.push(Math.max(p1.finishTime(), p2.finishTime()));
    }
    return output.join(' ');
}

function Printer(rate) {
    this.rate = rate;
    this.pages = 0;

    this.finishTime = function() {
        return this.pages * this.rate;
    };
    this.next = function() {
        return this.finishTime() + this.rate;
    };
    this.queuePage = function() {
        this.pages++
    };
}