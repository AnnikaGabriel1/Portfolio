import Card from '../elements/Card';

export default function MediaGrid({
	items,
	cardClassName,
	className,
	cardInfo,
}) {
	return (
		<div className={className}>
			{items.map((item) => (
				<Card
					key={item.id}
					{...item}
					cardClassName={cardClassName}
					cardInfo={cardInfo}
				/>
			))}
		</div>
	);
}
