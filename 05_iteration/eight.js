const myNums = [1, 2, 3]

const myTotal = myNums.reduce((acc, cr) =>{
    // console.log(`acc ${acc} and cr : ${cr}`);
    
    return acc + cr
}, 0)

// console.log(myTotal);

const shopppingCart = [
    {
        itemName: "js courses",
        price: 5000
    },
    {
        itemName: "java courses",
        price: 3000
    },
    {
        itemName: "python courses",
        price: 3000
    },
    {
        itemName: "AiML courses",
        price: 10000
    }
]

const totalPrice = shopppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)


console.log(totalPrice);