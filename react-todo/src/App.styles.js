import styled from 'styled-components';

const Styled = {
    "container": styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: linear-gradient(135deg, #1d82e2, #a5155f  );`,

    "form": styled.form`
    display: inherit;
    flex-direction: inherit;
    align-items: center;
    background-color: #EFEFEF;
    width: 30%;
    height: 70%;
    border-radius: 5px;`,

    "input": styled.input`
    font: 20px 'Segoe UI', sans-serif;
    padding: 8px 20px;
    outline: none;
    border: none;
    border-radius: 10px;
    margin: 32px 0 8px 0;
    width: 80%;`,

    "textarea": styled.textarea`
    font-size: 16px;
    padding: 8px 20px;
    margin: 8px 0 32px 0;
    resize: none;
    width: 80%;
    height: 256px;
    outline: none;
    border: none;
    border-radius: 10px;`,

    "button": styled.button``
}
 
export default Styled;