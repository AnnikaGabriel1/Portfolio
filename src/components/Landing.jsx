import TileGrid from './Tilegrid';

export default function LandingSub({ title, subtitle, body, img, className }) {
	return (
		<div className="landing">
			<TileGrid
				items={img}
				className="landing__tilegrid"
				tileClassName="tile"
			/>
			<div className={className}>
				<h1>{title}</h1>
				<div className="landing-sub__text">
					<h4>{subtitle}</h4>
					<p>{body}</p>
				</div>
			</div>
		</div>
	);
}
