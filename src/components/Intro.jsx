export default function IntroSecondary({ title, body, style, subtitle }) {
	return (
		<section className="section section__intro--red" style={style}>
			<div className="intro">
				<div className="intro__border--red">
					<h3>{title}</h3>
				</div>
				<div className="intro__color--red">
					<h4>{subtitle}</h4>
					<p>{body}</p>
				</div>
			</div>
		</section>
	);
}
