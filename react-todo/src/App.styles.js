import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styled = {
    "Link": styled(Link)`
    z-index: 1;
    color: white;
    outline: none;
    background: none;
    border: none;
    font: bold 16px 'Oswald', sans-serif;
    text-decoration: none;
    &:hover {
        color: #ffbe00;
    }`,

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
    background: linear-gradient(180deg, #FFBBAE, #FFCECB);
    width: 30%;
    height: 50%;
    z-index: 1;
    border-radius: 5px;
    box-shadow: 4px 4px 8px 0 #AFAFAF;`,

    "Input": styled.input`
    font: 20px 'Segoe UI', sans-serif;
    padding: 8px 20px;
    outline: none;
    border: none;
    border-radius: 10px;
    margin: 32px 0 8px 0;
    width: 80%;
    box-shadow: 0 2px 10px 0 #8b8b8b inset;`,

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
    box-shadow: 0 2px 10px 0 #8b8b8b inset;`,

    "Button": styled.button`
    padding: 8px 24px;
    border-radius: 10px;
    font: bold 16px 'Arial', sans-serif;
    border: none;
    background-image: linear-gradient(135deg, #15ea56, #16EA56);
    color: white;
    margin: 0 0 24px 0;
    box-shadow: 0 0 5px 1px #12ba40;`,

    "H1": styled.h1`
    font: bold 32px 'Montserrat', sans-serif;
    z-index: 1;`,
}
 
export default Styled;