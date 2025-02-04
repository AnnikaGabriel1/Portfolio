import Tile from '../elements/Tile';

export default function TileGrid({ items, className, tileClassName }) {
	return (
		<div className={className}>
			{items.map((item) => (
				<Tile
					key={item.id}
					img={item.img}
					imgAlt={item.imgAlt}
					title={item.title}
					url={item.url}
					tileClassName={tileClassName}
				/>
			))}
		</div>
	);
}
