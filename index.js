function receivesAFunction(callback) {
    console.log(callback());
}
receivesAFunction(function () { return "callback" });

function returnsANamedFunction() {
    return function calc(x = 2) { return x + 2 };
}
returnsANamedFunction()

function returnsAnAnonymousFunction() {
    return function () { console.log("Hii") };
}