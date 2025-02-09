document.addEventListener('DOMContentLoaded', () => {
	const cursor = document.createElement('div');
	cursor.id = 'cursor';
	cursor.className = 'cursor';
	document.body.appendChild(cursor);

	const svgCursor = `
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_21_2)">
                <rect width="50" height="50" fill="none"/>
                <path d="M48.223 25.5917C46.7176 27.2579 43.6203 30.4087 39.5229 33.1367C35.4176 35.8699 30.389 38.125 25 38.125C19.611 38.125 14.5824 35.8699 10.4771 33.1367C6.37968 30.4087 3.28243 27.2579 1.77702 25.5917C1.49641 25.2812 1.49641 24.8438 1.77702 24.5333C3.28243 22.8671 6.37968 19.7163 10.4771 16.9883C14.5824 14.2551 19.611 12 25 12C30.389 12 35.4176 14.2551 39.5229 16.9883C43.6203 19.7163 46.7176 22.8671 48.223 24.5333C48.5036 24.8438 48.5036 25.2812 48.223 25.5917Z" stroke="#181A19" stroke-width="2" stroke-linejoin="round"  fill="#e7e4d7"/>
                <circle id="iris" cx="25" cy="25" r="10" fill="#1d3557"/>
            </g>
            <defs>
                <clipPath id="clip0_21_2">
                    <rect width="50" height="50" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    `;

	cursor.innerHTML = svgCursor;

	const iris = cursor.querySelector('#iris');
	let lastCursorX = 0;
	let lastCursorY = 0;
	let lastIrisX = 25; // Startposition der Iris
	let lastIrisY = 25; // Startposition der Iris
	let targetCursorX = 0; // Zielposition des Cursors
	let targetCursorY = 0; // Zielposition des Cursors

	const cursorSpeed = 0.1; // Geschwindigkeit des Augenversatzes
	const irisSpeed = 0.2; // Geschwindigkeit der Irisbewegung
	let isMoving = false; // Flag um zu erkennen, ob sich der Cursor bewegt

	// Verzögerte Mausbewegung mit Throttling (alle 16ms)
	let lastMoveTime = 0;
	const throttleDelay = 16;

	document.addEventListener('mousemove', (e) => {
		const now = Date.now();
		if (now - lastMoveTime < throttleDelay) return; // Verhindert zu häufiges Berechnen
		lastMoveTime = now;

		const mouseX = e.clientX;
		const mouseY = e.clientY;

		// Setze die Zielposition des Cursors auf die aktuelle Mausposition
		targetCursorX = mouseX;
		targetCursorY = mouseY;

		isMoving = true;
	});

	// Verzögerte Augenbewegung
	function moveCursor() {
		if (isMoving) {
			// Cursor folgt der Mausposition mit einer Verzögerung
			lastCursorX += (targetCursorX - lastCursorX) * cursorSpeed;
			lastCursorY += (targetCursorY - lastCursorY) * cursorSpeed;

			cursor.style.left = `${lastCursorX - 25}px`; // 25px Offset für die Mitte des Cursors
			cursor.style.top = `${lastCursorY - 25}px`; // 25px Offset für die Mitte des Cursors
		}

		// Iris folgt dem Cursor, aber auch mit Verzögerung
		const irisDX = targetCursorX - (lastCursorX + 25);
		const irisDY = targetCursorY - (lastCursorY + 25);

		const irisDistance = Math.sqrt(irisDX * irisDX + irisDY * irisDY);
		const irisMaxDistance = 4; // Maximaler Versatz der Iris
		const irisDistanceClamped = Math.min(irisDistance, irisMaxDistance);

		const irisClampedX = (irisDX / irisDistance) * irisDistanceClamped;
		const irisClampedY = (irisDY / irisDistance) * irisDistanceClamped;

		lastIrisX += (irisClampedX - lastIrisX) * irisSpeed;
		lastIrisY += (irisClampedY - lastIrisY) * irisSpeed;

		// Setze die Irisposition, so dass sie immer innerhalb des Auges bleibt
		iris.setAttribute('cx', 25 + lastIrisX);
		iris.setAttribute('cy', 25 + lastIrisY);

		// Wenn der Cursor still ist, setze Iris in Richtung des Cursors
		if (!isMoving) {
			// Berechne die Richtung der Iris
			const idleDX = targetCursorX - (lastCursorX + 25);
			const idleDY = targetCursorY - (lastCursorY + 25);

			const idleDistance = Math.sqrt(idleDX * idleDX + idleDY * idleDY);
			const maxIdleDistance = 4; // Maximaler Versatz der Iris im Stillstand
			const idleClampedDistance = Math.min(idleDistance, maxIdleDistance);

			const idleClampedX = (idleDX / idleDistance) * idleClampedDistance;
			const idleClampedY = (idleDY / idleDistance) * idleClampedDistance;

			lastIrisX += (idleClampedX - lastIrisX) * irisSpeed;
			lastIrisY += (idleClampedY - lastIrisY) * irisSpeed;

			// Setze die Irisposition auch im Stillstand
			iris.setAttribute('cx', 25 + lastIrisX);
			iris.setAttribute('cy', 25 + lastIrisY);
		}

		isMoving = false;
		requestAnimationFrame(moveCursor);
	}

	// Starte die Animation
	moveCursor();
});
