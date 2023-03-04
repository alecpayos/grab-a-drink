// Declarations
const accountButtons = document.querySelectorAll('.fa-user-circle');
const loginContainer = document.querySelector('.login-container');
const loginExit = document.querySelector('.fa-times');
const revealPassword = document.querySelectorAll('.fa-eye, input[type="password"]');
const forgotPassword = document.querySelector('.forgot');
const formAllContent = document.querySelectorAll('.login *');
const incomingFeatures = document.querySelector('.incoming');
const headerTabs = document.querySelectorAll('.homebar-buttons');
const homebar = document.querySelector('.home-bar');
const shopWrapper = document.querySelector('.shop-wrapper');
const shopBackButton = document.querySelector('.fa-arrow-alt-circle-left');
const highlightContainer = document.querySelector('.highlight-container img');
const liquorTabs = document.querySelectorAll('.liquor-tabs');
const liquorImageContainers = document.querySelectorAll('.image');
const offerContexts = document.querySelectorAll('.first-offer, .second-offer');
const liquorDescription = document.querySelector('.liquor-description');
const alcoholLevel = document.querySelector('.alcohol-level');
const contentDiv = document.querySelector('.content');
const membershipRegistration = document.querySelectorAll('.membership-button, .membership-container');
const price = document.querySelector('.price');
const addToCart = document.querySelector('.add-to-cart');
const cartCounter = document.querySelectorAll('.cart-icon-counter');
const cartButton = document.querySelectorAll('.fa-shopping-cart');
const cartWrapper = document.querySelector('.cart-wrapper');
const cartBackButton = document.querySelectorAll('.fa-arrow-left');
const contactWrapper = document.querySelector('.contact-wrapper');
const toMain = document.querySelector('#to-main-button');
const contactButtons = document.querySelectorAll('.contact-info-buttons');
const total = document.querySelector('.total');
const checkoutItems = document.querySelector('.checkout-item');
const checkoutForm = document.querySelector('.checkout-form');
const checkoutFormOverlay = document.querySelector('.checkout-form-overlay');
const checkoutContent = document.querySelector('.checkout-content');
const itemName = document.querySelectorAll('.item-name');
const itemPrice = document.querySelectorAll('.item-price');
const deleteItem = document.querySelector('.fa-trash-alt');
const checkout = document.querySelector('.checkout-button');
const oneTimeButton = document.querySelector('.otp')
const fieldInputs = document.querySelectorAll('.membership-inputs')
const omwItems = document.querySelectorAll('.otp-and-membership-wrapper, .overlay-contents, .omw-button, .overlays')
const payment = document.querySelectorAll('.cash, .credit');
const cardField = document.querySelector('.credit-card');
const checkoutTotal = document.querySelector('.checkout-total');
const overlayArrow = document.querySelector('#overlay-arrow')
const discountArea = document.querySelector('.discount-area');
const userInfo = document.querySelectorAll('.location, .contact-number');
const placeOrder = document.querySelectorAll('.place-order, .purchase-message');
const finalButton = document.querySelector('#final-message');

