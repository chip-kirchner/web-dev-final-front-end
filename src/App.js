import './App.css';
import MealPlan from "./components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Details from "./components/details";
import Navigation from "./components/navigation";
import Search from "./components/search";
import Home from "./components/home";

function App() {
  return (
      <div className="container">
          <BrowserRouter>
              <div className="row mt-2">
                  <div className="col-2">
                      <Navigation/>
                  </div>
                  <div className="col-10">

                          <Routes>
                              <Route path="/details/:mealID" element={<Details/>}/>
                              <Route path="/search/:recipeSearch" element={<Search/>}/>
                              <Route path="/search" element={<Search/>}/>
                              <Route path="" element={<Home/>}/>
                          </Routes>

                  </div>
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
