import clients from '../clients.js';
import TileGrid from './Tilegrid';

export default function Clients() {
	return (
		<section className="clients">
			<div
				className="section__title--beige"
				style={{ marginBottom: 'var(--space-l)' }}
			>
				<h2>Clients & Teams</h2>
			</div>

			<TileGrid
				items={clients}
				className="client__tilegrid"
				tileClassName="client__tilegrid-tile"
			/>
		</section>
	);
}
