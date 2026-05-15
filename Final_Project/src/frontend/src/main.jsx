import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>LA City Sidewalk Assessment Simulation</h1>
      <p>Placeholder dashboard for CS3338 final project</p>
      <ul>
        <li>Dashboard</li>
        <li>Upload Scan</li>
        <li>View Results</li>
        <li>Navigation Control</li>
      </ul>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)