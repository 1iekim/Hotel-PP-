import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import { createContext } from "react";

const nowDate = new Date();

const DateData = {
  dateFirst: `${nowDate.getFullYear()}-${
    nowDate.getMonth() < 10 ? "0" + nowDate.getMonth() : nowDate.getMonth()
  }-${nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate()}`,
  dateLast: `${nowDate.getFullYear()}-${
    nowDate.getMonth() < 10 ? "0" + nowDate.getMonth() : nowDate.getMonth()
  }-${nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate()}`,
  persons: 1,
};

export const Context = createContext({});

function App() {
  return (
    <Context.Provider value={DateData}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
