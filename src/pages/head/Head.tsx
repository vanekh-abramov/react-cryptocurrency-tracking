import classes from './Head.module.scss'
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

const Head = ({children}: Props) => {
  return (
    <section className={classes.head}>
      {children}
    </section>
  )
}

export default Head