const side1 = 5;
const side2 = 6;
const side3 = 7;
const step1 = ((side1 + side2 + side3) / 2);

const step2 = (step1 * (step1 - side1)*(step1 - side2)*(step1 - side3));
const area = Math.sqrt(step2);

console.log(area);




// const step1side1 = (step1 - side1);
// const step1side2 = (step1 - side2);
// const step1side3 = (step1 - side3);

// const step2 = (step1side1 * step1side2 * step1side3);
// const step3 = (step1 * step2);
// const area = Math.sqrt(step3);
// console.log(area);
