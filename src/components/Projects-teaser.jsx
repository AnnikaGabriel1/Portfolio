import MediaGrid from './Mediagrid';
import projects from '../projects.js';
import CallToAction from './Call-to-action.jsx';
import cta from '../cta.js';

export default function ProjectTeaser({ title }) {
	const selectedIds = [3, 1, 5];
	const selectedProjects = projects.filter((project) =>
		selectedIds.includes(project.id),
	);
	return (
		<section className="section section__intro--blue">
			<div className="section__intro">
				<h2>{title}</h2>
			</div>
			<div className="section__content">
				<MediaGrid
					items={selectedProjects}
					cardClassName="card--centered"
					className="mediagrid__3-col"
					cardInfo="card__info card__info--blue"
				/>
				<CallToAction
					title={cta[2].title}
					altText={cta[2].altText}
					buttonLabel={cta[2].buttonLabel}
					iconPath={cta[2]?.iconPath}
					iconClassName="icon__cta"
					url={cta[2].url}
					ctaClassName="cta__text--blue"
					ctaWrapper="cta--right"
				/>
			</div>
		</section>
	);
}
