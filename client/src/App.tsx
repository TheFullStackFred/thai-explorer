import useDestinations from './hooks/useDestinations'

const App = () => {
  const { data } = useDestinations()

  return <div>App</div>
}
export default App
