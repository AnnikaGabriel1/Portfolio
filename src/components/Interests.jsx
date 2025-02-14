import interests from '../interests.js';
import TileGrid from './Tilegrid.jsx';

export default function Interests() {
	return (
		<section className="section section__intro--beige">
			<div className="section__intro sticky section__intro--beige">
				<h2>Interests</h2>
			</div>
			<div className="section__content tilegrid">
				<TileGrid items={interests} className="tilegrid" tileClassName="tile" />
			</div>
		</section>
	);
}
