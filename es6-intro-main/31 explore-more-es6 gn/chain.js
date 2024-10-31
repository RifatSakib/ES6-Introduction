// data access
const data = [{ id: 1, name: 'abul', address: 'kochu khet' }];

console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo laptop', price: 65000 },
        { id: 2, name: 'macbook', price: 165000 },
    ]
}
// second product price
console.log(products.data[1].price);//it is called chain


const user = {
    id: 5001,
    name: 'Shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}

const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        country: 'Bangladesh'
    }
}
console.log(user.address.street?.second) //here ? is called optional chain, eta diye bujhay zodin etar value thake tahole samne agabe nahole undifined e dekhabe ar samne agabe na, ekhane  second er valu pawa gese karon street er value ase

console.log(user2.address.street?.second)//here ? is called optional chain, eta diye bujhay zodin etar value thake tahole samne agabe nahole undifine e dekhabe ar samne agabe na, ekhane  second er valu pawa zay ni karon street er value undifined