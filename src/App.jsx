// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const initialState = ["banana", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState(""); // result는 텍스트일 뿐
  const [query, setQuery] = useState(""); // input을 위한 value

  // 너무 길어지는 것을 막기 위해 함수 부분을 위로 빼서 관리

  const handleForEach = function () {
    let temp = "";
    array.forEach(function (item, index) {
      temp += `${index}: ${item} / `;
    });
    setResult(temp);
  };

  const handleFilter = function () {
    const filtered = array.filter((item, index) => item.includes(query));
    setResult(filtered.join(", "));
  };

  const handleMap = function () {
    const mapped = array.map(function (item, index) {
      return item.toUpperCase();
    });
    setResult(mapped.join(", "));
  };

  const handleReduce = function () {
    const reduced = array.reduce(function (acc, cur) {
      return `${acc} + ${cur}`;
    });
    setResult(reduced);
  };

  const handlePush = function () {
    if (query.length <= 0) {
      alert("추가하시려는 값을 입력해 주세요.");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = function () {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  return (
    <div>
      <h1>Standard반 배열 API 테스트</h1>
      <input
        value={query}
        onChange={function (event) {
          setQuery(event.target.value); // input에는 value와 onChange 사용
        }}
      />
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>Reduce</button>
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
      </div>
      <div>
        <h3>원본배열</h3>
        <p>{array.join(", ")}</p>
      </div>
      <div>
        <h3>결과물</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