const clearLiquors = [
    "https://scontent.fceb2-1.fna.fbcdn.net/v/t1.15752-9/240272937_175831544621452_9137389737497924653_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeHNiag7TvW2ynlGsUXnPZfwotwZQd1BYVCi3BlB3UFhUDYgVzWNpYwCHmhcfgsaehISeRg8Rwt9bh2Qw6cbv1Ru&_nc_ohc=cDQbbGBeN6oAX-GnvG7&tn=HtAS_3yftlKiKdSe&_nc_ht=scontent.fceb2-1.fna&oh=e25c52ac926b017418f22c8ebdb1dfdc&oe=614D296C",
    "https://scontent.fceb2-1.fna.fbcdn.net/v/t1.15752-9/240699200_4279591432158650_6411345118323931817_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeG5BEdHqtaMxGJmohGZvqHs9Zo0Y6vhc771mjRjq-FzvvEPdu1zhrbLx-ENAPuWBNU7flWzrf90wHi5lls8Q6Aq&_nc_ohc=fZIkg8UJV0EAX-0YXRB&_nc_ht=scontent.fceb2-1.fna&oh=4b94c423a720e3668fa3131d8dcedbca&oe=614A187F",
    "https://scontent.fceb2-1.fna.fbcdn.net/v/t1.15752-9/234803150_530359014958009_7849772438261379723_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFqkIY7yg8UAZlyXbVwZY1-gFlxob4-_A2AWXGhvj78DSI1eUMB_-nueYCRClvxD0azi89gVqzw9i2nwofUm08f&_nc_ohc=ZDYpsbh0OKoAX_fAlkM&_nc_ht=scontent.fceb2-1.fna&oh=cd1b4dcbd1bd7f4043efdd4bb36de899&oe=614BA8D3",
    "https://scontent.fceb2-1.fna.fbcdn.net/v/t1.15752-9/240473735_841872570053187_3968918184451750065_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEauzSHJirAuPZyMtadUO0ZCieNSs-4KpcKJ41Kz7gqlz3itUxdeu-s_5oPKZ0YuzQGaC7jVRK-Z7QH-2oyKA6D&_nc_ohc=A79ouEN76cwAX-FztzU&_nc_ht=scontent.fceb2-1.fna&oh=7afe6865bbcecfe884f4fbccec79d004&oe=614A6AEA"
];

const darkLiquors = [
    "https://scontent.fceb2-1.fna.fbcdn.net/v/t1.15752-9/239477088_530851044638448_46013044902466474_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeHm7-iB3MCzkdSbCQgcIK5h1YX-FZ9wbrrVhf4Vn3BuuqPJBpETJL-rYnJ3y0VS2GsqEJPPdX8UQfslYAEllHVd&_nc_ohc=-SwjFXESi8oAX9mKDKo&_nc_ht=scontent.fceb2-1.fna&oh=b59d343d579be15b091048ee32abf3fc&oe=614AF93E",
    "https://scontent.fceb2-2.fna.fbcdn.net/v/t1.15752-9/238592406_432857631342129_3494155930235578286_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFu1dPpJ_8Y2d_zAjkBGDhQxFhqCgzEM0rEWGoKDMQzSjIwwyhDmTqZCAWGWkEuz5jWMvZ395uu-quSV2V0iwOq&_nc_ohc=fHIscDZHnZAAX9MieXx&_nc_ht=scontent.fceb2-2.fna&oh=567937f88127fc0a233b6b68f97f27de&oe=614B0669",
    "https://scontent.fceb2-1.fna.fbcdn.net/v/t1.15752-9/235284495_826077844720985_5116463482740530784_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFQUIf_tf4rUa5XPGUPPjTMFkMShAkk7eoWQxKECSTt6vwph7GqMdg1Y697fkaA-LwrSGRpieWT6EoK6Y8V_zN0&_nc_ohc=VafsErDUdAUAX8OIMPE&_nc_ht=scontent.fceb2-1.fna&oh=85b3982010c3753161a65b851376a3a4&oe=614B993A",
    "https://scontent.fceb2-2.fna.fbcdn.net/v/t1.15752-9/238356923_143393257950095_4146773712372037830_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEJ8rlZEUcee-He7uRsZk1TL2XWkalg8kIvZdaRqWDyQslomj89faV9tBRVkql6IlPteuwxB_UWITemWKZ_wm3H&_nc_ohc=twh394aDR7cAX8FhrR2&_nc_ht=scontent.fceb2-2.fna&oh=007cf8ca1ea526c356875f7c841337cb&oe=614B0BBE"
];

