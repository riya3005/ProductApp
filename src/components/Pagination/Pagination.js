import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './Pagination.css';

export const Pagination = ({ totalPages }) => {
    const [pages, setPages] = React.useState([]);
    const currentPage = useSelector(state => state.currentPage);
    const dispatch = useDispatch();

    React.useEffect(() => {
        const pages = [];
        let i = 0;
        const currPage = currentPage - 5;
        let pageNumber = 0;
        while (i < 10 && pageNumber < totalPages) {
            pageNumber = currPage + ++i;
            pageNumber > 0 && pages.push(pageNumber);
        }
        setPages(pages);
    }, [currentPage, totalPages]);

    const history = useHistory();
    const updateCurrentPage = pageNumber => {
        dispatch({ type: 'UPDATE_CURRENT_PAGE', pageNumber });
        const existingSearchParam = new URLSearchParams(history.location.search).get("q") || "";
        history.push({
            pathname: "/",
            search: `?q=${existingSearchParam}&_page=${pageNumber}`
        });
    };

    const prevButtons = currentPage > 1 ? <button onClick={() => updateCurrentPage(currentPage - 1)}> Prev </button> : null;
    const nextButtons = currentPage < totalPages ? <button onClick={() => updateCurrentPage(currentPage + 1)}> Next </button> : null;

    return <div className="pagination">
        <div className="page_info">Page {currentPage} of {totalPages}</div>
        <div className="nav_buttons">
            {prevButtons}
            {pages.map(pageNumber => {
                const classes = "pageNumber " + (currentPage === pageNumber ? "selectedPageNumber" : "");
                return <span className={classes} onClick={() => updateCurrentPage(pageNumber)} key={pageNumber}>{pageNumber}</span>
            })}
            {nextButtons}
        </div>
    </div>
}