import test from "ava"
import jasop from "."

function setWindowOpen(cb) {
	globalThis.window = {
		open: cb,
	}
}

test("main", (t) => {
	setWindowOpen((...args) => t.deepEqual(args, ["https://example.com", "MyWindow", "height=100,scrollbars=yes,width=200,top=100,screenY=100", true]))
	jasop(
		"https://example.com", // URL
		{
			height: 100, // You can use any window.open option
			scrollbars: true, // Booleans will the parsed
			width: 200, // Everything else will be converted to a string
			top: 100, // Options are polyfilled
			title: "MyWindow", // Custom window title
			replace: true, // History behaviour
		},
	)

	t.pass()
})
