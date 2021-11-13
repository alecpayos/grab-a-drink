import Styled from "./App.styles";
import eventHandlers from "./eventHandlers";

const AddTodo = () => {
    return (
        <Styled.Container>
            <Styled.Form onSubmit={eventHandlers.handleInputs}>
                <Styled.Input required placeholder="Title"></Styled.Input>
                <Styled.Textarea required placeholder="Description"></Styled.Textarea>
                <Styled.Button>Add Todo</Styled.Button>
            </Styled.Form>
        </Styled.Container>
);
}
 
export default AddTodo;