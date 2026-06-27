import {
    Field,
    FieldDescription,
    FieldLabel,
} from "../../ui/field"
import { Input } from "../../ui/input"
import { useTranslation } from 'react-i18next';
type Props = {
    handleInput: (value: string) => void;
};
export default function IssuesCreateTitle({ handleInput }: Props) {
    const { t } = useTranslation();
    return (
        <Field>
            <FieldLabel>{t('Title')}</FieldLabel>
            <Input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInput(event.target.value)}
                type="text"
                placeholder={t('EnterTitle')}
            />
            <FieldDescription>
                {t('DescriptionTitle')}
            </FieldDescription>
        </Field>
    )
}
