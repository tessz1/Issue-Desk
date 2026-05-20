import { Header } from "./components/Header";
import IssuesPage from "./components/page/Issues/components/IssuesPage.jsx";
import DashBoard from "./components/page/DashBoard/DashBoard.jsx";
import CreateIssuePage from './components/page/Issues/CreateIssuePage.jsx'
import { Route, Routes } from "react-router";
import useIssues from "./hooks/useIssues";
import { Toaster } from "sonner";
import IssueDetailsPage from './components/page/Issues/components/IssueDetailsPage'

function App() {
  const { issues, onCreateIssue, onUpdateIssueStatus } = useIssues()


  return (
    <div className="min-h-screen bg-zinc-50">
      <Toaster />
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-6">
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/issues" element={<IssuesPage issues={issues} />} />
          <Route path="/create" element={<CreateIssuePage onCreateIssue={onCreateIssue} />} />
          <Route path="/issues/:id" element={<IssueDetailsPage issues={issues} onUpdateIssueStatus={onUpdateIssueStatus} />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
