
import StateFilter from './StateFilter.jsx'
import IssuesList from './IssuesList.jsx'
import { useState } from 'react'
import { NewIssues } from './NewIssues.jsx'
import PaginationIssuesList from './PaginationIssuesList.jsx'
import { ITEMS_PER_PAGE, ISSUE_STATUSES } from '../constants.js'

export default function IssuesPage({ issues }) {
    const [statusFilter, setStatusFilter] = useState(ISSUE_STATUSES.ALL)
    const [currentPage, setCurrentPage] = useState(1)

    const onChangeStatus = (nextStatus) => {
        setStatusFilter(nextStatus)
        setCurrentPage(1)
    }

    const filteredIssues = statusFilter === ISSUE_STATUSES.ALL
        ? issues
        : issues.filter((issue) => issue.status === statusFilter)

    const totalPages = Math.max(1, Math.ceil(filteredIssues.length / ITEMS_PER_PAGE))
    const safeCurrentPage = Math.min(currentPage, totalPages)
    const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE
    const currentIssues = filteredIssues.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    return (
        <div>
            <div className='flex justify-between'>
                <StateFilter onChangeStatus={onChangeStatus} />
                <NewIssues />
            </div>
            <IssuesList issues={currentIssues} />
            <div className='mt-4 flex justify-start'>
                <PaginationIssuesList totalPages={totalPages} currentPage={safeCurrentPage} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    )
}
