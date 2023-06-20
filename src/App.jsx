
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {actions} from "./store"

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(actions.increment())
  }

  const decrement = () => {
    dispatch(actions.decrement())
  }

  const addBy = () => {
    dispatch(actions.addBy(10))
  }

  return (
    <div className='flex flex-col justify-center items-center mt-10 gap-2'>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <div className="flex space-x-2">
      <button onClick={increment} className='px-4 rounded bg-slate-400'>Inc</button>
      <button onClick={decrement} className='px-4 rounded bg-slate-400'>Dec</button>
      <button onClick={addBy} className='px-4 rounded bg-slate-400'>Add by 10</button>
      </div>
    </div>
  )
}

export default App
