let cats = ['Milo','Otis','Garfield'];

function destructivelyAppendCat() {
    cats.splice(3,0,"Ralph");
    return cats;
}

function destructivelyPrependCat() {
    cats.splice(0,0, "Bob");
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function appendCat(name) {
    return [...cats,name];
}

function prependCat(name) {
    return [name,...cats];
}

function removeFirstCat() {
    let newCats = [...cats.slice(1,3)];
    return newCats;
}

function removeLastCat() {
    let newCats = [...cats.slice(0,2)];
    return newCats;
}
