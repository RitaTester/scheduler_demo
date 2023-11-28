import SchedulerList from "../components/SchedulerList"

const taskList = [
  { title: 'Meeting with Team', date: '2023-12-01T10:00:00' },
  { title: 'Lunch Break', date: '2023-12-01T12:30:00' },
  { title: 'Client Call', date: '2023-12-01T15:00:00' },
];

const IndexPage = () => (
  <div className="container mx-auto p-8">
    <SchedulerList tasks={taskList} />
  </div>
)

export default IndexPage
