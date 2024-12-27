import './App.css'
import Car from './components/car/Car'
import Food from './components/food/Food'
import Hero from './components/hero/Hero'
import Todo from './components/todo/Todo'

function App() {
  const handleClick = () => {
    alert("Hello")
  }

  return (
    <>
      {/* <Hero />
      {/* <Food /> */}
      <Car />
      {/* <Todo /> */}
    </>
  )
}

export default App


