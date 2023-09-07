import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNavigationBar from './components/menu/topNavigationBar'
import MonthMenu from './components/menu/monthMenu'
import MoneyDisplay from './components/menu/moneyDisplay'
import Dashboard from './components/menu/Dashboard'

function App() {
  return (
    <div className="App">
      <TopNavigationBar />
      <MonthMenu />
      <MoneyDisplay/>
      <Dashboard/>
    </div>
  );
}


export default App
