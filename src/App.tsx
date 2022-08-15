import { NavLink } from "react-router-dom";
import AppRouter from "./helpers/router/AppRouter";
import { HOME_ROUTE } from "./constants/routerLinks";
import Header from "./components/header/Header";
import Button from "./components/button/Button";

const App = () => {
  return (
    <div>
      <Header />
      <Button />
      <button>
        <NavLink to={HOME_ROUTE}>Home</NavLink>
      </button>
      <AppRouter />
    </div>
  );
};

export default App;
