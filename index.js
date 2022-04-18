//
const callback = () => "is it called yet?"
function receivesAFunction(func) {
    return func()
}
console.log("*this is a callback:*", receivesAFunction(callback))
//
function returnsANamedFunction() {
    return callback
}
console.log("*it is named:*", returnsANamedFunction())
// console.log(returnsANamedFunction()())
//
function returnsAnAnonymousFunction() {
    return (function() {
        return callback()
    })
}
console.log("*it is anonymous:*", returnsAnAnonymousFunction())
// console.log(returnsAnAnonymousFunction()())
//