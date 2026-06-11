import './App.css'
import DessertsList from './lab-11-basic-list-component/DessertsList'

const desserts = [
  {
    name: 'Chocolate Cake',
    calories: 400,
    createdAt: '2022-09-01',
  },
  {
    name: 'Ice Cream',
    calories: 200,
    createdAt: '2022-01-02',
  },
  {
    name: 'Tiramisu',
    calories: 300,
    createdAt: '2021-10-03',
  },
  {
    name: 'Cheesecake',
    calories: 600,
    createdAt: '2022-01-04',
  },
]

function App() {
  return (
    <main>
      <h1>Little Lemon Desserts</h1>
      <DessertsList data={desserts} />
    </main>
  )
}

export default App