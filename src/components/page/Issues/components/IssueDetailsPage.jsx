import { useTranslation } from "react-i18next"
import { useParams } from "react-router"
import { ISSUE_STATUSES, priorityStyle, statusStyle, statusTranslationKey } from "../constants"
import IssuesBackButton from "../IssuesBackButton"
import { NewIssues } from "./NewIssues"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../ui/select"

export default function IssueDetailsPage({ issues, onUpdateIssueStatus }) {
    const { id } = useParams()
    const { t } = useTranslation()
    const issue = issues.find((item) => String(item.id) === id)
    const statusOptions = [
        { value: ISSUE_STATUSES.OPEN, label: t('Open') },
        { value: ISSUE_STATUSES.IN_PROGRESS, label: t('In_Progress') },
        { value: ISSUE_STATUSES.IN_REVIEW, label: t('In_Review') },
        { value: ISSUE_STATUSES.CLOSED, label: t('Closed') },
        { value: ISSUE_STATUSES.BACKLOG, label: t('Backlog') },
    ]

    if (!issue) {
        return (
            <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 rounded-xl border bg-white">
                <h1 className="text-lg font-semibold text-zinc-900">
                    {t('IssueNotFound')}
                </h1>
                <IssuesBackButton />
            </div>
        )
    }

    const { title, description, status, priority, createdAt, updatedAt } = issue

    return (
        <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex items-center justify-between gap-3">
                <IssuesBackButton />
                <NewIssues />
            </div>

            <section className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                        <h1 className="text-2xl font-bold text-zinc-900">
                            {title}
                        </h1>
                        <p className="mt-2 text-sm text-zinc-500">
                            #{id}
                        </p>
                    </div>

                    <Select value={status} onValueChange={(nextStatus) => onUpdateIssueStatus(issue.id, nextStatus)}>
                        <SelectTrigger className={`w-[150px] rounded-full border px-3 py-1 text-xs font-medium shadow-none ${statusStyle[status]}`}>
                            <SelectValue>
                                {t(statusTranslationKey[status])}
                            </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {statusOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="mb-6 grid grid-cols-1 gap-4 border-y py-4 text-sm sm:grid-cols-2">
                    <div>
                        <div className="text-zinc-500">{t('Created')}</div>
                        <div className="mt-1 font-medium text-zinc-900">{createdAt}</div>
                    </div>

                    <div>
                        <div className="text-zinc-500">{t('Updated')}</div>
                        <div className="mt-1 font-medium text-zinc-900">{updatedAt}</div>
                    </div>

                    {priority && (
                        <div>
                            <div className="text-zinc-500">{t('Priority')}</div>
                            <div className="mt-2">
                                <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${priorityStyle[priority]}`}>
                                    {t(priority)}
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                <div>
                    <h2 className="mb-2 text-sm font-semibold text-zinc-900">
                        {t('Description')}
                    </h2>
                    <p className="whitespace-pre-wrap text-sm leading-6 text-zinc-700">
                        {description}
                    </p>
                </div>
            </section>
        </div>
    )
}
