import React from "react";
import Navbar from "./components/navbar.components";
import Movies from "./components/movies.componnt";

const App = () => {
    return (
        <>
            <div>
                <Navbar />

                <Movies />
            </div>
        </>
    );
};

export default App;
