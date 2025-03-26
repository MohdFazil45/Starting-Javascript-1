const myObject = {
    js:  'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    go: 'Go',
    swift: 'Swift'
}
for (const key in myObject) {
    //console.log(`${key} shortcut is for  ${myObject[key]}`);
}

const programming = ["js", "cpp", "rb","py", "java"]

for (const key in programming) {
    // console.log(key);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

for (const key in map) {
    console.log(key);
    
}