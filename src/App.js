import NavButtons from "./components/Button";
import Review from "./components/Review";
import { useState } from "react";
import reviewsList from "./data";

function App() {
  const [index, setIndex] = useState(0);

  //nav
  const nxtClick = () => {
    if (index < reviewsList.length - 1) {
      setIndex(index + 1);
      return;
    }
    setIndex(0);
  };

  const prevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
      return;
    }
    setIndex(reviewsList.length - 1);
  };

  const surpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * reviewsList.length);
    setIndex(randomIndex);
  };

  return (
    <main>
      {/* head */}
      <h1 className="title">Our Reviews</h1>
      <div className="underline"></div>
      <section className="container">
        {/* reviewsList */}
        <article>
          <Review person={reviewsList[index]}></Review>
        </article>
        <NavButtons
          nxtClick={nxtClick}
          prevClick={prevClick}
          surpriseMe={surpriseMe}
        />
      </section>
    </main>
  );
}

export default App;
