import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useDebounce from "./useDebounceHook";

function App() {
  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDebounce(inputValue, 300);

  useEffect(() => {
    console.log(debounceValue);
    // your backend call goes here
  }, [debounceValue]);
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10">
      <h1 className="font-bold underline custom-header text-2xl sm:text-6xl">
        useDebounce
      </h1>
      <input
        placeholder="Enter a text"
        className="outline-none border-2 border-gray-400 rounded-lg px-10 py-3 w-3/4 sm:w-1/4"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2 className="text-2xl break-all mx-14">
        Debounce value - {debounceValue}
      </h2>
    </div>
  );
}

export default App;
