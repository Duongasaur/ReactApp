import React from "react";

const SubHeader = ({page, pageLimit, changePageCallBack}) => {
	const displayNextPage = (page < pageLimit);
	const notFirstPage = page !== 0;

	return (
        <div className="sub-header">
			<a className="sub-header__link" onClick={() => changePageCallBack("backward")}>{notFirstPage ? "< Previous Page" : ""}</a>
			<span className="sub-header--title">Heroes page: {page + 1}</span>
			<a className="sub-header__link" onClick={() => changePageCallBack("forward")}>{displayNextPage ? "Next Page >" : ""}</a>
		</div>
	);
};

export default SubHeader;
