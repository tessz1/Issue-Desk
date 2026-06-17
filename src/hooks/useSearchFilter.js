import { useState } from "react"

export default function useSearchFilter({ issues }) {
    const [searchInput, setSearchInput] = useState('')
    const issuesDescriptionOrTitle = issues.filter((data) => {
        const descriptionTitle = data.description + "" + data.title
        if (descriptionTitle.toLowerCase().includes(searchInput.toLowerCase())) {
            return true
        }
    })
    return issuesDescriptionOrTitle
}