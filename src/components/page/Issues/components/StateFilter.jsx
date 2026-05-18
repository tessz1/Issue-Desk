import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../../ui/select"
import { useTranslation } from "react-i18next";
import { ISSUE_STATUSES } from "../constants";

const StateFilter = ({ onChangeStatus }) => {
    const { t } = useTranslation();

    return (
        <Select defaultValue={ISSUE_STATUSES.ALL} onValueChange={onChangeStatus} >
            <SelectTrigger className="max-w-48 w-fit">
                <SelectValue placeholder={t('Selected')} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{t('Selected')}</SelectLabel>
                    <SelectItem value={ISSUE_STATUSES.ALL}>{t('All')}</SelectItem>
                    <SelectItem value={ISSUE_STATUSES.OPEN}>{t('Open')}</SelectItem>
                    <SelectItem value={ISSUE_STATUSES.IN_PROGRESS}>{t('In_Progress')}</SelectItem>
                    <SelectItem value={ISSUE_STATUSES.CLOSED}>{t('Closed')}</SelectItem>
                    <SelectItem value={ISSUE_STATUSES.IN_REVIEW}>{t('In_Review')}</SelectItem>
                    <SelectItem value={ISSUE_STATUSES.BACKLOG}>{t('Backlog')}</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default StateFilter
