import { useState } from "react";
import { Route, Routes } from "react-router";
import { GlobalContext } from "./context/GlobalContext";
import NameInput from "./components/NameInput/NameInput";
import CalculatorPage from "./components/CalculatorPage";

const App = () => {
  const [userName, setUserName] = useState<string>('');

  return (
    <GlobalContext.Provider value={{ userName, setUserName }}>
      <Routes>
        <Route path="/" element={<NameInput />} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </GlobalContext.Provider>
  )
}

export default App;
