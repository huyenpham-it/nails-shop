'use client';

import ReactPaginate from 'react-paginate';

export default function Pagination({ page = 1, setPage, totalPages = 1 }) {
	const handlePageClick = (event) => {
		// react-paginate dùng index từ 0
		const selectedPage = event.selected + 1;
		setPage(selectedPage);
	};

	return (
		<div className="flex items-center jutify-center gap-4">
			<ReactPaginate
				className="text-sm flex items-center gap-1"
				pageLinkClassName="block h-9 px-4 py-2 cursor-pointer hover:bg-accent"
				previousLinkClassName="block h-9 border border-(--color-my-gray) rounded-md shadow-xs px-4 py-2 mr-4 cursor-pointer hover:bg-accent"
				nextLinkClassName="block h-9 border border-(--color-my-gray) rounded-md shadow-xs px-4 py-2 ml-4 cursor-pointer hover:bg-accent"
				disabledLinkClassName="pointer-events-none opacity-50"
				activeLinkClassName="border pointer-events-none"
				breakLabel="..."
				previousLabel="Previous"
				nextLabel="Next"
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				pageCount={totalPages}
				forcePage={page - 1}
				renderOnZeroPageCount={null}
			/>
		</div>
	);
}
