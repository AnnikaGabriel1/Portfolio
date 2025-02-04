import ListItem from '../elements/li.jsx';
import CallToAction from './Call-to-action.jsx';

export default function UnorderedList({
	items,
	title,
	style,
	iconClassName,
	infoClassName,
	className,
	ctaData,
	sectionClassName,
}) {
	return (
		<section className={className} style={style}>
			<div className={sectionClassName}>
				<div className="section__intro">
					<h2>{title}</h2>
				</div>
				<div className="big-list">
					<ul>
						{items.map((item) => (
							<ListItem
								key={item.id}
								{...item}
								className={iconClassName}
								infoClassName={infoClassName}
							/>
						))}
						<CallToAction
							title={ctaData.title}
							altText={ctaData.altText}
							buttonLabel={ctaData.buttonLabel}
							iconPath={ctaData.iconPath}
							iconClassName="icon__cta"
							url={ctaData.url}
							ctaClassName="cta__text--green"
							ctaWrapper="cta--right"
						/>
					</ul>
				</div>
			</div>
		</section>
	);
}
