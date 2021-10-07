import { useState } from "react";
import Styled from "./App.styles";
import eventHandlers from "./eventHandlers";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <Styled.Container>
      <Styled.BG_ELLIPSE_RIGHT></Styled.BG_ELLIPSE_RIGHT>
      <Styled.Form>
        <Styled.Input className="input" required placeholder="Title" 
          onChange={eventHandlers.handleInput} defaultValue=""></Styled.Input>
        <Styled.Textarea className="textarea" required placeholder="Description" 
          onChange={eventHandlers.handleInput} defaultValue=""></Styled.Textarea>
        <Styled.Button>Add Todo</Styled.Button>
      </Styled.Form>
    </Styled.Container>
  );
}
 
export default App;