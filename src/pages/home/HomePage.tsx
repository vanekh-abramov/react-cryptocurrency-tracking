import { fetchCoins } from "./../../store/coinCap/coincap.api";
import { useAppDispatch, useAppSelector } from "./../../hooks/redux";
import { useEffect } from "react";
import { Data } from "./../../models/models";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { coins } = useAppSelector((state) => state.coins);

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  console.log(coins);

  return (
    <div>
      {coins.data?.map(({ id }: Data) => (
        <div>{id}</div>
      ))}
    </div>
  );
};

export default HomePage;
