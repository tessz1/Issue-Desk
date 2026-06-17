import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { priorityStyle, statusStyle, statusTranslationKey } from '../constants';

const IssuesList = ({ issues }) => {
    const navigate = useNavigate()
    const { t } = useTranslation();
    const gridColumns = 'grid-cols-[minmax(180px,3fr)_minmax(220px,4fr)_120px_110px_96px_96px]'

    return (
        <div className='rounded-xl border overflow-hidden mt-4'>
            <div className="flex flex-col px-4 py-2 border-b-0 text-sm font-medium bg-zinc-100">
                <div className={`grid ${gridColumns} gap-4 font-bold cursor-pointer`}>
                    <div>{t('Issues')}</div>
                    <div>{t('Description')}</div>
                    <div className="text-center">{t('Status')}</div>
                    <div className="text-center">{t('Priority')}</div>
                    <div>{t('Created')}</div>
                    <div>{t('Updated')}</div>
                </div>
            </div>
            <div className='min-h-[240px]'>
                {issues.length === 0 ? (
                    <div className="flex min-h-[240px] items-center justify-center border-t text-sm text-zinc-500">
                        {t('NoIssuesFound')}
                    </div>
                ) : (
                    issues.map((item) => {
                        return (
                            <div key={item.id} className={`grid ${gridColumns} gap-4 px-4 py-3 border-t hover:bg-zinc-50 items-center`}>
                                <div onClick={() => navigate(`/issues/${item.id}`)} className='truncate text-zinc-800 font-medium hover:text-zinc-500 transition duration-300 cursor-pointer'>{item.title}</div>
                                <div className='min-w-0 line-clamp-1 h-[65px] text-sm leading-6 text-zinc-500'>{item.description}</div>
                                <div className={`flex w-full items-center justify-center rounded-full px-3 py-1 text-xs font-medium border ${statusStyle[item.status]}`}>{t(statusTranslationKey[item.status])}</div>
                                <div className={`flex w-full items-center justify-center rounded-full px-3 py-1 text-xs font-medium border ${priorityStyle[item.priority]}`}>{t(item.priority)}</div>
                                <div className='text-sm text-zinc-500'>{item.createdAt}</div>
                                <div className='text-sm text-zinc-500'>{item.updatedAt}</div>
                            </div>
                        )
                    })
                )}
            </div>
        </div >
    )
}
export default IssuesList
