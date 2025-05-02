import Maxii from "./component/maxii";
import ArkoEuta from "./component/ArkoEuta";
import Salty from "./component/salty";
import Form from "./component/Form";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./component/home";
import Contact from "./component/contact";
import About from "./component/About";

function App() {
  const user = {
    name: "maxi",
    age: "19",
  };

  const puuq = {
    koho: "sathi",
    kabascha: "bari ma",
  };

  const suhan = {
    naam: "salty",
    barsa: "21",
    // naam:"dipus",
    // barsa:"21",
  };

  return (
    <>
      {/* <Maxii {... user}/>
      <ArkoEuta {...puuq} />
      <Salty {...suhan} />
      <Form /> */}
      <h1>Nav bar</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
