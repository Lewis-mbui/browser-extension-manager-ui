import filters from "../data/filters";

interface Props {
  onSetFilter: (filter: string) => void;
  currentFilter: string;
}

const FilterList = ({ onSetFilter, currentFilter }: Props) => {
  return (
    <ul className="filters-list">
      {filters.map((filter) => (
        <li key={filter.value}>
          <button
            onClick={() => onSetFilter(filter.value)}
            className={`btn btn--primary btn--filter ${currentFilter === filter.value ? "active" : ""}`}
          >
            {filter.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
