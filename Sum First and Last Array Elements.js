function sumFirstAndLastArrayElements(array) {
    let firstEl = array.shift();
    let lastEl = array.pop();
    let sum = firstEl + lastEl;
    console.log(sum);
}
//sumFirstAndLastArrayElements([20, 30, 40]);
//sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);