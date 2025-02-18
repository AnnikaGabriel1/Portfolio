export default function TimeLine({ items }) {
	return (
		<section className="section">
			<div className="timeline">
				{items.map((item) => (
					<div key={item.id} className="timeline__milestone">
						<div className="timeline__time-period">
							<h4>{item.timePeriod}</h4>
						</div>
						<div className="timeline__position">
							<div className="timeline__info">
								<h4>{item.title}</h4>
								<h6>{item.label}</h6>
							</div>
							<div className="timeline__description">
								<p>{item.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
