import Maxii from "./component/maxii"
import ArkoEuta from "./component/ArkoEuta"
import Salty from "./component/salty"

function App() {

  const user={
    name: "maxi",
    age: "19"
  }
  
  const puuq = {
    koho:"sathi",
    kabascha:"bari ma"
  }

  const suhan={
    naam:"salty",
    barsa:"21"
    // naam:"dipus",
    // barsa:"21",
  }


  return (
    <>
      <Maxii {... user}/>
      <ArkoEuta {...puuq} />
      <Salty {...suhan} />
    </>
  );
}

export default App
