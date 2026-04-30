import filters from "../data/filters";

const FilterList = () => {
  return (
    <ul className="filters-list">
      {filters.map((filter) => (
        <li key={filter.value}>
          <button className="btn btn--primary btn--filter">
            {filter.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