const specialLiquors = [
    "https://scontent.fceb2-1.fna.fbcdn.net/v/t1.15752-9/238242675_2039791622835135_4659245185429690496_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEsZlM7FAqURJG0Rt_7eVTojC2oe4ffwFCMLah7h9_AUFZMlzm22vHiXxcHCuvZ08geczdBK2-OmSv9-JZ7iVuT&_nc_ohc=aVoYoHWkvy8AX8VR-Z8&tn=HtAS_3yftlKiKdSe&_nc_ht=scontent.fceb2-1.fna&oh=b85f89b90d603a46b64c408c0351d16b&oe=6149FA6C",
    "https://scontent.fceb2-2.fna.fbcdn.net/v/t1.15752-9/237754701_4478817435502199_1071773545374131673_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFRnZp9_dpKxtYpthnjXE7aorGlbNLGja6isaVs0saNrmWuUMUP2CGnJHe5dabRcSaIeDRydH211KiZkS8arwOA&_nc_ohc=ll9trxn_gAgAX8wcQz5&_nc_ht=scontent.fceb2-2.fna&oh=96f41a19bfb22fe212d11fb711cea6d7&oe=614B2CC9",
    "https://scontent.fceb2-2.fna.fbcdn.net/v/t1.15752-9/238660242_527332028553777_7105950619107998689_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeHV_onAbz_OVRJMYU4D_da4-iHofe7eHfH6Ieh97t4d8cqA021ebIRKvz6WVcXnW-0P8a3Jjs8hbpjSrykXdv5v&_nc_ohc=0rbHtDCqAeEAX_Nbjuf&_nc_ht=scontent.fceb2-2.fna&oh=6a3b97357226e0ebdcd6709dbec47624&oe=614CEEE0",
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/239621213_1023045431794943_3632360029084408472_n.png?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGREVxDrkWifNIvKmQE0mwZN626RjTnAD43rbpGNOcAPlcJL1dkyxCuZ9FE2tlzQlNfNcR6BexE12mht6wf6o7s&_nc_ohc=6nmVPlh_6AQAX8KWP2t&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=07796a2e5d54f3e9d1dfd786a3f3189d&oe=614B71B6"
];

let priceDisplay = 0;
let cartCount = 0;
let sourceList = [];
const prices = [170, 720, 875, 1790, 695, 1490, 750, 1190, 1895, 500, 1795, 600];
const liquorNames = ["GIN", "RUM", "TEQUILA", "VODKA", "BRANDY", "WHISKEY", "BOURBON", "SCOTCH WHISKEY", "ABSINTHE", "SCHNAPPS", "SAKE", "HERBAL VODKA"]
const flatFunction = () => {
    [clearLiquors, darkLiquors, specialLiquors].map(category => {
        category.map(source => {
            sourceList.push(source);
        })
    })
}
const shopSlide = () => {
    offerContexts[0].parentElement.classList.add('display')
    shopWrapper.classList.toggle('shop-wrapper-position')
    shopWrapper.classList.add('slide');
    shopWrapper.classList.toggle('shop-wrapper-slide-in');
}

//Function code
const omw = () => {
    console.log(omwItems);
    oneTimeButton.addEventListener('click', () => {
        [omwItems[1], omwItems[2], omwItems[5]].forEach(content => {
            content.classList.toggle('no-display');
            content.classList.toggle('display');
        })
    })
    omwItems[2].addEventListener('click', () => {
        shopSlide();
        checkout.classList.remove('member-tag');
        checkout.classList.add('otp-tag');
    })
    omwItems[4].addEventListener('click', () => {
        shopSlide();
        checkout.classList.remove('otp-tag');
        checkout.classList.add('member-tag');
    })
    shopWrapper.addEventListener('transitionend', () => {
        [omwItems[1], omwItems[2], omwItems[3], omwItems[4], omwItems[5]].forEach(content => {
            content.classList.add('no-display');
            content.classList.remove('display');
        })
    })
    membershipRegistration[1].addEventListener('click', () => {
        [omwItems[3], omwItems[4], omwItems[5]].forEach(content => {
            membershipRegistration[1].classList.remove('no-display');
            membershipRegistration[1].classList.add('display');
            content.classList.toggle('no-display');
            content.classList.toggle('display');
        })
    })
}

const aboutUsPage = () => {
    toMain.addEventListener('click', () => {
        contactWrapper.classList.add('slide');
        contactWrapper.classList.add('contact-wrapper-position');
    })
    contactButtons[0].addEventListener('click', () => {
        contactWrapper.classList.remove('slide');
        contactWrapper.classList.remove('contact-wrapper-position');
    })
}
const headerButtonsUnderline = () => {
    headerTabs.forEach(button => {
        button.addEventListener('click', event => {
            headerTabs.forEach(button => {
                button.classList.remove('init');
            })
            event.target.classList.toggle('init');    
        })
    })
}

