import classes from './Header.module.scss'
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

const Header = ({children}: Props) => {
  return (
    <header className={classes.header}>
      {children}
    </header>
  )
}

export default Header