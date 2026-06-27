import MassBarChart from './GraphDashBoard'
import IssuesLastActive from './components/IssuesLastActive'
export default function DashBoard({ issues }) {
    return (
        <div className='flex justify-between gap-24'>
            <MassBarChart issues={issues} />
            <IssuesLastActive issues={issues} />
        </div>
    )
}
