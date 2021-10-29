<script>
	// You can define APIs for communicating with the main process in electron/preload.js .
	const boo = window.electron.test

	// Force all links to open in the user's browser.
	document.addEventListener('click', (e) => {
		if (e.target.tagName === 'A') {
			e.preventDefault()
			window.electron.openExternal(e.target.href)
		}
	})

</script>

<h1>
	Hello, World!
</h1>
<p>
	Click <a href="https://www.electronjs.org/docs/latest/">here</a> to learn more about Electron, or <a href="https://svelte.dev/tutorial/basics">here</a> for the Svelte tutorial.
</p>
<button on:click={boo}>
	Something's creeping up behind you...
</button>

<style>
	h1 {
		text-align: center;
		font-weight: 600;
		color: magenta;
	}
	p {
		text-align: center;
	}
	a {
		color: magenta;
	}
	button {
		display: block;
		margin: auto;
		border: none;
		border-radius: 4px;
		color: magenta;
	}
	button:hover {
		color: white;
		background-color: magenta;
	}
</style>