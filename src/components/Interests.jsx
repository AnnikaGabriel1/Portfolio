import interests from '../interests.js';
import TileGrid from './Tilegrid.jsx';

export default function Interests() {
	return (
		<section className="clients">
			<div
				className="section__title--beige"
				style={{ marginBottom: 'var(--space-l)' }}
			>
				<h2>Interests</h2>
			</div>

			<TileGrid
				items={interests}
				className="client__tilegrid"
				tileClassName="client__tilegrid-tile"
			/>
		</section>
	);
}
