import clients from '../clients.js';
import TileGrid from './Tilegrid';

export default function Clients() {
	return (
		<section className="section section__intro--beige">
			<div className="section__intro sticky section__intro--beige">
				<h2>Clients & Teams</h2>
			</div>
			<div className="section__content tilegrid">
				<TileGrid items={clients} className="tilegrid" tileClassName="tile" />
			</div>
		</section>
	);
}
