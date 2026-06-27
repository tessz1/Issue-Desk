
import { NavLink } from "react-router";
// @ts-ignore
import { Button } from "../../ui/button"
import { useTranslation } from 'react-i18next';

export default function IssuesBackButton() {
    const { t } = useTranslation();
    return (
        <NavLink to="/issues">
            <Button className="transition transform duration-300 cursor-pointer shadow-sm" variant="outline">{(t('Back'))}</Button>
        </NavLink>
    )
}


