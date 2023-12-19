import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { Provider } from "react-redux";
import UserSearchContainer from "./containers/UserSearchContainer";
import store from "./store/configureStore";

function App() {
  
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
