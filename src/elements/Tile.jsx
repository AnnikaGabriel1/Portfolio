import { useState } from 'react';

export default function Tile({ img, imgAlt, title, url, tileClassName }) {
	// State zur Verwaltung der Rotation
	const [rotation, setRotation] = useState(0);

	// Funktion, die beim Klick den Link öffnet
	const handleClick = () => {
		window.open(url, '_blank');
	};

	// Funktion, um das Klicken mit der Tastatur zu ermöglichen (Enter oder Space)
	const handleKeyPress = (event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			handleClick(); // Klick auslösen
		}
	};
	// Funktion zur Rotation beim Hover
	const handleMouseEnter = () => {
		setRotation((prevRotation) => (prevRotation + 90) % 360);
	};

	const tileStyle = url ? { cursor: 'pointer' } : {};
	return (
		<div
			className={tileClassName}
			style={tileStyle}
			onClick={handleClick} // Mausinteraktion
			onKeyDown={handleKeyPress} // Tastaturinteraktion
			onMouseEnter={handleMouseEnter} // Rotation triggern
			tabIndex="0" // Ermöglicht Tastaturfokus
			role="button" // Semantische Bedeutung: Es ist ein Button
		>
			<img
				src={img}
				alt={imgAlt}
				style={{
					transform: `rotate(${rotation}deg)`,
					transition: 'transform 0.3s ease',
				}}
			/>
			<h4>{title}</h4>
		</div>
	);
}
