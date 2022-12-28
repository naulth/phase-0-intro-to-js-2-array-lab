// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield"
]

function destructivelyAppendCat(Ralph){
    cats.push("Ralph");
}

function destructivelyPrependCat(Bob){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(Ralph){
    cats.pop()
}

function destructivelyRemoveFirstCat(Bob){
    cats.shift()
}

function appendCat(Broom){
    const copyOfCats = [...cats, "Broom"];
    return copyOfCats;
}

function prependCat(Arnold){
    const copyOfCats = [ "Arnold", ...cats];
    return copyOfCats;
}

function removeLastCat(cat){
    const newCopyOfCats = cats.slice(0, cats.length - 1);
    return newCopyOfCats;
}

function removeFirstCat(cat){
    const newCopyOfCats = cats.slice(1);
    return newCopyOfCats;
}