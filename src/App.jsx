import { Fragment } from "react";
import "./App.css";
import TitleBar from "./components/TitleBar";
import Card from "./components/Card";
import Data from "./assets/data";

export default function App() {
  const cards = Data.map((item, index) => {
    if (index == Data.length - 1) {
      return <Card key={index} item={item} />;
    } else {
      return (
        <Fragment key={index}>
          <Card key={index} item={item} />
          <hr />
        </Fragment>
      );
    }
  });
  return (
    <div>
      <TitleBar />
      {cards}
    </div>
  );
}
