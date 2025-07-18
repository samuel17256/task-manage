import AddTask from '../Components/AddTask'

const Home = ({ tasks}) => {
  return (
    <div>
      <AddTask  tasks={tasks}/>
    </div>
  )
}

export default Home
