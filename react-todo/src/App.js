import { useState } from "react";
import Styled from "./App.styles";
import eventHandlers from "./eventHandlers";

const App = () => {
  return (
    <Styled.Container>
      <Styled.BG_ELLIPSE_RIGHT></Styled.BG_ELLIPSE_RIGHT>
      <Styled.Form onSubmit={eventHandlers.handleInputs}>
        <Styled.Input className="input" required placeholder="Title"></Styled.Input>
        <Styled.Textarea className="textarea" required placeholder="Description"></Styled.Textarea>
        <Styled.Button>Add Todo</Styled.Button>
      </Styled.Form>
    </Styled.Container>
  );
}
 
export default App;