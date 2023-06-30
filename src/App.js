import { styled } from "styled-components";
import Card from "./components/Card";
import { useState } from "react";
import { INIT_ADVICE } from "./utils/props";

function App() {
  const [data, setData] = useState(INIT_ADVICE);
  const fetchAdvice = async () => {
    let randomNumber = Math.floor(Math.random() * 200) + 1;
    const res = await fetch(
      `https://api.adviceslip.com/advice/${randomNumber}`
    );
    const json = await res.json();
    setData(json);
  };

  return (
    <div className="App">
      <Wrapper>
        <Card onClick={fetchAdvice} id={data?.slip?.id ?? 0}>
          {data?.slip?.advice ?? "Advice no found"}
        </Card>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 540px;
  height: 332px;
  margin: 223px auto;

  @media (max-width: 600px) {
    width: 343px;
    height: 315px;
    padding: 24px;
  }
`;

export default App;
