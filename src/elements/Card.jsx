import Icon from './Icons';

export default function Card({
	label,
	description,
	url,
	title,
	target,
	iconClassName,
	iconPath,
	iconAlt,
	img,
	imgAlt,
	cardClassName,
	timePeriod,
	cardInfo,
}) {
	return (
		<div className={cardClassName}>
			{img && <img src={img} alt={imgAlt} />}
			<div className={cardInfo}>
				{url ? (
					<a href={url} target={target}>
						<h4 className="icon-button">
							{title}
							<Icon className={iconClassName} src={iconPath} alt={iconAlt} />
						</h4>
					</a>
				) : (
					<h4>{title}</h4>
				)}
				<h6>{label}</h6>
				<h6>{timePeriod}</h6>
				<p>{description}</p>
			</div>
		</div>
	);
}
