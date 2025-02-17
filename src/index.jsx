import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './components/Landing.jsx';
import Nav from './components/Nav.jsx';
import IntroSecondary from './components/Intro.jsx';
import intro from './intro.js';
import ProjectTeaser from './components/Projects-teaser.jsx';
import cta from './cta.js';
import Benefits from './components/Benefits.jsx';
import Contact from './components/Contact.jsx';
import UnorderedList from './components/Ul.jsx';
import workfield from './workfield.js';
import landing from './landing.js';

ReactDOM.createRoot(document.getElementById('root-header-home')).render(
	<React.StrictMode>
		<Landing
			className={'landing'}
			title={landing[2].title}
			radius={8}
			radiusSpirale={10}
			sinus={0.6}
			cosinus={0.5}
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
