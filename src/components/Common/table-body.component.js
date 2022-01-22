const TableBody = (props) => {
    const { items, columns } = props;
    console.log(columns);
    return (
        <tbody>
            {items.map((row, index) => {
                return (
                    <tr key={index}>
                        {columns.map((column) => {
                            return column.content(row, column.path);
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
};

export default TableBody;
