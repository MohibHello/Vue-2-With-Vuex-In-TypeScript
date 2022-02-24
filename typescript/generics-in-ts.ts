
// USE T for generic
function pushSomething<T>(something: T, collection: T[]) {
    collection.push(something);
    console.log(collection);
}

let jeanGrey = {name: "Jean Grey"};
let wolvernine = {name: "Wolvernine"};

let superHeros = [jeanGrey];
let powers = ["blades","esp"];


// you can pass anthing
pushSomething(wolvernine,superHeros);
pushSomething("XYZ",powers);

