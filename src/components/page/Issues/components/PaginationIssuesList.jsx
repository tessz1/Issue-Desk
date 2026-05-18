import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "../../../ui/pagination";
export default function PaginationIssuesList({ totalPages, currentPage, setCurrentPage }) {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage((p) => Math.max(p - 1, 1));
                        }}
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink isActive>
                        {currentPage}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage((p) => Math.min(p + 1, totalPages));
                        }}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}