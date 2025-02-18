import certifications from '../certifications';
import TimeLine from './Timeline.jsx';

export default function CV() {
	return (
		<section className="section section__intro--red">
			<div className="sticky">
				<h2>CV</h2>
			</div>
			<div className="section__content">
				<TimeLine items={certifications} />
			</div>
		</section>
	);
}
