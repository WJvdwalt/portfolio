// To store and update state
import { useState } from 'react'
// We import since the bundler can optimize it, fin gerprint with hash for caching
import reactLogo from './assets/react.svg'
// This path indicates that we are accessing this asset from the root of the project
import viteLogo from '/vite.svg'
import './App.css'
import Page from './components/Page'

// Remember the convention when we name the function that will return the appropriate HTML
function App() {
  // Remmeber that the usestate function returns the current value of the state
  // and it returns the function to update it
  // we use states to trigger re-renders for automatic updates
  const [count, setCount] = useState(0)
  // Note that we wrap the HTML in one fragment since the React component must return only one element
  // Also note that in react event handlers are passed as functions
  // writing onClick = setCount(...) would immediately call the function which is not what we want
  return (
    <>
      <Page/>
    </>
  )
}

export default App
