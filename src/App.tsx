import AppRouter from "./helpers/router/AppRouter";
import { HOME_ROUTE } from "./constants/routerLinks";
import Header from "./components/header/Header";
import Button from "./components/button/Button";

const App = () => {
  return (
    <div>
      <Header>
        <Button button_text="Home" button_route={HOME_ROUTE} />
      </Header>
      <AppRouter />
    </div>
  );
};

export default App;
