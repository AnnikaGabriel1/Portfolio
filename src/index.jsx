import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './components/Landing.jsx';
import landing from './landing.js';
import Nav from './components/Nav.jsx';
import illustrations from './illustrations.js';
import IntroSecondary from './components/Intro.jsx';
import intro from './intro.js';
import ProjectTeaser from './components/Projects-teaser.jsx';

import cta from './cta.js';
import Benefits from './components/Benefits.jsx';
import Contact from './components/Contact.jsx';
import UnorderedList from './components/Ul.jsx';
import workfield from './workfield.js';

const getIllustrationsByIds = (ids) =>
	illustrations.filter((item) => ids.includes(item.id));

ReactDOM.createRoot(document.getElementById('root-header-home')).render(
	<React.StrictMode>
		<Landing
			className={'landing-main__content'}
			title={landing[2].title}
			img={getIllustrationsByIds([
				1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
				21,
			])}
			imgAlt={illustrations}
		/>
	</React.StrictMode>,
);

ReactDOM.createRoot(document.getElementById('root-nav')).render(
	<React.StrictMode>
		<Nav></Nav>
	</React.StrictMode>,
);

ReactDOM.createRoot(document.getElementById('root-main-home')).render(
	<React.StrictMode>
		<IntroSecondary
			title={intro[0].title}
			subtitle={intro[0].subtitle}
			body={intro[0].body}
			className="intro__primary"
		/>
		<UnorderedList
			items={workfield}
			title="Expertise"
			iconClassName="icon-button"
			infoClassName="info"
			headerClassName="section__intro"
			className="section__sticky--left"
			ctaData={cta[3]}
			sectionClassName="section__intro--green"
		/>

		<ProjectTeaser title="Work" />

		<Benefits />
	</React.StrictMode>,
);

ReactDOM.createRoot(document.getElementById('root-footer-home')).render(
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
