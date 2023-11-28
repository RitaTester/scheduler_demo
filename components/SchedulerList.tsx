import { format } from 'date-fns';

const SchedulerList = ({ tasks }) => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-8 text-center text-cyan-500">Daily Schedule</h1>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="bg-white rounded-lg p-6 mb-6 shadow-md">
                        <p className="text-xl font-bold mb-2">{task.title}</p>
                        <p className="text-gray-500">
                            {format(new Date(task.date), 'MMMM dd, yyyy')}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SchedulerList;