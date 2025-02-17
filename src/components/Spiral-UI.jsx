import { useRef, useEffect, useState } from 'react';

export default function SpiralApp({
	initialRadius,
	initialRadiusSpirale,
	initialSinus,
	initialCosinus,
}) {
	const canvasRef = useRef(null);
	const ctxRef = useRef(null);
	const [radius, setRadius] = useState(initialRadius); // Startwert für Kugelradius
	const [radiusSpirale, setRadiusSpirale] = useState(initialRadiusSpirale);
	const [sinus, setSinus] = useState(initialSinus);
	const [cosinus, setCosinus] = useState(initialCosinus);
	const [numBalls] = useState(800);
	const angle = useRef(0);
	const speed = useRef(0.001);

	const colorPalette = [
		'#ada178',
		'#b9b18b',
		'#806f4e',
		'#756638',
		'#78ad85',
		'#94c19d',
		'#326943',
		'#387545',
		'#ad787b',
		'#c9a3a5',
		'#805056',
		'#75383b',
		'#777dad',
		'#575b7c',
		'#939cc1',
		'#383d75',
	];

	const [ballColors, setBallColors] = useState([]);

	useEffect(() => {
		if (ballColors.length === 0) {
			const colors = Array.from(
				{ length: numBalls },
				() => colorPalette[Math.floor(Math.random() * colorPalette.length)],
			);
			setBallColors(colors);
		}

		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		ctxRef.current = ctx;

		// Berechnung der Kugeln und der Spirale
		function draw() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (let i = 0; i < numBalls; i++) {
				const currentAngle = angle.current + i * 0.2;
				const x =
					canvas.width / 2 +
					(radiusSpirale + i * 1) * Math.cos(currentAngle * cosinus);
				const y =
					canvas.height / 2 +
					(radiusSpirale + i * 1) * Math.sin(currentAngle * sinus);

				const ballColor = ballColors[i];

				ctx.beginPath();
				ctx.arc(x, y, radius, 0, Math.PI * 2);
				ctx.fillStyle = ballColor;
				ctx.fill();
			}

			// Nächsten Frame anfordern
			requestAnimationFrame(draw);
		}

		draw();
	}, [radius, radiusSpirale, sinus, cosinus, numBalls, ballColors]);

	// Funktion für die Range-Slider-Änderung
	const changeRadius = (e) => {
		setRadius(Number(e.target.value));
		resetSpeedAndAngle(); // Geschwindigkeit zurücksetzen
	};

	const changeSpiralRadius = (e) => {
		setRadiusSpirale(Number(e.target.value));
		resetSpeedAndAngle(); // Geschwindigkeit zurücksetzen
	};

	const changeSinus = (e) => {
		setSinus(Number(e.target.value));
		resetSpeedAndAngle(); // Geschwindigkeit zurücksetzen
	};

	const changeCosinus = (e) => {
		setCosinus(Number(e.target.value));
		resetSpeedAndAngle(); // Geschwindigkeit zurücksetzen
	};

	// Funktion zum Zurücksetzen von Winkel und Geschwindigkeit
	const resetSpeedAndAngle = () => {
		angle.current = 0; // Setzt den Winkel zurück
		speed.current = 0.001; // Setzt die Geschwindigkeit zurück
	};

	// Funktion zum Aktualisieren des Winkels ohne direkte Einflussnahme auf die Geschwindigkeit
	useEffect(() => {
		const interval = setInterval(() => {
			angle.current += speed.current;
		}, 1000 / 60); // 60 FPS für gleichmäßige Winkelaktualisierung

		return () => clearInterval(interval); // Aufräumen der Intervalle
	}, []);

	return (
		<div className="spiral__wrapper">
			<canvas
				ref={canvasRef}
				width="1000" // Feste Breite für Canvas
				height="600" // Feste Höhe für Canvas
			/>
			<div className="spiral__label">
				<label>
					<h5>Circle Radius</h5>
					<span>
						<h5>{radius} px</h5>
					</span>
					<input
						type="range"
						min="2"
						max="20"
						value={radius}
						onChange={changeRadius}
					/>
				</label>
				<label>
					<h5>Spiral Radius</h5>
					<span>
						<h5>{radiusSpirale} px</h5>
					</span>
					<input
						type="range"
						min="1"
						max="100"
						value={radiusSpirale}
						onChange={changeSpiralRadius}
					/>
				</label>
				<label>
					<h5>Sinus</h5>
					<span>
						<h5>{sinus}</h5>
					</span>
					<input
						type="range"
						min="0.1"
						max="3"
						step="0.1"
						value={sinus}
						onChange={changeSinus}
					/>
				</label>
				<label>
					<h5>Cosinus</h5>
					<span>
						<h5>{cosinus}</h5>
					</span>
					<input
						type="range"
						min="0.1"
						max="3"
						step="0.1"
						value={cosinus}
						onChange={changeCosinus}
					/>
				</label>
			</div>
		</div>
	);
}
