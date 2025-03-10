let unit = Number(prompt("Enter Unit Here"));
console.info("Printing Your Bill");

let price = 0;

if (unit <= 100) {
    price = unit * 4.2;
} else if (unit <= 200) {
    price = (100 * 4.2) + ((unit - 100) * 6);
} else if (unit <= 400) {
    price = (100 * 4.2) + (100 * 6) + ((unit - 200) * 8);
} else {
    price = (100 * 4.2) + (100 * 6) + (200 * 8) + ((unit - 400) * 13);
}

console.log("Total Bill: ₹" + price.toFixed(2));