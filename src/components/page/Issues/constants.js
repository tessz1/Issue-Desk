export const ITEMS_PER_PAGE = 6

export const ISSUE_STATUSES = {
    ALL: 'all',
    OPEN: 'OPEN',
    IN_PROGRESS: 'IN_PROGRESS',
    CLOSED: 'CLOSED',
    IN_REVIEW: 'IN_REVIEW',
    BACKLOG: 'BACKLOG',
}

export const statusTranslationKey = {
    OPEN: 'Open',
    IN_PROGRESS: 'In_Progress',
    CLOSED: 'Closed',
    IN_REVIEW: 'In_Review',
    BACKLOG: 'Backlog',
}

export const ISSUE_PRIORITIES = {
    LOW: 'LOW',
    MEDIUM: 'MEDIUM',
    HIGH: 'HIGH',
    URGENT: 'URGENT',
}

export const statusStyle = {
    OPEN: 'bg-green-100 text-green-700 border-green-200',
    CLOSED: 'bg-zinc-100 text-zinc-600 border-zinc-200',
    IN_REVIEW: 'bg-blue-100 text-blue-700 border-blue-200',
    IN_PROGRESS: 'bg-amber-100 text-amber-700 border-amber-200',
    BACKLOG: 'bg-slate-100 text-slate-600 border-slate-200',
}

export const priorityStyle = {
    LOW: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    MEDIUM: 'bg-sky-100 text-sky-700 border-sky-200',
    HIGH: 'bg-orange-100 text-orange-700 border-orange-200',
    URGENT: 'bg-red-100 text-red-700 border-red-200',
}