const headerButton = () => {
    homebar.addEventListener('click', event => {
        if(event.target.textContent === "Membership") {
            contentDiv.classList.toggle('slide');
            contentDiv.classList.toggle('content-div-position')
            contentDiv.classList.toggle('content-div-slide-out');
            membershipRegistration[0].classList.add('slide');
            membershipRegistration[0].classList.toggle('membership-container-position')
            membershipRegistration[0].classList.toggle('membership-container-slide-in');
        } else if(event.target.textContent === "Home") {
            location.reload();
        }
    })
    headerTabs[2].addEventListener('click', () => {
        shopSlide();
        checkout.classList.add('otp-tag');
    })
}

const login = () => {
    accountButtons.forEach(button => {
        button.addEventListener('click', () => {
            loginContainer.classList.toggle('display')
        })
    })
    loginExit.addEventListener('click', () => {
        loginContainer.classList.toggle('display')
        if(incomingFeatures.classList.contains('display')) {
            incomingFeatures.classList.toggle('display');
            formAllContent.forEach(item => {
                item.classList.toggle('no-display');
            })
        }
    })
    revealPassword[0].addEventListener('click', () => {
        revealPassword[0].classList.toggle('fa-eye-slash');
        if(revealPassword[1].type === "password") {
            revealPassword[1].type = "text";
        } else {
            revealPassword[1].type = "password";
        }
    })
    forgotPassword.addEventListener('click', () => {
        formAllContent.forEach(item => {
            item.classList.toggle('no-display');
        })
        incomingFeatures.classList.toggle('display');
        loginExit.classList.remove('no-display')
    })
}

