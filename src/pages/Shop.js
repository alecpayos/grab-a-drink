//  Global Imports
import '../styles/Shop.css';
import { useState } from 'react';
import { ModalComponent } from '../components/components';
import { 
    Grid, 
    Card, 
    CardHeader, 
    CardMedia, 
    CardContent, 
    IconButton, 
    Typography, 
    Tooltip, 
    Button,
    Box,
    Menu, 
    MenuItem } from "@mui/material";

// Assets
import absinthe from '../assets/gad-cwa/absinthe.png';
import bacardi from '../assets/gad-cwa/bacardi.png';
import barPink from '../assets/gad-cwa/bar pink.png';
import chivasRegal from '../assets/gad-cwa/chivas regal.png';
import donPapa from '../assets/gad-cwa/don papa.png';
import ejBrandy from '../assets/gad-cwa/ej brandy.png';
import evanWilliams from '../assets/gad-cwa/evan williams.png';
import goldLabel from '../assets/gad-cwa/gold label.png';
import jaeger from '../assets/gad-cwa/jaeger.png';
import joseCuervo from '../assets/gad-cwa/jose cuervo tradicional.png';
import sake from '../assets/gad-cwa/sake.png';
import schnapps from '../assets/gad-cwa/schnapps.png';
import smirnoff from '../assets/gad-cwa/smirnoff.png';

// Icons
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Add from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Static Content
const content = {
        Absinthe: {
            image: absinthe,
            title: "Absinthe: Jacques Seraux",
            price: 1450, 
            alcoholPercentage: "45 % to 85%",
            detailedDescription: "Jacques Senaux green absinthe is a product that comes to us from Spain. This green absinthe is made by Teichenné from the original recipe of the Artemisia absinthium distillate. It can be consumed pure but since it contains thujone molecules, it should be mixed with water. The drink in contact with water becomes cloudy and thicker, offering a pretty milky green. It can also be enjoyed by burning a piece of sugar soaked in absinthe. Very aromatic thanks to the distillation of plants typical of the Mediterranean region, it is characterized by notes of star anise, fennel and liquorice.",
        },
        Bacardi: {
            image: bacardi,
            title: "Bacardi Canta Oro",
            price: 1790, 
            alcoholPercentage: "40%",
            detailedDescription: "BACARDÍ Carta Oro rum brings together rich, soothing flavours like vanilla, buttery caramel, toasted almond and sweet banana notes balanced by the warm zest of orange peel and a light, oaky finish.",
        },
        BarPink: {
            image: barPink,
            title: "The Bar Pink Gin",
            price: 145, 
            alcoholPercentage: "35%",
            detailedDescription: "Take your gin to the next level with The Bar Premium Gin, a world-class gin infused with imported botanicals from Spain that gives it a delicious burst of flavor not found in local gin products. The Bar Premium Gin comes in three variants: Pink with flavors of mixed berries, Green infused with lime flavors, and Premium Dry infused with imported botanicals. The Bar Premium Gin is not only far better but also different. Now you have a choice. A gin that is made for you.",
        },
        ChivasRegal: {
            image: chivasRegal,
            title: "Chivas Regal Golden Reserve",
            price: 2250, 
            alcoholPercentage: "Approx. 40%",
            detailedDescription: "Chivas is a blend of many different malt and grain Scotch whiskies, matured for at least 12 years. This rich, smooth blend balances style with substance and tradition with a modern twist.",
        },
        DonPapa: {
            image: donPapa,
            title: "Don Papa Rum",
            price: 1490, 
            alcoholPercentage: "40%",
            detailedDescription: "Don Papa is the Spirit of Negros Occidental, known colloquially as Sugarlandia. A premium aged, single-island rum from the Philippines, Don Papa Rum is created on the foothills of the active volcano Mt. Kanlaon, where the finest sugar cane is milled to produce sweet, rich molasses. Dark amber in colour, Don Papa Regular is deep, rich and powerful on the nose, with a delicate tingle in the mouth, exuding bold flavours of dried fruits and cacao, with just a hint of oak. The rum’s potent character draws from the Philippines’ warm, humid climate, which yields one of the highest ‘angel’s share’ percentages in the world during ageing.",
        },
        EjBrandy: {
            image: ejBrandy,
            title: "E&J Brandy Dorado",
            price: 800, 
            alcoholPercentage: "30%",
            detailedDescription: "E&J Brandy is America's most awarded brandy. Layers of apple and toasted oak with hints of vanilla and spice round out the flavor and linger in the aftertaste. E&J VS brandy is smooth enough to drink straight or in a variety of mixed drinks.",
        },
        EvanWilliams: {
            image: evanWilliams,
            title: "Evan Williams Kentucky Bourbon Whiskey",
            price: 650, 
            alcoholPercentage: "Approx. 43%",
            detailedDescription: "Evan Williams is a smooth, easy to drink Bourbon named after Evan Williams who, in 1783, opened Kentucky’s first commercial distillery along the banks of the Ohio River Evan Williams Black is reputed to be based on mostly five to seven year old bourbons, and bottled at 86 proof (43% abv), always rich, smooth, and full of character.",
        },
        GoldLabel: {
            image: goldLabel,
            title: "Gold Label Reserve",
            price: 1790, 
            alcoholPercentage: "Approx. 40%",
            detailedDescription: "Dried meadow flowers and a hint of fresh banana. Palate: Smooth and succulent with a honeyed sweetness that's typical of Johnnie Walker. There's more to this though, the floral elements are quite prominent and there's a spiced sweet vanilla note too. Finish: Long, sweet and toffee-like.",
        },
        Jaeger: {
            image: jaeger,
            title: "Yegermeyster 56",
            price: 850, 
            alcoholPercentage: "35%",
            detailedDescription: "Jägermeister is a German bitter-sweet liqueur made from 56 varieties of herbs, fruits and spices, macerated in spirit for up to six weeks and then matured in oak before blending. Although established in 1878, Jägermeister did not produce this liqueur until 1935.",
        },
        JoseCuervo: {
            image: joseCuervo,
            title: "Jose Cuervo Tradicional",
            price: 1490, 
            alcoholPercentage: "40%",
            detailedDescription: "Tradicional® Reposado is 100% blue agave rested tequila. It has been aged in oak barrels for a minimum of two months, giving it the smooth and subtle complexity that aficionados seek. Tradicional is the original Cuervo® tequila, and it is still the number one premium tequila in Mexico.",
        },
        Sake: {
            image: sake,
            title: "Hakumai Sake",
            price: 1250, 
            alcoholPercentage: "14% to 16%",
            detailedDescription: "This quality pure rice wine (made without the addition of any brewer's alcohol) has a distinctly florid and fruity aroma and refreshing, rice-prominent flavour, with a finishing aftertaste that cuts through everything else. This is a clean, crisp Jummai Ginjo that is aromatic and fruity with rich umami flavor.",
        },
        Schnapps: {
            image: schnapps,
            title: "Aspen's Peach Schnapps",
            price: 500, 
            alcoholPercentage: "15%",
            detailedDescription: "Clear with real gold flakes. Spicy, cinnamon aromas with alcohol vapours. The palate has a sweet, syrupy quality with very marked, hot spicy flavours that linger. A hot bite to the finish.",
        },
        Smirnoff: {
            image: smirnoff,
            title: "Smirnoff Toska Vodka",
            price: 590, 
            alcoholPercentage: "Approx. 45%",
            detailedDescription: "Smirnoff Vodka is the largest vodka brand in the world. It is an ultra smooth vodka with a classic taste that has inspired other varieties of vodkas worldwide.",
        },
    };

