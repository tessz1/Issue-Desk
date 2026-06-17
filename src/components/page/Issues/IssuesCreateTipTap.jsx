import { useEditor, EditorContent } from "@tiptap/react"
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { IssuesCreateButton } from "../Issues/IssuesCreateButton";
import StarterKit from "@tiptap/starter-kit"
import TitleField from "./IssuesCreateTitle";
import { toast } from "sonner";
import IssuesBackButton from './IssuesBackButton'
import { useNavigate } from "react-router";
import { ISSUE_PRIORITIES, ISSUE_STATUSES } from "./constants";
import { v4 as uuidv4 } from "uuid";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../ui/select";
import {
    Field,
    FieldDescription,
    FieldLabel,
} from "../../ui/field";

export default function IssueEditor({ onCreateIssue }) {
    const navigate = useNavigate()
    const { t } = useTranslation();
    const editor = useEditor({
        extensions: [StarterKit],
        content: '',
    })
    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState(ISSUE_PRIORITIES.MEDIUM)
    const handleSubmit = () => {
        const today = new Date().toISOString().slice(0, 10)
        const data = {
            id: uuidv4(),
            status: ISSUE_STATUSES.OPEN,
            priority,
            title,
            description: editor?.getText() || "",
            createdAt: today,
            updatedAt: today
        }
        if (!data.title.trim() ||
            !data.description.trim()) {
            toast.error(t('ErrorCreate'))
            return
        } else {
            onCreateIssue(data)
            toast.success(t('CreatedTask'))
            navigate('/issues')
        }
    }
    const handleInput = (event) => {
        setTitle(event)
    }
    return (
        <div>
            <div className="mb-3">
                <TitleField handleInput={handleInput} />
            </div>
            <div className="mb-3 max-w-xs">
                <Field>
                    <FieldLabel>{t('Priority')}</FieldLabel>
                    <Select value={priority} onValueChange={setPriority}>
                        <SelectTrigger className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>{t('Priority')}</SelectLabel>
                                <SelectItem value={ISSUE_PRIORITIES.LOW}>{t('LOW')}</SelectItem>
                                <SelectItem value={ISSUE_PRIORITIES.MEDIUM}>{t('MEDIUM')}</SelectItem>
                                <SelectItem value={ISSUE_PRIORITIES.HIGH}>{t('HIGH')}</SelectItem>
                                <SelectItem value={ISSUE_PRIORITIES.URGENT}>{t('URGENT')}</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <FieldDescription>
                        {t('PriorityDescription')}
                    </FieldDescription>
                </Field>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white shadow-sm">
                <EditorContent
                    editor={editor}
                    className="
                min-h-[250px]
                px-4
                py-3
                text-sm
                leading-6
                text-zinc-700
                outline-none
                [&_.ProseMirror]:min-h-[250px]
                [&_.ProseMirror]:outline-none
                "
                />
            </div>
            <div className="flex justify-between mt-2">
                <IssuesBackButton />
                <IssuesCreateButton handleSubmit={handleSubmit} />

            </div>
        </div>
    )
}

