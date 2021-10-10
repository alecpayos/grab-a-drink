const handleValues = document.querySelectorAll('#title, #textarea');
const handleRedirect = document.querySelectorAll('.input, .entry-list');

function entryConstructor(title, description) {
    this.title = title;
    this.description = description;
}

const render = {
    list:  function() { 
        handleRedirect[0].classList.toggle('display');
        handleRedirect[0].classList.toggle('no-display');
        handleRedirect[1].classList.toggle('no-display');
        handleRedirect[1].classList.toggle('display');
    },
    form: function() {
        handleRedirect[0].classList.toggle('no-display');
        handleRedirect[0].classList.toggle('display');
        handleRedirect[1].classList.toggle('display');
        handleRedirect[1].classList.toggle('no-display');
    },
    default: function() {
        [...handleRedirect[1].children].forEach(child => {
            child.textContent === "Back" ? null : child.remove();
        })
    }
}

const htmlTemplate = (entry) => {
    return `<div class="entry-container">
                <div class="dummy-entry">
                    <h2>${entry.title}</h2>
                    <p>${entry.description}</p>
                </div>  
                <button class="remove-entry">Delete Entry</button>
            </div>`
}

const inputSetter = () => {
    handleValues.forEach(inputfield => {
        inputfield.value = ""
    })
}

const splicer = (event) => {
    let evalValue = new entryConstructor(event.target.parentElement.firstElementChild.firstElementChild.textContent, 
        event.target.parentElement.firstElementChild.firstElementChild.nextSibling.nextSibling.textContent);

    entryList.forEach(entry => {
        entry.title === evalValue.title && entry.description === evalValue.description ?
            entryList.splice(entryList.indexOf(entry), 1) : null
    })
}

const handleDelete = () => {
    const deleteButtons = document.querySelectorAll('.remove-entry');

    deleteButtons.forEach((deletebutton) => {
        deletebutton.addEventListener('click', (event) => {

            splicer(event);
            
            event.target.parentElement.remove();
        })
    })
}

let entryList = [];

handleRedirect[0].addEventListener('submit', (event) => {
    event.preventDefault();

    render.list();

    const entry = new entryConstructor(handleValues[0].value, handleValues[1].value)
    entryList.push(entry);
    
    render.default();

    entryList.forEach(entry => {
        handleRedirect[1].innerHTML += htmlTemplate(entry);

        handleDelete();
    })
});

handleRedirect[1].addEventListener('click', (event) => {
    event.target.textContent === "Back" ? 
        (render.form(), inputSetter())
        : null
})