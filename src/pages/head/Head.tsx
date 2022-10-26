import classes from "./Head.module.scss";

const Head = () => {
  return (
    <section className={classes.head}>
      <div className={classes.head_title}>
        <h1 className={classes.head_title_text}>crypocurrency</h1>
      </div>
    </section>
  );
};

export default Head;
