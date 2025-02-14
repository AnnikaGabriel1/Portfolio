import CallToAction from './Call-to-action.jsx';
import cta from '../cta.js';

export default function Benefits({ style }) {
	return (
		<section className="section section__intro--blue" style={style}>
			<div className="section__intro">
				<h2>Benefits</h2>
			</div>
			<div className="section__content">
				<div className="mediagrid__3-col">
					<div className="card--centered card__color--red">
						<div className="card__info">
							<h4>Multidisciplinary</h4>
							<p>
								I have diverse design experience, from fashion design and
								craftsmanship to digital interfaces. My training in UI design,
								UX strategy, web development, and communication design equips me
								to tackle complex challenges creatively and effectively.
							</p>
						</div>
					</div>
					<div className="card--centered card__color--red">
						<div className="card__info">
							<h4>Empathic</h4>
							<p>
								Empathy is one of my greatest strengths - whether in a team to
								create a positive working atmosphere or when dealing with
								customers and users to really understand their wishes and needs.
							</p>
						</div>
					</div>

					<div className="card--centered card__color--red">
						<div className="card__info">
							<h4>Solution-oriented</h4>
							<p>
								I approach tasks systematically and purposefully. Rather than
								taking unnecessary detours, I focus on efficient solutions that
								get the job done quickly and effectively - without compromising
								quality.
							</p>
						</div>
					</div>
					<CallToAction
						title={cta[3].title}
						altText={cta[3].altText}
						buttonLabel={cta[3].buttonLabel}
						iconPath={cta[3]?.iconPath}
						iconClassName="icon__cta"
						url={cta[3].url}
						ctaClassName=" cta__text--red"
						ctaWrapper="cta--right"
					/>
				</div>
			</div>
		</section>
	);
}
