import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Inicio } from './pages/Inicio'
import { MenuPizzas } from './pages/MenuPizzas'
import { MenuBurgers } from './pages/MenuBurgers'
import { MenuPerros } from './pages/MenuPerros'
import { Comprar } from './pages/Comprar'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/menupizzas" exact component={MenuPizzas} />
          <Route path="/menuburgers" exact component={MenuBurgers} />
          <Route path="/menuperros" exact component={MenuPerros} />
          <Route path="/comprar" exact component={Comprar} />
        </Switch>
      </Router>
    </div>
  )
}
export default App
