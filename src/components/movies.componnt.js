import React, { Component, useEffect, useState } from "react";
import Table from "./Common/table.component";
import Rating from "./rating.component";
import getMovies from "../service/get-movies.service";
import getGenres from "../service/get-genres.sevice";
import Pagination from "./Common/pagination.component";
import Filtering from "./Common/filtering.component";
import _ from "lodash";

const Movies = () => {
    const moviesList = getMovies();
    const genresList = ["All Genres", ...getGenres()];

    const [movies, setMovies] = useState(moviesList);
    const [genres, setGenres] = useState(genresList);
    const [activePage, setActivePage] = useState(1);
    const [pageCount, setPageCount] = useState(5);
    const [selectedGenre, setSelectedGenre] = useState("All Genres");
    const [sortColumn, setSortColumn] = useState({ path: "id", order: "asc" });

    const handleIsRated = (movieRank) => {
        const movie = movies.find((movie) => movie.id === movieRank);
        movie.yourRating = !movie.yourRating;
        setMovies(movies);
    };

    const handleSort = (sortColumn) => {
        setSortColumn(sortColumn);
    };

    const sortMovies = (movies) => {
        const sortedMovies = _.orderBy(
            movies,
            [sortColumn.path],
            [sortColumn.order]
        );
        return sortedMovies;
    };

    const handlePage = (activePage) => {
        setActivePage(activePage);
    };

    const handleClickFilter = (selectedGenre) => {
        setSelectedGenre(selectedGenre);
        setActivePage(1);
    };

    const paginateMovies = (movies) => {
        const start = (activePage - 1) * pageCount;
        const paginatedMovies = movies.slice(start, start + pageCount);
        return paginatedMovies;
    };

    const filterMovies = () => {
        const filteredMovies = movies.filter((movie) => {
            if (selectedGenre === "All Genres") return true;
            if (movie.genres.includes(selectedGenre)) return true;
            return false;
        });
        return filteredMovies;
    };
    const filteredMovies = filterMovies();
    const paginatedMovies = paginateMovies(filteredMovies);
    const moviesN = sortMovies(paginatedMovies);
    const columns = [
        {
            label: "Rank",
            path: "id",
            sorting: true,
            content: (movie, key) => <td key={key}>{movie[key]}</td>,
        },
        {
            label: "Titles",
            path: "title",
            sorting: true,
            content: (movie, key) => <td key={key}>{movie[key]}</td>,
        },
        {
            label: "Poster",
            path: "posterUrl",
            content: (movie, key) => (
                <td key={key}>
                    <img
                        src={movie[key]}
                        style={{ height: "100px", width: "auto" }}
                        alt="No image"
                    />
                </td>
            ),
        },
        {
            label: "Your Rating",
            path: "yourRating",
            content: (movie, key) => (
                <td key={key}>
                    <Rating
                        isRated={movie[key]}
                        handleIsRated={handleIsRated}
                        rank={movie.id}
                    />
                </td>
            ),
        },
        {
            label: "Action",
            path: "action",
            content: (movie, key) => <td key={key}>{movie[key]}</td>,
        },
    ];

    return (
        <>
            <div className="container">
                <div className="row">
                    <Filtering
                        items={genres}
                        selectedGenre={selectedGenre}
                        onClickFilter={handleClickFilter}
                    />
                    <div className="col-lg-8">
                        <div>
                            <Table
                                items={moviesN}
                                columns={columns}
                                sortColumn={sortColumn}
                                onSort={handleSort}
                            />
                            <Pagination
                                totalItems={filteredMovies.length}
                                pageCount={pageCount}
                                activePage={activePage}
                                onClickPage={handlePage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Movies;
