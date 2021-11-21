let todos = [];

const eventHandlers = {
    "handleInputs": function(event) {
        event.preventDefault();
        const [ title, description ] = [...document.querySelectorAll('.input, .textarea')];
        todos.push({ title: title.value, desc: description.value });
        title.value = "";
        description.value = "";
    }
}

export { todos };
export default eventHandlers;