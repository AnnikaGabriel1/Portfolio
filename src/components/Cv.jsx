import certifications from '../certifications';
import MediaGrid from './Mediagrid';

export default function CV() {
	return (
		<section className="section">
			<div className="intro__secondary">
				<h2>CV</h2>
				<h6>
					Every step of my career has shaped my skills and perspective. My CV
					reflects a journey of continuous learning, innovation and a passion
					for creating impactful solutions.
				</h6>
			</div>

			<MediaGrid
				items={certifications}
				cardClassName="card--centered"
				className="mediagrid__3-col"
				cardInfo="card__info card__stroke--red"
			/>
		</section>
	);
}
