import { Button } from "../../ui/button"
import { useTranslation } from 'react-i18next';

export function IssuesCreateButton({ handleSubmit }) {
    const { t } = useTranslation();
    return (
        <Button onClick={() => handleSubmit()} className="transition transform duration-300 cursor-pointer shadow-sm" variant="outline">{(t('Create'))}</Button>
    )
}
