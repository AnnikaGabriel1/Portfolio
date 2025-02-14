import { useState } from 'react';
import projects from '../projects';
import Filter from '../elements/Filter';
import MediaGrid from './Mediagrid';

export default function Projects() {
	const [filteredProjects, setFilteredProjects] = useState(projects);
	return (
		<section className="section section__intro--blue">
			<div className="sticky">
				<h2>Projects</h2>
				<Filter
					filters={[
						'All Categories',
						'Webdesign',
						'Development',
						'Branding',
						'UX',
						'UI',
						'Illustration',
						'Graphic',
						'Typography/Lettering',
					]}
					items={projects}
					onFilterChange={(filteredItems) => setFilteredProjects(filteredItems)}
				/>
			</div>
			<div className="section__content">
				<MediaGrid
					items={filteredProjects}
					cardClassName="card--centered"
					className="mediagrid__2-col"
					cardInfo="card__info card__info--blue"
				/>
			</div>
		</section>
	);
}
