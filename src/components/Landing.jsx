import SpiralApp from './Spiral-UI.jsx';

export default function Landing({
	title,
	subtitle,
	body,
	className,
	radius,
	radiusSpirale,
	sinus,
	cosinus,
}) {
	return (
		<div className="landing">
			<SpiralApp
				initialRadius={radius}
				initialRadiusSpirale={radiusSpirale}
				initialSinus={sinus}
				initialCosinus={cosinus}
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
