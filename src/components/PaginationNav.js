import React from 'react';
const PaginationNav = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <nav className="d-flex flex-column align-items-center">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)} className="page-link bg-color2 text-color4 shadow-none">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default PaginationNav;