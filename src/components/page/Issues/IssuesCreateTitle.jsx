import {
    Field,
    FieldDescription,
    FieldLabel,
} from "../../ui/field"
import { Input } from "../../ui/input"
import { useTranslation } from 'react-i18next';

export default function IssuesCreateTitle({ handleInput }) {
    const { t } = useTranslation();
    return (
        <Field>
            <FieldLabel>{t('Title')}</FieldLabel>
            <Input
                onChange={(event) => handleInput(event.target.value)}
                type="text"
                placeholder={t('EnterTitle')}
            />
            <FieldDescription>
                {t('DescriptionTitle')}
            </FieldDescription>
        </Field>
    )
}
