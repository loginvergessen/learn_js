/*
Title:  Vowel Count
Link:   https://www.codeabbey.com/index/task_view/vowel-count
*/

output(vowelCount(input()));

function vowelCount(testCases) {
    const output = [];
    const vowelList = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let i = 0; i < testCases; i++) {
        output[i] = input()
                            .split('')
                            .filter(item => vowelList.includes(item))
                            .length;
    };
    return output.join(' ');
}