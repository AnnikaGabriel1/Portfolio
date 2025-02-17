import SpiralApp from './Spiral-UI.jsx';

export default function LandingSub({ title, subtitle, body, className }) {
	return (
		<div className="landing">
			<SpiralApp />
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
