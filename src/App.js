import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
	const [name, namestate] = useState("Raj demo");
	const [color, colorstate] = useState("green");
	const changename = () => {
		namestate("New Raj Demo");
	};
	const changename1 = () => {
		colorstate("red");
	};
	const changename2 = () => {
		colorstate("blue");
	};
	const changename3 = () => {
		colorstate("grey");
	};
	console.log("hello");
	return (
		<div className='App'>
			<header className='App-header' style={{ backgroundColor: color }}>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<p>This is the app created By {name}</p>
				<div>
					<button onClick={() => changename()}>changing name</button>
					<button onClick={() => changename1()}>changing solue</button>
					<button onClick={() => changename2()}>changing color</button>
					<button onClick={() => changename3()}>changing bsda</button>
				</div>
			</header>
		</div>
	);
}

export default App;
