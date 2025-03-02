import TableUI from "./Table.ui";

const TableContainer = <T extends object>({
  columns,
  data,
  renderRow,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: T) => React.ReactNode;
  data: T[];
}) => {
  return <TableUI columns={columns} data={data} renderRow={renderRow} />;
};

export default TableContainer;
