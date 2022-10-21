import classes from "./Button.module.scss";
import { NavLink } from "react-router-dom";

type Props = {
  button_text: string;
  button_route: string;
};

const Button = ({ button_text, button_route }: Props) => {
  return (
    <NavLink to={button_route} className={classes.nav_link}>
      <button className={classes.default_button}>{button_text}</button>
    </NavLink>
  );
};

export default Button;
