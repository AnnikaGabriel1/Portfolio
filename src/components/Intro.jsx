export default function IntroSecondary({
	title,
	body,
	style,
	subtitle,
	className,
}) {
	return (
		<section className={className} style={style}>
			<div className="intro__border--red">
				<h3>{title}</h3>
			</div>
			<div className="intro__color--red">
				<h4>{subtitle}</h4>
				<p>{body}</p>
			</div>
		</section>
	);
}
