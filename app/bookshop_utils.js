function addVAT(price) {
    if (typeof price !== "number") {
        throw new Error("Please provide a number")
     }
    return price + (0.2 * price);
}
function getFullName (firstName, lastName){
    return firstName + " " + lastName;
}
function makeHalfPrice (price){
    return price - (0.5 * price);
}
function countBooks (arr){
    return arr.length;
}
function isInStock (obj){
    return obj.quantity > 0 ? true : false;
}

function getTotalOrderPrice (price, quantity){
    let result = price * quantity;
    return result + (result * 0.2);
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};
