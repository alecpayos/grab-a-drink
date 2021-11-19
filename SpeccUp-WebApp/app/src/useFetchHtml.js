import { useEffect, useState } from "react";

const useFetchHtml = (url) => {
    const [ content, setContent ] = useState('');

    useEffect(() => {
        fetch(url)
        .then(res => res.text())
        .then(text => setContent(text))
        }, []);

    return content;
}
 
export default useFetchHtml;