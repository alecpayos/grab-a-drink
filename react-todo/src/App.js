import Styled from "./App.styles";

function App() {
  return (
    <Styled.container>
      <Styled.form>
        <Styled.input class="input" required placeholder="Title" value=""></Styled.input>
        <Styled.textarea class="textarea" required placeholder="Description" value=""></Styled.textarea>
      </Styled.form>
    </Styled.container>
  )
}

export default App;