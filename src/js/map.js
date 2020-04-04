// Example one code
const names = [
	"Ben Smith",
	"John Michaelson",
	"Wes Tomkins",
	"Julie Donaldson",
	"Katelyn Roberts",
];
const firstNames = names.map((name) => name.split(" ")[0]);

// Add example one text content
const exampleOne = document.querySelector(".example-one");
const exampleTwo = document.querySelector(".example-two");
const text = `\
const names = ["Ben Smith", "John Michaelson", "Wes Tomkins", "Julie Donaldson", "Katelyn Roberts"];
const firstNames = names.map(name => name.split(" ")[0]);
`;

exampleOne.textContent = text;
exampleTwo.textContent = text;
