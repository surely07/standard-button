// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState(""); // result는 텍스트일 뿐
  const [query, setQuery] = useState(""); // input을 위한 value

  const handleForEach = function () {
    let temp = "";
    array.forEach(function (item, index) {
      temp += `${index}: ${item} / `;
    });
    setResult(temp);
  };

  const handleFilter = function () {
    const filtered = array.filter((item) => item.includes(query));
    setResult(filtered.join(", "));
  };

  const handleMap = function () {
    const mapped = array.map(function (item) {
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

  const handleSlice = function () {
    const sliced = array.slice(1, 4);
    setResult(sliced.join(", "));
  };

  const handleSplice = function () {
    const newArr = [...array];
    newArr.splice(2, 2, "kiwi", "lime");
    setResult(newArr.join(", "));
  };

  const handleIndexOf = function () {
    const indexed = array.indexOf(query);
    setResult(indexed);
  };

  const handleIncludes = function () {
    const included = array.includes(query);
    setResult(included.toString());
  };

  const handleFind = function () {
    const found = array.find((item) => item.includes(query));
    setResult(found);
  };

  const handleSome = function () {
    const some = array.some((item) => item.includes(query));
    setResult(some.toString());
  };

  const handleEvery = function () {
    const every = array.every((item) => item.length > 2);
    setResult(every.toString());
  };

  const handleSort = function () {
    const sorted = array.sort();
    setResult(sorted.join(", "));
  };

  const handleJoin = function () {
    setResult(array.join(", "));
  };

  return (
    <div class="App">
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
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexOf}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>
      <div
        style={{
          border: "1px solid black",
          margin: "10px",
        }}
      >
        <h3>원본배열 : </h3>
        <p>{array.join(", ")}</p>
      </div>
      <div
        style={{
          border: "1px solid black",
          margin: "10px",
        }}
      >
        <h3>결과물 :</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
