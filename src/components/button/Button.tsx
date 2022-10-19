import classes from "./Button.module.scss";
import { NavLink } from 'react-router-dom';

type Props = {
  button_text: string;
  button_route: string
};

const Button = ({button_text, button_route}: Props) => {
  return (
    <button className={classes.default_button}>
      <NavLink to={button_route}>{button_text}</NavLink>
    </button>
  );
};

export default Button;
