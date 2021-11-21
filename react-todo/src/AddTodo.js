import { Link } from "react-router-dom";
import Styled from "./App.styles";
import eventHandlers from "./eventHandlers";

const button = {
    padding: "8px 24px",
    borderRadius: "10px",
    font: "bold 16px 'Arial', sans-serif",
    border: "none",
    backgroundImage: "linear-gradient(135deg, #15ea56, #10a93a)",
    color: "#EFEFEF",
    marginBottom: "32px",
    boxShadow: "0 0 5px 1px #12ba40",
    textDecoration: "none"
}

const AddTodo = () => {
    return (
        <Styled.Container>
            <Styled.Form onSubmit={eventHandlers.handleInputs} action="/">
                <Styled.Input className="input" required placeholder="Title"></Styled.Input>
                <Styled.Textarea className="textarea" required placeholder="Description"></Styled.Textarea>
                <Link to="/" style={button}>Add Todo</Link>
            </Styled.Form>
        </Styled.Container>
    );
}
 
export default AddTodo;