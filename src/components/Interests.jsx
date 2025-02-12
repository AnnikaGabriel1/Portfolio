import interests from '../interests.js';
import TileGrid from './Tilegrid.jsx';

export default function Interests() {
	return (
		<section className="section clients">
			<div className="section__intro section__intro--beige">
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
