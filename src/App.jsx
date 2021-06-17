import "./App.css";
import GithubSearch from "./components/GithubSearch/GithubSearch";
import { H1 } from "./components/Headings/Headings";

import Hero from "./layouts/Hero/Hero";
function App() {
  return (
    <div className="App">
      <Hero>
        <H1>GitHub Search</H1>
      </Hero>

      <div className="max-w-screen-xl m-auto flex flex-col items-center">
        <GithubSearch />
      </div>
    </div>
  );
}

export default App;