// Products Highlight
const ProductHighlight = ({ 
    productTitle, 
    productImage, 
    productPrice,
    productAlcoholContent,
    productHighlightDescription }) => {

    const [ itemCount, setItemCount ] = useState(0);
    const incrementCount = () => setItemCount(itemCount + 1);
    const decrementCount = () => itemCount === 0 ? null : setItemCount(itemCount - 1)

    return (
        <Grid sx={{ borderRadius: 2, backgroundColor: 'white', p: 3 }} item container lg={6}>
            <Grid item lg={4}>
                <Card sx={{ display: 'flex' }} >
                    <CardMedia 
                    sx={{ 
                        p: 1 , 
                        height: 400, 
                        width: 400,
                        objectFit: 'contain' 
                    }} 
                    component="img" 
                    image={productImage} />
                </Card>
            </Grid>
            <Grid 
            item 
            container 
            lg={8} 
            alignContent='space-between'
            sx={{ pt: 8, pb: 2 }}
            >
                <Grid item lg={12}>
                    <Typography 
                    variant='h4'
                    sx={{
                        fontFamily: "'Roboto Mono', monospace",
                        fontWeight: 'bold',
                        pr: 4,
                        pl: 4
                    }}
                    >
                        {productTitle}
                    </Typography>
                    <Typography 
                    variant='body1'
                    sx={{
                        pt: 2,
                        pr: 4,
                        pl: 4
                    }}
                    >
                        {productHighlightDescription}
                    </Typography>
                </Grid>
                <Grid item lg={12}>
                    <Box
                    sx={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                        <IconButton onClick={decrementCount}><RemoveIcon /></IconButton>
                        <Typography sx={{ pr: 1, pl: 1, display: 'flex', alignSelf: 'center' }} variant='h5'>{itemCount}</Typography>
                        <IconButton sx={{ mr: 1 }} onClick={incrementCount}><Add /></IconButton>
                        <Button sx={{ 
                            color: '#E53535',
                            border: '1px solid #E53535',
                            mr: 1,
                            ml: 1,
                            pr: 2,
                            pl: 2
                        }}>
                            Add to Cart
                        </Button>
                        <Button sx={{ 
                            color: '#EEE',
                            backgroundColor: '#E53535',
                            mr: 1,
                            ml: 1,
                            pr: 2,
                            pl: 2,
                            '&:hover': {
                                backgroundColor: '#CD1A1A',
                                color: 'white'
                            }
                        }}>
                            Proceed to Checkout
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <Grid 
            item 
            container 
            lg={4}
            sx={{ 
                justifyContent: 'center', 
                alignContent: 'center'
            }}
            >
                <Typography 
                sx={{
                    font: "40px 'Roboto Mono', monospace",
                    wordSpacing: '-16px',
                    pt: 2
                }}>
                    ₱ {productPrice}
                </Typography>
            </Grid>
            <Grid 
            item 
            container 
            lg={8}
            sx={{ justifyContent: 'end' }}
            >
                <Box>
                    <Typography  
                    variant='h6' 
                    sx={{ 
                        pt: 2,
                        pr: 2,
                        textAlign: 'right',
                    }}>
                        Alcohol Content:
                    </Typography>
                    <Typography 
                    variant='h6' 
                    sx={{ 
                        textAlign: 'right',
                        pr: 2
                    }}>
                        {productAlcoholContent}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )   
}

// Share Menu
const ProductSharingMenu = ({ anchor, open, handleClose }) => {
    return (
        <Menu
        anchorEl={anchor}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
            elevation: 0,
            sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
                },
            },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem>
            <InstagramIcon sx={{ pr: 1 }} /> Instagram
            </MenuItem>
            <MenuItem>
            <TwitterIcon sx={{ pr: 1 }} /> Twitter
            </MenuItem>
            <MenuItem>
            <FacebookIcon sx={{ pr: 1 }} /> Facebook
            </MenuItem>
        </Menu>
    )
}

