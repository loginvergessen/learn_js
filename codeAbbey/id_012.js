/*
Title:  Modulo and time difference
Link:   https://www.codeabbey.com/index/task_view/modulo-and-time-difference
*/

output(moduloAndTimeDifference(input()));

function moduloAndTimeDifference(testCases) {
    const output = [];
    for (let i = 0; i < testCases; i++) {
        const ts = input()
                        .split(' ')
                        .map(str => Number(str));
        timestamp1 = new Timestamp(ts[0], ts[1], ts[2], ts[3]);
        timestamp2 = new Timestamp(ts[4], ts[5], ts[6], ts[7]);
        timestamp3 = new Timestamp();
        timestamp3.toTimestamp(timestamp2.toSeconds() - timestamp1.toSeconds());
        output.push(`(${timestamp3.days} ${timestamp3.hours} ${timestamp3.minutes} ${timestamp3.seconds})`);
    }
    return output.join(' ');
}

function Timestamp(days = 0, hours = 0, minutes = 0, seconds = 0) {
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;

    this.toSeconds = function() {
        return this.seconds + this.minutes * 60 + this.hours * 3600 + this.days * 86400; 
    };
    this.toTimestamp = function(seconds) {
        this.days = Math.floor(seconds / 86400);
        seconds %= 86400;
        this.hours = Math.floor(seconds / 3600);
        seconds %= 3600;
        this.minutes = Math.floor(seconds / 60);
        seconds %= 60;
        this.seconds = seconds;
    }
}