import { fetchCoins } from "./../../store/coinCap/coincap.api";
import { useAppDispatch, useAppSelector } from "./../../hooks/redux";
import { useEffect, useState } from "react";
import { Data } from "./../../models/models";
import classes from "./Home.module.scss";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { coins } = useAppSelector((state) => state.coins);
  const { limit, setLimit } = useState("5");
  const { offset, setOffset } = useState("1");

  useEffect(() => {
    dispatch(fetchCoins({ limit, offset }));
  }, [dispatch, limit, offset]);

  console.log(coins);

  return (
    <section className={classes.section}>
      <h1>Main</h1>
      <div className={classes.card_wrapper}>
        {coins.data?.map(({ id }: Data) => (
          <div className={classes.card_crypto}>{id}</div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
