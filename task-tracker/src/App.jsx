import TaskList from './components/TaskList.jsx';
import TaskForm from './components/TaskForm.jsx';
import Snackbar from './components/Snackbar.jsx';

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 rounded-lg shadow-md bg-white text-center">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Task Tracker</h1>
        </div>
        <div className="mb-4">
          <TaskForm />
          <TaskList />
        </div>
         <Snackbar />
      </div>
    </div>
  );
}

export default App;