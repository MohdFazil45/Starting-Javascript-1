// for of 

// ['','','','']
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for (const val  of arr) {
    // console.log(val);   
}

const name = "fazil"
for (const val of name) {
    // console.log(val);
}

//Maps 

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':- ', value);
}

const myObject = {
    'game1': 'NFS',
    'game2':  'Fortnite',
    'game3': 'Red Dead Redemption'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':- ', value);
// } Not working for myObject

