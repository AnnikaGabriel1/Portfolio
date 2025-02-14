import certifications from '../certifications';
import MediaGrid from './Mediagrid';

export default function CV() {
	return (
		<section className="section section__intro--red">
			<div className="sticky">
				<h2>CV</h2>
			</div>
			<div className="section__content">
				<MediaGrid
					items={certifications}
					cardClassName="card--centered"
					className="mediagrid__3-col"
					cardInfo="card__info card__stroke--red"
				/>
			</div>
		</section>
	);
}
