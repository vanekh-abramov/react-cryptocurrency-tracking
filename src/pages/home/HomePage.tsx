import { fetchCoins } from "./../../store/coinCap/coincap.api";
import { useAppDispatch, useAppSelector } from "./../../hooks/redux";
import { useEffect } from "react";
// import { Data } from "./../../models/models";
import classes from './Home.module.scss'

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { coins } = useAppSelector((state) => state.coins);

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  console.log(coins);

  return (
    <section className={classes.section}>
      <h1>Main</h1>
      {/* {coins.data?.map(({ id }: Data) => (
        <div>{id}</div>
      ))} */}
    </section>
  );
};

export default HomePage;
