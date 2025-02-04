import Icon from '../elements/Icons';

export default function ListItem({
	img,
	youtubeId,
	title,
	logo,
	icon,

	alt,
	subtitles,
	srcLang,
	url,
	iconPath,
	altText,
	iconClassName,
	target,
	description,
	logoUrl,
	infoClassName,
}) {
	return (
		<li>
			{/* Medieninhalte (Bild oder YouTube-Video) */}
			{(youtubeId || img) && (
				<div className="big-list__media">
					{/* Wenn youtubeId vorhanden ist, logge es */}
					{youtubeId && (
						<>
							{console.log('Rendering YouTube video with ID:', youtubeId)}
							<iframe
								title={title}
								src={`https://www.youtube.com/embed/${youtubeId}`}
								allowFullScreen
							>
								<track
									src={subtitles}
									kind="captions"
									srcLang={srcLang}
									label="English"
								/>
							</iframe>
						</>
					)}
					{/* Wenn img vorhanden ist, logge es */}
					{img && (
						<>
							{console.log('Rendering image with src:', img)}
							<img src={img} alt={title} />
						</>
					)}
				</div>
			)}
			<div className={infoClassName}>
				{/* Icon und Titel */}
				<div className="big-list__title">
					{icon && (
						<>
							<img src={icon} alt={alt} className="big-list__leading-icon" />
						</>
					)}
					{url ? (
						<a href={url} target={target}>
							<h4 className="icon-button">
								{title}
								<Icon className={iconClassName} src={iconPath} alt={altText} />
							</h4>
						</a>
					) : (
						<div className="big-list__text">
							<h4>{title}</h4>
							<p>{description}</p>
						</div>
					)}
				</div>
				{/* Logo (falls vorhanden) */}

				{logo && logoUrl ? (
					<a href={logoUrl} target="_blank">
						<img src={logo} alt={alt || title} className="client-logo" />
					</a>
				) : (
					logo && <img src={logo} alt={alt || title} className="client-logo" />
				)}
			</div>
		</li>
	);
}
