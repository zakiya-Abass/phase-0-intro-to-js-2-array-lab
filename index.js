// Write your solution here!
//cats is assigned an initial value of ["Milo", "Otis", "Garfield"]

const cats = ["Milo", "Otis", "Garfield"];
//appends a cat to the end of the cats array

function destructivelyAppendCat(name) {
  // cats[3] = "Ralph";
  // console.log("cats");
  cats.push(name);
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(name) {
  const kityCat = [...cats, name];
  return kityCat;
}

function prependCat(name) {
  const kityCat = [name, ...cats];
  return kityCat;
}
function removeLastCat() {
  const catNew = [...cats];
  catNew.pop();
  return catNew;
}
function removeFirstCat() {
  const catNew = [...cats];
  catNew.shift();
  return catNew;
}
