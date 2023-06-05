import logo from "./logo.svg";
import "./App.css";

// https://github.com/leon8889/shecodes-react-dictionary
// https://relaxed-mochi-9c5a9e.netlify.app/

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<a
					href="https://getbootstrap.com/docs/3.4/css/"
					className="btn btn-primary"
				>
					Bootstrap
				</a>
			</header>
		</div>
	);
}

export default App;
