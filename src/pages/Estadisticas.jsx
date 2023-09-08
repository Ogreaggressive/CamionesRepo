
import '../App.css'
import TopNavigationBar from '../components/menu/topNavigationBar'
import MonthMenu from '../components/menu/monthMenu'
import MoneyDisplay from '../components/menu/moneyDisplay'
import Dashboard from '../components/menu/Dashboard'


function Estadisticas() {
  return (
    <div>
    <TopNavigationBar />
    <MonthMenu />
    <MoneyDisplay/>
    <Dashboard/>
    </div>
  );
}


export default Estadisticas
