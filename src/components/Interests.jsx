import interests from '../interests.js';
import TileGrid from './Tilegrid.jsx';

export default function Interests() {
	return (
		<section className="section section__intro--beige">
			<div className="section__intro section__intro--beige">
				<h2>Interests</h2>
			</div>
			<div className="section__content tilegrid">
				<TileGrid
					items={interests}
					className="client__tilegrid"
					tileClassName="client__tilegrid-tile"
				/>
			</div>
		</section>
	);
}
