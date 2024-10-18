import About from "./components/About/About";
import NavigationHeader from "./components/NavigationHeader/NavigationHeader";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <NavigationHeader />
      <Routes>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
};

export default App;
