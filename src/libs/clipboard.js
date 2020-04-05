import ClipboardJS from "clipboard";

const examples = document.querySelectorAll(".snippet-btn");
const clipboard = new ClipboardJS(examples);

clipboard.on("success", (e) => {
	console.log(e);
});

clipboard.on("error", (e) => {
	console.log(e);
});
