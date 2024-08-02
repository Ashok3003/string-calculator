import React from "react";
import StringCalculator from "./Components/StringCalculator";

function App() {
  // const [input, setInput] = useState("");
  // const [result, setResult] = useState(null);
  // const [error, setError] = useState(null);

  // const handleChange = (e) => {
  //   setInput(e.target.value);
  // };

  // const handleCalculate = () => {
  //   try {
  //     const res = add(input);
  //     setResult(res);
  //     setError(null);
  //   } catch (err) {
  //     setError(err.message);
  //     setResult(null);
  //   }
  // };

  return <StringCalculator />;
}

export default App;
