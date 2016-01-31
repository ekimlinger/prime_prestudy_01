console.log("Hey this works!\n\nI'm in the console!\n\nNow I am going to perform a function");

function foo (int){
	int *=2;
	console.log("Your number multiplied by 2: " + int + "\n");
	return int;
}

var bar = 1;

console.log("The starting number is: " + bar + "\n");

foo(foo(foo(foo(foo(foo(foo(foo(bar))))))));