import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";

// function App() {
//   return (
//     <main className="container">
//       <h1>Hello World</h1>
//     </main>
//   );
// }

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;