const shopFunctions = () => {
    cartCounter.forEach(counter => {
        counter.textContent = cartCount;
    })
    shopBackButton.addEventListener('click', () => {
        shopWrapper.classList.toggle('shop-wrapper-position')
        shopWrapper.classList.toggle('shop-wrapper-slide-in');  
        headerTabs.forEach(tab => {
            tab.classList.remove('init');
        })
        headerTabs[1].classList.add('init');
    })
    liquorTabs.forEach(tab => {
        tab.addEventListener('click', event => {
            liquorDescription.classList.remove('display');
            if(offerContexts[1].classList.contains('display')) {
                liquorDescription.classList.add('no-display');
                highlightContainer.src = "https://z-p3-scontent.fceb1-2.fna.fbcdn.net/v/t1.15752-9/237433883_174032898134539_6065605090279927236_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeELX7XbrilV129BrJs5MAOriQWRL3VnQNqJBZEvdWdA2k255GKOw8OmFLSMd5MB1mt7PtXme9x_rv5kBy98T0YV&_nc_ohc=9yGVAmywSDEAX9dCXI1&_nc_ht=z-p3-scontent.fceb1-2.fna&oh=5515b426ffa8676cca532d55d4c11411&oe=614AD31D";
                price.classList.remove('display');
                price.classList.add('no-display');
                addToCart.classList.remove('-display');
                addToCart.classList.add('no-display');
            }
            alcoholLevel.classList.remove('display');
            alcoholLevel.classList.add('no-display');
            offerContexts[0].parentElement.classList.remove('no-display');
            offerContexts[0].parentElement.classList.add('display');
            offerContexts[0].classList.remove('display');
            offerContexts[0].classList.add('no-display');
            offerContexts[1].classList.remove('no-display');
            offerContexts[1].classList.add('display');
            if(event.target.textContent === "SPECIAL SPIRITS") {
                liquorImageContainers.forEach((container, index) => {
                    container.src = specialLiquors[index];
                })
            } else if(event.target.textContent === "DARK SPIRITS") {
                liquorImageContainers.forEach((container, index) => {
                    container.src = darkLiquors[index];
                })
            } else if(event.target.textContent === "CLEAR SPIRITS") {
                liquorImageContainers.forEach((container, index) => {
                    container.src = clearLiquors[index];
                })
            }
        })
    })
    liquorImageContainers.forEach(image => {
        image.addEventListener('click', event => {
            if(event.target.src !== "") {
                highlightContainer.src = image.src;
                offerContexts[0].parentElement.classList.remove('display');
                offerContexts[0].parentElement.classList.add('no-display');
            }
            if(sourceList.includes(event.target.src)) {
                alcoholLevel.classList.remove('no-display');
                alcoholLevel.classList.add('display');
                price.classList.remove('no-display');
                price.classList.add('display');
                addToCart.classList.remove('no-display');
                addToCart.classList.add('display');
                liquorDescription.classList.remove('no-display');
                liquorDescription.classList.add('display');
                switch(sourceList.indexOf(event.target.src)) {
                    case 0:
                        liquorDescription.textContent = `This spirit has a predominant flavor of earthiness from roots and tanginess from juniper berries`
                        alcoholLevel.textContent = "Alcohol level: 35%"
                        price.textContent = "₱ 170"
                        break
                    case 1:
                        liquorDescription.textContent = `Rum is characterized by its coconut aroma mixed with sweetness from molasses derived from sugarcanes`
                        alcoholLevel.textContent = "Alcohol level: 35%"
                        price.textContent = "₱ 720"
                        break
                    case 2:
                        liquorDescription.textContent = `The flavor is dominated by the aroma of ajave juice and a hint of grapefruit. It is best accompanied by a wedge of lemon or any other citrus`
                        alcoholLevel.textContent = "Alcohol level: 40%"
                        price.textContent = "₱ 875"
                        break
                    case 3:
                        liquorDescription.textContent = `The taste of earthiness from rye highlights the flavor of vodka, with fruit additives that give it sweetness`
                        alcoholLevel.textContent = "Alcohol level: 40%"
                        price.textContent = "₱ 1790"
                        break
                    case 4:
                        liquorDescription.textContent = `The sweet taste of grapes and the aroma of other fruit mash gives the brandy its smooth taste`
                        alcoholLevel.textContent = "Alcohol level: 40%"
                        price.textContent = "₱ 695"
                        break
                    case 5:
                        liquorDescription.textContent = `The combination of grains (rye, barley, wheat) gives a mild sweetness yet has a rich earthy flavor`
                        alcoholLevel.textContent = "Alcohol level: 40%"
                        price.textContent = "₱ 1490"
                        break
                    case 6:
                        liquorDescription.textContent = `The richness of corn flavor gives bourbon a distinct taste in comparison to whiskey, but both share earthy flavor notes from grains`
                        alcoholLevel.textContent = "Alcohol level: 40%"
                        price.textContent = "₱ 750"
                        break
                    case 7:
                        liquorDescription.textContent = `The iconic smokiness of scotch is what gives it its enjoyable taste, along with earthy flavors from grains and a hint of vanilla flavors`
                        alcoholLevel.textContent = "Alcohol level: 40%"
                        price.textContent = "₱ 1190"
                        break
                    case 8:
                        liquorDescription.textContent = `The complex concoction of herbs, anise, and wormwood oil gives it a soothing, licorice-like flavor`
                        alcoholLevel.textContent = "Alcohol level: 45%"
                        price.textContent = "₱ 1895"
                        break
                    case 9:
                        liquorDescription.textContent = `As a fruit-based spirit, schnapps gets its flavor based on the fruit used – popular choices are pears or apple`
                        alcoholLevel.textContent = "Alcohol level: 20%"
                        price.textContent = "₱ 500"
                        break
                    case 10:
                        liquorDescription.textContent = `The sake is highlighted by its nutty flavor due to its flavors being derived from rice`
                        alcoholLevel.textContent = "Alcohol level: 20%"
                        price.textContent = "₱ 1795"
                        break
                    case 11:
                        liquorDescription.textContent = `Simple dimple pop it squish, pop it squish,  what? M, a-a if your head hurts`
                        alcoholLevel.textContent = "Alcohol level: 40%"
                        price.textContent = "₱ 600"
                        break
                }
            }
        })
    })
    addToCart.addEventListener('click', (event) => {
        cartCount += 1;
        cartCounter.forEach(counter => {
            counter.textContent = cartCount;
        })
        priceDisplay += parseInt(price.textContent.match(/\d/g).join(""));
        total.textContent = "₱ " + priceDisplay + ".00";
        checkoutContent.innerHTML += "<div class='checkout-item'><div class='item-name'>"+ liquorNames[sourceList.indexOf(highlightContainer.src)] +"</div><div class='item-price'>₱ "+ prices[sourceList.indexOf(highlightContainer.src)] +`</div><i class="far fa-trash-alt"></i></div>`;
    })
    checkoutContent.addEventListener('click', event => {
        if(event.target.classList.contains('fa-trash-alt')) {
            event.target.parentNode.remove();
            priceDisplay -= parseInt(event.target.previousSibling.textContent.match(/\d/g).join(""));
            total.textContent = "₱ " + priceDisplay + ".00";
            cartCount -= 1;
            cartCounter.forEach(counter => {
                counter.textContent = cartCount;
            })
        }
    })
}
const cartUIFunctions = () => {
    cartButton.forEach(button => {
        button.addEventListener('click', () => {
            cartWrapper.classList.remove('no-display');
            cartWrapper.classList.add('display');
            checkoutForm.classList.add('display');
            placeOrder[1].classList.remove('dis[play');
            placeOrder[1].classList.add('no-display');
            checkoutForm.classList.remove('no-display');
            checkoutForm.classList.add('display');
        })
    })
    cartBackButton.forEach(button => {
        button.addEventListener('click', () => {
            cartWrapper.classList.remove('display');
            cartWrapper.classList.add('no-display');
            checkoutFormOverlay.classList.remove('display');
            checkoutFormOverlay.classList.add('no-display');
        })
    })
}

