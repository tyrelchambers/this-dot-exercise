import "./App.css";
import { H1 } from "./components/Headings/Headings";
import Input from "./components/Input/Input";
import InputWrapper from "./components/InputWrapper/InputWrapper";
import Hero from "./layouts/Hero/Hero";
function App() {
  return (
    <div className="App">
      <Hero>
        <H1>GitHub User Search</H1>
      </Hero>

      <div className="max-w-screen-lg m-auto flex flex-col items-center">
        <div className="mt-20 max-w-lg w-full">
          <InputWrapper labelTitle="User search">
            <Input placeholder="Enter Github username" />
          </InputWrapper>
        </div>
      </div>
    </div>
  );
}

export default App;
