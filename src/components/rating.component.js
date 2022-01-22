import React, { useState } from "react";

const Rating = (props) => {
    const { isRated, rank, handleIsRated } = props;

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleOnClick = () => {
        //handleIsRated();
    };

    const handleHover = () => {
        setIsHovered(true);
        console.log(rank);
    };
    const handleOut = () => {
        setIsHovered(false);
        console.log("out!! ");
    };

    const getClassName = () => {
        let className = isRated ? "bi bi-star-fill" : "bi bi-star";
        className += isHovered ? " text-primary " : "";
        return className;
    };

    return (
        <>
            <i
                onClick={() => handleIsRated(rank)}
                onMouseOver={handleHover}
                onMouseOut={handleOut}
                className={getClassName()}
            ></i>
        </>
    );
};

export default Rating;
