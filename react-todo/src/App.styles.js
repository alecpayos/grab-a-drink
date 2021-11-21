import styled from 'styled-components';

const Styled = {
    "Container": styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;`,

    "Form": styled.form`
    display: inherit;
    flex-direction: inherit;
    align-items: center;
    background: linear-gradient(-45deg, #FFCECB, rgb(255, 230, 225));
    box-shadow: 4px 4px 8px 0 #ABABAB;
    width: 30%;
    height: 50%;
    z-index: 5;
    border-radius: 5px;`,

    "Input": styled.input`
    font: 20px 'Segoe UI', sans-serif;
    padding: 8px 20px;
    outline: none;
    border: none;
    border-radius: 10px;
    margin: 32px 0 8px 0;
    width: 80%;
    box-shadow: 0 0 10px 0 #8b8b8b inset;`,

    "Textarea": styled.textarea`
    font-size: 16px;
    padding: 12px 20px;
    margin: 8px 0 32px 0;
    resize: none;
    width: 80%;
    height: 256px;
    outline: none;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 #8b8b8b inset;`
}
 
export default Styled;