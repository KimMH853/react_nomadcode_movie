import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

const Hello = () => {
  //5.4 9:27
  useEffect(() => {
    console.log("create :)");
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello</h1>;
};

function App() {
  //const [count, setValue] = useState(0);
  //const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  // const onChange = (event) => {
  //   setKeyword(event.target.value);
  // };
  // console.log("i run all the time");
  // useEffect(() => {
  //   console.log("CALL THE API");
  // }, []);
  // useEffect(() => {
  //   if (keyword !== "" && keyword.length > 5) {
  //     console.log("SEARCH FOR", keyword);
  //   }
  // }, [keyword]);
  // useEffect(() => {
  //   console.log("i run when keyword and counter");
  // }, [keyword, count]);
  //const onClick = () => setValue((prev) => prev + 1);
  const onClickShowing = () => setShowing((prev) => !prev);
  return (
    <div className="App">
      {showing ? <Hello /> : null}
      <div>
        <button onClick={onClickShowing}>{showing ? "Hide" : "Show"}</button>
      </div>
      {/* <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1 className={styles.title}>{count}</h1>
      <button onClick={onClick}>click me</button> */}
    </div>
  );
}

export default App;
