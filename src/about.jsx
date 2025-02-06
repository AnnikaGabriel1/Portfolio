import React from 'react';
import ReactDOM from 'react-dom/client';
import UnorderedList from './components/Ul.jsx';
import Landing from './components/Landing.jsx';
import landing from './landing.js';
import cta from './cta.js';
import Contact from './components/Contact.jsx';
import softwares from './softwares.js';
import Nav from './components/Nav.jsx';
import illustrations from './illustrations.js';
import Cv from './components/Cv.jsx';

import Interests from './components/Interests.jsx';

const getIllustrationsByIds = (ids) =>
	illustrations.filter((item) => ids.includes(item.id));

ReactDOM.createRoot(document.getElementById('root-header-about')).render(
	<React.StrictMode>
		<Landing
			className={'landing-sub__content'}
			title={landing[0].title}
			subtitle={landing[0].subtitle}
			body={landing[0].body}
			img={getIllustrationsByIds([6, 8, 9, 10, 13, 14, 15, 16, 17, 18])}
			imgAlt={illustrations}
		/>
	</React.StrictMode>,
);

ReactDOM.createRoot(document.getElementById('root-nav')).render(
	<React.StrictMode>
		<Nav></Nav>
	</React.StrictMode>,
);

ReactDOM.createRoot(document.getElementById('root-main-about')).render(
	<React.StrictMode>
		<UnorderedList
			items={softwares}
			title="Skills"
			headerClassName="section__intro"
			infoClassName="info"
			className="section"
			ctaData={cta[0]}
			style={{ marginTop: '0' }}
			sectionClassName="section__intro--green"
		/>

		<Cv />

		<Interests />
	</React.StrictMode>,
);

ReactDOM.createRoot(document.getElementById('root-footer-about')).render(
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
