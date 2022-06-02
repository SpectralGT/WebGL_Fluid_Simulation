export {};

function main() {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
	const gl = canvas.getContext("webgl") as WebGLRenderingContext;

	if (gl == null) {
		window.alert("WebGL not Supported");
	}

	// Set clear color to black, fully opaque
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	// Clear the color buffer with specified clear color
	gl.clear(gl.COLOR_BUFFER_BIT);
}
window.onload = main;
