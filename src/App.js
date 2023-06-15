import logo from "./logo.png";
import "./App.css";

import Dictionary from "./components/Dictionary.js";

// https://github.com/leon8889/shecodes-react-dictionary
// https://shecodes-react-dictionary.netlify.app/

function App() {
	return (
		<div className="App mt-3">
			<header className="App-header">
				<img src={logo} className="App-logo img-fluid" alt="logo" />
			</header>
			<main>
				<Dictionary defaultKeyword="hello" />
			</main>
			<footer>
				coded by leon, and is{" "}
				<a
					href="https://github.com/leon8889/shecodes-react-dictionary"
					target="_blank"
					rel="noreferrer"
				>
					open-sourced
				</a>
			</footer>
		</div>
	);
}

export default App;
