const Filtering = (props) => {
    const { items, selectedGenre, onClickFilter } = props;
    return (
        <div className="col-lg-2">
            <ul className="list-group">
                {items.map((item, index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => onClickFilter(item)}
                            className={
                                selectedGenre === item
                                    ? "list-group-item active"
                                    : "list-group-item"
                            }
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Filtering;
