import { useState } from 'react';

export default function Filter({ filters, items, onFilterChange, children }) {
	const [activeFilter, setActiveFilter] = useState('All Categories');

	const handleFilterClick = (filter) => {
		setActiveFilter(filter);
		const filteredItems =
			filter === 'All Categories'
				? items
				: items.filter(
						(item) =>
							Array.isArray(item.category)
								? item.category.includes(filter) // Falls mehrere Kategorien
								: item.category === filter, // Falls nur eine Kategorie
					);

		// Callback, um die gefilterten Items zurückzugeben
		onFilterChange(filteredItems);
	};

	return (
		<div>
			<div className="filter__container">
				{filters.map((filter) => (
					<button
						key={filter}
						data-filter={filter}
						onClick={() => handleFilterClick(filter)}
						className={`filter__buttons--inactive ${activeFilter === filter ? 'filter__buttons--active' : ''}`}
						aria-label={`Filter by ${filter}`}
					>
						{filter.charAt(0).toUpperCase() + filter.slice(1)}
					</button>
				))}
			</div>
			{children}
		</div>
	);
}
