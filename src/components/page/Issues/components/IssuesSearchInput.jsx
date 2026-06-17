import { Field } from "../../../ui/field"
import { Input } from "../../../ui/input"


export default function IssuesSearchInput() {
    return (
        <Field className='flex w-120' orientation="horizontal">
            <Input type="search" placeholder="Search..." />
        </Field>
    )
}