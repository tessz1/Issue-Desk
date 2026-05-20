import { useState, useEffect } from "react"

export default function useIssues() {
    const [issues, setIssues] = useState(() => {
        const savedIssues = localStorage.getItem('issues')
        if (savedIssues) {
            try {
                return JSON.parse(savedIssues)
            } catch (e) {
                console.error('parse localstorage')
            }
        }
        return []
    })

    useEffect(() => {
        localStorage.setItem('issues', JSON.stringify(issues))
    }, [issues])

    const onCreateIssue = (issueData) => {
        setIssues((prev) => [...prev, issueData])
    }

    const onUpdateIssueStatus = (issueId, nextStatus) => {
        const today = new Date().toISOString().slice(0, 10)

        setIssues((prev) => prev.map((issue) => {
            if (String(issue.id) !== String(issueId)) {
                return issue
            }
            return {
                ...issue,
                status: nextStatus,
                updatedAt: today,
            }
        }))
    }
    return { issues, onCreateIssue, onUpdateIssueStatus }
}