const checkoutFunction = () => {
    placeOrder[0].addEventListener('click', () => {
        if(userInfo[0].value === "" || userInfo[1].value === "") {
            alert("Address or contact number cannot be empty!")
        } else {
            checkoutFormOverlay.classList.remove('display');
            checkoutFormOverlay.classList.add('no-display');
            placeOrder[1].classList.remove('no-display');
        }
    })
    overlayArrow.addEventListener('click', () => {
        console.log(true);
        cartWrapper.classList.remove('no-display');
        cartWrapper.classList.add('display');
        checkoutFormOverlay.classList.remove('display');
        checkoutFormOverlay.classList.add('no-display');
        checkoutForm.classList.remove('no-display');
        checkoutForm.classList.add('display');
    })
    checkout.addEventListener('click', () => {
        if(total.textContent === "₱ 0.00") {
            alert("You have nothing in your cart!")
        } else if(checkout.classList.contains('otp-tag')) {
            checkoutForm.classList.add('no-display');
            checkoutForm.classList.remove('display');
            checkoutFormOverlay.classList.remove('no-display');
            checkoutFormOverlay.classList.add('display');
            checkoutTotal.textContent = `Total P ` + priceDisplay;
        } else if(checkout.classList.contains('member-tag')) {
            checkoutForm.classList.add('no-display');
            checkoutForm.classList.remove('display');
            checkoutFormOverlay.classList.remove('no-display');
            checkoutFormOverlay.classList.add('display');
            discountArea.textContent = `${priceDisplay} -${priceDisplay * 0.1}`
            checkoutTotal.textContent =  `Total P` + (priceDisplay - priceDisplay * 0.1);
        }
    })
    payment[0].addEventListener('click', (event) => {
        payment[1].classList.remove('powder')
        event.target.classList.add('powder')
        cardField.classList.add('no-display');
        cardField.classList.remove('display');
    })
    payment[1].addEventListener('click', (event) => {
        payment[0].classList.remove('powder')
        event.target.classList.add('powder')
        cardField.classList.remove('no-display');
        cardField.classList.add('display');
    })
    finalButton.addEventListener('click', () => {
        location.reload();
    })
}

// Driver code
headerButtonsUnderline();
headerButton();
login();
shopFunctions();
cartUIFunctions();
aboutUsPage();
flatFunction();
checkoutFunction();
omw();