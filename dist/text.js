"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function formatString(input, toUpper) {
    return toUpper === true ? input.toUpperCase() : input.toLowerCase();
}
const result = formatString("Hello", true);
console.log(result);
// interface bookArray {
//     title: string;
//     rating: number
// }
// function filterByRating(items: bookArray[]): bookArray[]{
//     return items.filter(item => item.rating >= 4);
// }
// function concatenateArrays<T>(...infos: T[][]): T[] {
//     return infos.reduce((first, second) => first.concat(second), []);
// }
// function processValue(value: string | number): number {
//     if (typeof value === 'string') {
//         return value.length
//     } else{
//         return value * 2
//     }
// }
// interface Product {
//     name: string;
//     price: number;
// }
// function getMostExpensiveProduct(products: Product[]): Product | null {
//     return products.length === 0 ? null : products.reduce((first, second) => (first.price > second.price ? first : second))
// }
// enum Day {
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
// }
// function getDayType(day: Day): string {
//     if(day === Day.Monday || day === Day.Sunday){
//         return "Weekend"
//     }
//     else{
//       return"Weekday"  
//     }
// }
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        if (n < 0) {
            return Promise.reject(new Error("Negative number not allowed"));
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        });
    });
}
squareAsync(5)
    .then(result => {
    console.log("Square:", result);
})
    .catch(error => {
    console.error("Error:", error.message);
});
