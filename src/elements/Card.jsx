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
				<div>
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
					<h5>{label}</h5>
					<h5>{timePeriod}</h5>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}
