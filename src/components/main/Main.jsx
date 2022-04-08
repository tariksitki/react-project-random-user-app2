import Card from "../card/Card";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <section className="section-up">
        <header className="header">
          <h1>Random User App</h1>
        </header>
        <Card />
      </section>
    </div>
  );
};

export default Main;