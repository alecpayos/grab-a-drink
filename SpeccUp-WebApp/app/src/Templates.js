import { Markup } from 'interweave';
import useFetchHtml from "./useFetchHtml";

const Template = ({ url }) => {
    const content = useFetchHtml(url)
    return (
        <>
            {content && <Markup content={content} />}
        </>
    );
}

export default Template;