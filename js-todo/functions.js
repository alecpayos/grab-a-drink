// Declarations
const handleValues = document.querySelectorAll('#title, #textarea');
const handleRedirect = document.querySelectorAll('.input, .entry-list');
const buttonAdd = document.querySelector('.button-add');
let entryIndexer = null;

// Evaluate Constant
const evalValue = (event) => new entryConstructor(event.target.parentElement.parentElement.firstElementChild.firstElementChild.textContent, 
    event.target.parentElement.parentElement.firstElementChild.firstElementChild.nextSibling.nextSibling.textContent);

// HTML Template
const htmlTemplate = (entry) => {
    return `<div class="entry-container">
                <div class="dummy-entry">
                    <h2>${entry.title}</h2>
                    <p>${entry.description}</p>
                </div>  
                <div class="buttons-container">
                    <button class="edit-entry">Edit Entry</button>
                    <button class="remove-entry">Delete Entry</button>
                </div>
            </div>`
}

// Entry Constructor
function entryConstructor(title, description) {
    this.title = title;
    this.description = description;
}

// Render Function
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


const handleEdit = (event) => {
    const editButtons = document.querySelectorAll('.edit-entry');

    editButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            render.form();
            inputSetter.empty();
            handleValues[0].value = evalValue(event).title;
            handleValues[1].value = evalValue(event).description;
            buttonAdd.textContent = "Apply Changes";

            let evalEdit = evalValue(event);
            indexer(evalEdit);
            
        })
    });
}

const rerender = () => {
    entryList.forEach(entry => {
        handleRedirect[1].innerHTML += htmlTemplate(entry);

        handleDelete();
    })
}

const action = {
    Default: function(event) {
        event.preventDefault();
        render.list();

        const entry = new entryConstructor(handleValues[0].value, handleValues[1].value)
        entryList.push(entry);

        render.default();

        rerender();

        handleEdit(event);
    },
    Edit: function(event) {
        event.preventDefault();
        
        entryList[entryIndexer].title = handleValues[0].value;
        entryList[entryIndexer].description = handleValues[1].value;

        console.log(entryList[entryIndexer]);

        render.default();
        rerender();
        render.list();
    }
}

const indexer = (param) => {
    entryList.forEach(entry => {
        entry.title === param.title && entry.description === param.description ?
            entryIndexer = entryList.indexOf(entry) : null
    })
}

const inputSetter = {
    empty: function() {
        handleValues.forEach(inputfield => {
            inputfield.value = ""
        })
    },
    edit: function(event) {
        
    }
}

const splicer = (event) => {
    let evalEntry = evalValue(event)

    indexer(evalEntry);

    entryList.splice(entryIndexer, 1);
    entryIndexer = null;
}

const handleDelete = () => {
    const deleteButtons = document.querySelectorAll('.remove-entry');

    deleteButtons.forEach((deletebutton) => {
        deletebutton.addEventListener('click', (event) => {

            splicer(event);
            
            event.target.parentElement.parentElement.remove();
        })
    })
}

let entryList = [];

handleRedirect[0].addEventListener('submit', (event) => {
    event.target.lastElementChild.textContent === "Add Todo" ? 
    action.Default(event) : action.Edit(event);
});

handleRedirect[1].addEventListener('click', (event) => {
    event.target.textContent === "Back" ? 
        (render.form(), 
        inputSetter.empty(), 
        buttonAdd.textContent = "Add Todo")
        : null
})