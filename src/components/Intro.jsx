export default function IntroSecondary({ title, body, style, className }) {
	return (
		<section className={className} style={style}>
			<div className="intro__border--red">
				<h3>{title}</h3>
			</div>
			<div className="intro__color--red">
				<h6>{body}</h6>
			</div>
		</section>
	);
}
