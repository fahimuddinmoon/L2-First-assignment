function formatString(input: string, toUpper?: boolean): string {
    return toUpper === true ? input.toUpperCase() : input.toLowerCase();
}

interface bookArray {
    title: string;
    rating: number
}
function filterByRating(items: bookArray[]): bookArray[]{
    return items.filter(item => item.rating >= 4);
}

function concatenateArrays<T>(...infos: T[][]): T[] {
    return infos.reduce((first, second) => first.concat(second), []);
}

function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length
    } else{
        return value * 2
    }
}

interface Product {
    name: string;
    price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
    return products.length === 0 ? null : products.reduce((first, second) => (first.price > second.price ? first : second))
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
function getDayType(day: Day): string {
    if(day === Day.Monday || day === Day.Sunday){
        return "Weekend"
    }
    else{
      return"Weekday"  
    }
}

async function squareAsync(n: number): Promise<number> {

    if (n < 0) {
        return Promise.reject(new Error("Negative number not allowed"));
    }

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * n)
        }, 1000);
    });
}
     
