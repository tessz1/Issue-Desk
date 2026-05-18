import { Button } from "../../../ui/button"
import { useTranslation } from 'react-i18next';
import { Link } from "react-router";
export function NewIssues() {
    const { t } = useTranslation();
    return (
        <Link to='/create'>
            <Button variant="outline">{(t('New'))}</Button>
        </Link>
    )
}
