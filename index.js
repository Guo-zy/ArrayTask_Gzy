// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log("a是否为数组类型:" + (a instanceof Array));
console.log("b是否为数组类型:" + (b instanceof Array))

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var result = a.map(item => item * 2)
console.log(result)

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var res1 = colors.join(' ');
console.log(res1);
var res2 = colors.join('+');
console.log(res2);
var res3 = colors.join(',');
console.log(res3);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var res4 = a.sort((a , b ) =>{
    return b - a;
})
console.log(res4);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var HashMap = {};
for (const item of a) {
    if(!HashMap[item + ""]) HashMap[item + ""] = 1;
    else HashMap[item + ""] ++;
}
var res5 , maxNum = 0;
for (const item in HashMap) {
        if(HashMap[item] > maxNum){
            maxNum = HashMap[item];
            res5 = item;
        }
}
console.log(res5)
