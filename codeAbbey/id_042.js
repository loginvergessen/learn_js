/*
Title:  Blackjack Counting
Link:   https://www.codeabbey.com/index/task_view/blackjack-counting
*/

output(blackjackCounting(input()));

function blackjackCounting(testCases) {

    const output = [];
    for (let i = 0; i < testCases; i++) {
        const hand = input()
                        .split(' ')
                        .map(str => str.replace("T", "10"))
                        .map(str => str.replace("J", "10"))
                        .map(str => str.replace("Q", "10"))
                        .map(str => str.replace("K", "10"))
                        .map(str => str.replace("A", "11"))
                        .map(str => Number(str));

        const handCount = countHand(hand);
        if (handCount <= 21)
            output.push(handCount);
        else
            output.push("Bust");
    }
    return output.join(' ');
}

function countHand(hand) {
    const sum = hand.reduce((partialSum, a) => partialSum + a, 0);

    if (!hand.includes(11))
        return sum;
    if (sum <= 21)
        return sum;
    return countHand(replaceAce(hand));
}

function replaceAce(hand) {
    const indexOfFirstAce = hand.indexOf(11);
    hand.splice(indexOfFirstAce, 1, 1);
    return hand;
}