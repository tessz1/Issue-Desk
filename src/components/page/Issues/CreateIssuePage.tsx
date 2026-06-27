import IssueEditor from "./IssuesCreateTipTap";
type Props = {
    onCreateIssue: () => void;
};

export default function CreateIssuePage({ onCreateIssue }: Props) {

    return (
        <div>
            <IssueEditor onCreateIssue={onCreateIssue} />
        </div>
    )
}