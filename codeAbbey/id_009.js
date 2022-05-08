/*
Title:  Triangles
Link:   https://www.codeabbey.com/index/task_view/triangles
*/

output(triangles(input()));

function triangles(triplets) {
    const output = [];
    for (let i = 0; i < triplets; i++) {
        const sides = input()
                        .split(' ')
                        .map(str => Number(str));
        const a = sides[0];
        const b = sides[1];
        const c = sides[2];
        output.push(a + b <= c || a + c <= b || b + c <= a ? 0 : 1);
    }
    return output.join(' ');
}