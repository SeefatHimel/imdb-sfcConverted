import React from "react";

const Navbar = () => {
    return (
        <>
            <div
                style={{
                    background: "black",
                    color: "white",
                    padding: "15px",
                    margin: "auto",
                }}
            >
                <h1
                    style={{
                        background: "yellow",
                        color: "black",
                        padding: "5px",
                        width: "fit-content",
                        borderRadius: "5px",
                        fontWeight: "bold",
                    }}
                >
                    IMDB
                </h1>
            </div>
        </>
    );
};

export default Navbar;
