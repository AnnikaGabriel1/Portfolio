import { useState, useEffect } from 'react';

const SpiralApp = () => {
	const [speed, setSpeed] = useState(1);
	const [sinus, setSinus] = useState(38);
	const [cosinus, setCosinus] = useState(44);
	const [kugelRadius, setKugelRadius] = useState(5);
	const [spiralRadius, setSpiralRadius] = useState(5);

	useEffect(() => {
		const svg = document.getElementById('svg');
		const w = window.innerWidth;
		const h = window.innerHeight;
		svg.setAttribute('width', w);
		svg.setAttribute('height', h);

		// Die initKugeln-Funktion direkt im useEffect definieren
		const initKugeln = () => {
			const collector = [];
			const objMax = 200;

			for (let i = 0; i < objMax; i++) {
				const kugel = createKugel(i);
				collector.push(kugel);
				svg.appendChild(kugel.element);
			}

			animateKugeln(collector);
		};

		initKugeln(); // initKugeln hier aufrufen
	}, [sinus, cosinus, kugelRadius, spiralRadius]); // Sicherstellen, dass diese Variablen in der Abhängigkeitsliste enthalten sind

	const createKugel = (index) => {
		const kugel = {
			id: index,
			col: randomColor(),
			move: (time) => {
				const x =
					Math.cos(time / 1000 + (index * cosinus) / 10) * spiralRadius +
					window.innerWidth / 2;
				const y =
					Math.sin(time / 1000 + (index * sinus) / 10) * spiralRadius +
					window.innerHeight / 2;
				kugel.element.setAttribute('cx', x);
				kugel.element.setAttribute('cy', y);
			},
			element: document.createElementNS('http://www.w3.org/2000/svg', 'circle'),
		};

		kugel.element.setAttribute('r', kugelRadius);
		kugel.element.setAttribute('fill', kugel.col);

		return kugel;
	};

	const randomColor = () => {
		const r = Math.floor(Math.random() * 156) + 100;
		const g = Math.floor(Math.random() * 156) + 100;
		const b = Math.floor(Math.random() * 156) + 100;
		return `rgb(${r}, ${g}, ${b})`;
	};

	const animateKugeln = (collector) => {
		const startTime = Date.now();

		const updatePositions = () => {
			const timeElapsed = Date.now() - startTime;

			collector.forEach((kugel) => {
				kugel.move(timeElapsed);
			});

			requestAnimationFrame(updatePositions);
		};

		updatePositions();
	};

	const handleSpeedChange = (e) => {
		setSpeed(e.target.value);
	};

	const handleSinusChange = (e) => {
		setSinus(e.target.value);
	};

	const handleCosinusChange = (e) => {
		setCosinus(e.target.value);
	};

	const handleKugelRadiusChange = (e) => {
		setKugelRadius(e.target.value);
	};

	const handleSpiralRadiusChange = (e) => {
		setSpiralRadius(e.target.value);
	};

	return (
		<div>
			<div id="gui">
				<div>
					<label htmlFor="speed" id="speed_label">
						Speed: {speed}
					</label>
					<inputy
						type="range"
						id="speed"
						min="-100"
						max="100"
						step="1"
						value={speed}
						onChange={handleSpeedChange}
					/>
				</div>
				<div>
					<label htmlFor="radius" id="radius_label">
						Kugelradius: {kugelRadius}%
					</label>
					<input
						type="range"
						id="radius"
						min="1"
						max="100"
						step="1"
						value={kugelRadius}
						onChange={handleKugelRadiusChange}
					/>
				</div>
				<div>
					<label htmlFor="radiusspirale" id="radiusspirale_label">
						Spiralradius: {spiralRadius}%
					</label>
					<input
						type="range"
						id="radiusspirale"
						min="1"
						max="100"
						step="1"
						value={spiralRadius}
						onChange={handleSpiralRadiusChange}
					/>
				</div>
				<div>
					<label htmlFor="sinus" id="sinus_label">
						Sinus: {sinus}
					</label>
					<input
						type="range"
						id="sinus"
						min="1"
						max="100"
						step="1"
						value={sinus}
						onChange={handleSinusChange}
					/>
				</div>
				<div>
					<label htmlFor="cosinus" id="cosinus_label">
						Cosinus: {cosinus}
					</label>
					<input
						type="range"
						id="cosinus"
						min="1"
						max="100"
						step="1"
						value={cosinus}
						onChange={handleCosinusChange}
					/>
				</div>
			</div>

			<div id="spirale">
				<svg id="svg" width="1000" height="1000"></svg>
			</div>
		</div>
	);
};

export default SpiralApp;
