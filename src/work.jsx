import React from 'react';
import ReactDOM from 'react-dom/client';
import UnorderedList from './components/Ul.jsx';
import Clients from './components/Clients.jsx';
import Landing from './components/Landing.jsx';
import landing from './landing.js';
import illustrations from './illustrations.js';
import Nav from './components/Nav.jsx';

import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import cta from './cta.js';
import workflow from './workflow.js';

const getIllustrationsByIds = (ids) =>
	illustrations.filter((item) => ids.includes(item.id));

ReactDOM.createRoot(document.getElementById('root-header-work')).render(
	<React.StrictMode>
		<Landing
			className={'landing-sub__content'}
			title={landing[1].title}
			subtitle={landing[1].subtitle}
			body={landing[1].body}
			img={getIllustrationsByIds([18, 19, 20, 21, 9, 5, 8, 3])}
			imgAlt={illustrations}
		/>
	</React.StrictMode>,
);

ReactDOM.createRoot(document.getElementById('root-nav')).render(
	<React.StrictMode>
		<Nav></Nav>
	</React.StrictMode>,
);

ReactDOM.createRoot(document.getElementById('root-main-work')).render(
	<React.StrictMode>
		<Projects />
		<UnorderedList
			items={workflow}
			title="Workflow"
			iconClassName="icon-button"
			headerClassName="section__intro"
			infoClassName="info"
			className="section"
			ctaData={cta[1]}
			sectionClassName="section__intro--green"
		/>

		<Clients />
	</React.StrictMode>,
);

ReactDOM.createRoot(document.getElementById('root-footer-work')).render(
	<React.StrictMode>
		<div id="contact-section">
			<Contact
				iconPath={cta[0]?.iconPath}
				altText={cta[0].altText}
				iconClassName="icon__cta"
				url={cta[0].url}
			/>
		</div>
	</React.StrictMode>,
);
