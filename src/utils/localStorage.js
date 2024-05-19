console.log(localStorage);

localStorage.setItem("my-data", JSON.stringify({title: "Hello"}));

class XlocalStorage {
    
    xSet(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    xGet(key) {
        return JSON.parse(localStorage.getItem(key)); 
    }
    xRemove(key) {
       return localStorage.removeItem(key);
    }
}

const myXlocalStorage = new XlocalStorage();
console.log(myXlocalStorage);

const me = {
    name: "Dan",
    lastName: "Ovsyannikov",
    age: 15
}
const moreData = {
    id: "fg1",
    info: true
}

myXlocalStorage.xSet(me.lastName, me);

localStorage.setItem(me.name, JSON.stringify(me));

console.log(JSON.parse(localStorage.getItem(me.name)) );

myXlocalStorage.xSet(moreData.id, moreData);
console.log(myXlocalStorage.xGet(moreData.id));
console.log(myXlocalStorage.xRemove(moreData.id));

sessionStorage.setItem("newData", JSON.stringify({name: "session st"}))