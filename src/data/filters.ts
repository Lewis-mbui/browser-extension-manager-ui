interface Filter {
  value: string;
  label: string;
}

const filters: Filter[] = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "active",
    label: "Active",
  },
  {
    value: "inactive",
    label: "Inactive",
  },
];

export default filters;
