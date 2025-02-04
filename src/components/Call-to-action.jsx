import Icon from '../elements/Icons';
export default function CallToAction({
	title,
	buttonLabel,
	iconPath,
	altText,
	url,
	iconClassName,
	style,
	ctaClassName,
	ctaWrapper,
}) {
	console.log('iconPath received in CallToAction:', iconPath);
	return (
		<div className={ctaWrapper} style={style}>
			<div className={ctaClassName}>
				<h4>{title}</h4>
				<a href={url}>
					<button>
						{buttonLabel}
						<Icon className={iconClassName} src={iconPath} alt={altText} />
					</button>
				</a>
			</div>
		</div>
	);
}
