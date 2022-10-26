// import AppRouter from "./helpers/router/AppRouter";
// import { HOME_ROUTE } from "./constants/routerLinks";
import Head from "./pages/head/Head";
// import Button from "./components/button/Button";
import HomePage from "./pages/home/HomePage";
import classes from "./App.module.scss";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      {/* <AppRouter /> Show route result */}
      {/* <Button button_text="Home" button_route={HOME_ROUTE} /> Example route button */}
      <div className={classes.container}>
        <Header />
        <Head />
        <HomePage />
      </div>
    </>
  );
};

export default App;
