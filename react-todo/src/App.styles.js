import styled from 'styled-components';

const Styled = {
    "Container": styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(180deg, #FFCECB 0%, rgba(255, 230, 225, 0.3) 100%);`,

    "Form": styled.form`
    display: inherit;
    flex-direction: inherit;
    align-items: center;
    background-color: #cbcbcb;
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
    box-shadow: 0 2px 10px 1px #8b8b8b inset;`,

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
    box-shadow: 0 2px 10px 1px #8b8b8b inset;`,

    "Button": styled.button`
    padding: 8px 24px;
    border-radius: 10px;
    font: bold 16px 'Arial', sans-serif;
    border: none;
    background-image: linear-gradient(135deg, #15ea56, #10a93a);
    color: #c9fad6;
    margin: 0 0 24px 0;
    box-shadow: 0 0 5px 1px #12ba40;`,

    //Supports go here
    "BG_ELLIPSE_RIGHT": styled.div`
    background: #F89EF4;
    border-radius: 50%;
    color: white;
    width: 60%;
    filter: blur(200px);
    height: 120%;
    top: -50%;
    left: 55%;
    position: fixed;`
}
 
export default Styled;