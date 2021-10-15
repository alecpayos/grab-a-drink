const eventHandlers = {
    "handleInputs": function (event) {
        event.preventDefault();
        const [ title, description ] = [...document.querySelectorAll('.input, .textarea')];
        console.log(title.value, description.value);
    },
    
    "handleValues": function () {

    }
}
 
export default eventHandlers;