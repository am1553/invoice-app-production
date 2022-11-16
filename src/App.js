import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./layouts/Header";
import Home from "./pages/Home/Home";
import NewInvoice from "./pages/NewInvoice/NewInvoice";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './app/store'

function App() {
  const theme = useContext(ThemeContext)[0]
  return (
    <Provider store={store}>
      <div className={`App h-screen md:flex ${theme === "light" ? "bg-desaturated-white text-grey" : "bg-desaturated-black text-desaturated-grey"}`}>
        <Header />
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/new-invoice" exact element={<NewInvoice />}/>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
