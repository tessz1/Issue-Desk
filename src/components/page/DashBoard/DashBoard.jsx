import MassBarChart from './GraphDashBoard'
import IssuesLastActive from './components/IssuesLastActive'
export default function DashBoard() {
    return (
        <div className='flex justify-between gap-24'>
            <MassBarChart />
            <IssuesLastActive />
        </div>
    )
}