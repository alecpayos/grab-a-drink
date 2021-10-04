const handleValues = document.querySelectorAll('#title, #textarea');
const handleRedirect = document.querySelectorAll('.input, .entry-list');
class Entries {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

let entryList = [];

handleRedirect[0].addEventListener('submit', (event) => {
    event.preventDefault();

    handleRedirect[0].classList.toggle('display');
    handleRedirect[0].classList.toggle('no-display');

    const entry = new Entries(handleValues[0].value, handleValues[1].value)
    entryList.push(entry);
    
    entryList.forEach(entry => {
        handleRedirect[1].innerHTML += `<div>
                                            <div class="dummy-entry">
                                                <h2>${entry.title}</h2>
                                                <p>${entry.description}</p>
                                            </div>
                                            
                                        </div>`
    })

    handleRedirect[1].classList.toggle('no-display');
    handleRedirect[1].classList.toggle('display');
});