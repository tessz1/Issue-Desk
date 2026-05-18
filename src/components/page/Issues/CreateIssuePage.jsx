import IssueEditor from "./IssuesCreateTipTap";

export default function CreateIssuePage({ onCreateIssue }) {

    return (
        <div>
            <IssueEditor onCreateIssue={onCreateIssue} />
        </div>
    )
}