import { useState } from "react"
import { useTranslation } from 'react-i18next';


const IssuesLastActive = ({ issues }) => {
    const { t } = useTranslation();
    console.log(issues)
    return (
        <div>
            <section className="rounded-xl border bg-white p-6 shadow-sm min-w-2xs">
                <h1>{t('ACTIVITY')}</h1>
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                        {issues.map((issue) => (
                            <div key={issue.id}>
                                <h1 className="text-xl font-bold text-zinc-900">
                                    {issue.title}
                                </h1>
                                <p className="mt-2 text-sm text-zinc-500">
                                    {t('DATE')} {issue.updatedAt}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}


export default IssuesLastActive