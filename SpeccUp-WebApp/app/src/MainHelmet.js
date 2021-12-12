import { Helmet } from 'react-helmet';

const MainHelmet = () => {
    return (
        <>
            <Helmet>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>SpeccUp</title>
                <link rel="icon" href="./assets/logo.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&family=Roboto+Mono:wght@700&display=swap" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/6ab75e7019.js" crossorigin="anonymous"></script>
            </Helmet>
        </>
    );
}
 
export default MainHelmet;