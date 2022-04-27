import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import Details from "./components/details";
import Navigation from "./components/navigation";
import Search from "./components/search";
import Home from "./components/home";
import LoginScreen from "./components/login-screen";
import Profile from "./components/profile";
import {ProfileProvider} from "./contexts/profile-context";
import SecureRoute from "./components/secure-route";
import Favorites from "./components/favorites";
import PostScreen from "./components/post-screen";
import postReducer from "./components/reducers/post-reducer";
import planReducer from "./components/reducers/plan-reducer";
import PlanScreen from "./components/plan-screen";

const reducer = combineReducers({
    posts: postReducer,
    plans: planReducer
})
const store = createStore(reducer);

function App() {
  return (
      <div className="container">
          <ProfileProvider>
              <Provider store={store}>
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
                                      <Route path="/login" element={<LoginScreen/>}/>
                                      <Route path="/profile" element={
                                          <SecureRoute>
                                              <Profile/>
                                          </SecureRoute>
                                      }/>
                                      <Route path="/favorites" element={
                                          <SecureRoute>
                                              <Favorites/>
                                          </SecureRoute>
                                      }/>
                                      <Route path="/posts" element={<PostScreen/>}/>
                                      <Route path="/plans" element={<PlanScreen/>}/>
                                  </Routes>

                          </div>
                      </div>
                  </BrowserRouter>
              </Provider>
          </ProfileProvider>
      </div>
  );
}

export default App;