// Product Cards
const ProductCard = ({ 
    productTitle, 
    productImage,
    productPrice, 
    productAlcoholContent, 
    productHighlightDescription,
    productIndex, }) => {
    
    // Modal Settings
    const [ modalOpen, setModalOpen ] = useState(false);
    const toggleModalOpen = () => setModalOpen(!modalOpen);

    // Sharing Functions
    const [ anchorEl, setAnchorEl ] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //Product Likes Functions
    const [ likeCount, setLikeCount ] = useState(0);
    const [ likeState, setLikeState ] = useState(false);
    const handleLike = () => {
        setLikeCount(likeState ? likeCount - 1 : likeCount + 1)
        setLikeState(!likeState)
    }

    return (
        <Grid
        item
        container
        xs={10} sm={6} md={4} lg={3} 
        key={productIndex} 
        justifyContent='center'>
            <Card  
            variant="outlined" 
            className="card">
                <CardHeader 
                action={
                    <>
                        <IconButton>
                            {likeCount}
                        </IconButton>
                        <Tooltip title="Like Button">
                            <IconButton sx={{ color: '#E53535' }} onClick={handleLike}>
                                {likeState ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Sharing Options">
                            <IconButton
                                color='primary'
                                aria-controls={open ? 'account-menu' : undefined}
                                onClick={handleClick}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                            >
                                <ShareIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Add to Cart">
                            <IconButton
                            onClick={toggleModalOpen}>
                                <AddIcon />
                            </IconButton>
                        </Tooltip>
                    </>
                } />
                <Box 
                onClick={toggleModalOpen} 
                sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <CardMedia 
                    sx={{ minWidth: 0.5 }}
                    component="img" 
                    image={productImage}
                    />
                </Box>
                <Box
                onClick={toggleModalOpen} 
                >
                    <CardContent 
                    onClick={toggleModalOpen}
                    className="card-text">
                        <Typography 
                        sx={{ fontWeight: 'bold', fontFamily: 'Roboto Mono, monospace' }} 
                        variant="h5"
                        >
                            {productTitle}
                        </Typography>
                        <Typography 
                        sx={{ pt: 2 }} 
                        variant="body1"
                        >
                            {productAlcoholContent}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
            
            <ModalComponent
            className="product-highlight-modal"
            open={modalOpen}
            close={toggleModalOpen}
            renderContent={
                <ProductHighlight
                productTitle={productTitle}
                productImage={productImage}
                productPrice={productPrice}
                productAlcoholContent={productAlcoholContent}
                productHighlightDescription={productHighlightDescription}
                />
            }/>

            <ProductSharingMenu 
            anchor={anchorEl} 
            open={open} 
            handleClose={handleClose} 
            />
            
        </Grid>
    )
}

// Products Showcase
const Products = () => {
    return Object.keys(content).map((product, index) => {
        console.log(content[product].title);

        const productTitle = content[product].title;
        const productImage = content[product].image;
        const productPrice = content[product].price;
        const productAlcoholContent = content[product].alcoholPercentage;
        const productHighlightDescription = content[product].detailedDescription;

        return <ProductCard 
        productTitle={productTitle}
        productImage={productImage}
        productPrice={productPrice}
        productAlcoholContent={productAlcoholContent}
        productHighlightDescription={productHighlightDescription}
        productIndex={index}
        />
    })
}

//Shop Page Component
const Shop = () => {
    return (
        <Grid container className="shop" spacing={2}>
            <Products />
        </Grid>
    );
};

export default Shop;