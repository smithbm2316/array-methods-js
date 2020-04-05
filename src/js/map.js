// Example one code
const names = [
	"Ben Smith",
	"John Michaelson",
	"Wes Tomkins",
	"Julie Donaldson",
	"Katelyn Roberts",
];
const firstNames = names.map((name) => name.split(" ")[0]);

// Theme swapper
const body = document.querySelector("body");
const toggleTheme = document.querySelector(".toggle-theme");

toggleTheme.addEventListener("click", () => {
	body.dataset.theme === "light"
		? (body.dataset.theme = "dark")
		: (body.dataset.theme = "light");
});
