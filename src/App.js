import logo from "./logo.png";
import "./App.css";

import Dictionary from "./components/Dictionary.js";

// https://github.com/leon8889/shecodes-react-dictionary
// https://relaxed-mochi-9c5a9e.netlify.app/

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<main>
				<Dictionary />
			</main>
			<footer>coded by leon</footer>
		</div>
	);
}

export default App;
