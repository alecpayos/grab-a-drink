import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { colors } from './globals';
import { Row, Col, Typography, Menu, ConfigProvider, Anchor } from 'antd';
import { 
    HomeOutlined,
    RocketOutlined,
    DollarOutlined,
    UserAddOutlined,
    InfoCircleOutlined,
    PhoneOutlined,
    BookOutlined,
    FolderOpenOutlined
    } from '@ant-design/icons';

const Header = () => {
    const { Title } = Typography;
    const button = {
        textValues: [
            "Overview",
            "Features",
            "Promo Deals",
            "Membership",
            "Log In",
            "Sign Up"
        ],
        urlValues: [
            "promo-deals",
            "login",
            "register"
        ],
        targetURL(textValue) {
            switch(textValue) {
                case "Promo Deals":
                    return button.urlValues[0]
                case "Membership":
                    return button.urlValues[2]
                case "Log In":
                    return button.urlValues[1]
                case "Sign Up":
                    return button.urlValues[2]
                default:
                    return ""
            }
        }
    }

    const buttonGrid = {
        xs(value) {
            switch(value) {
                case "Log In":
                    return { span: 4, offset: 8 }
                case "Sign Up":
                    return 4
                default:
                    return 0
            }
        },
        sm(value) {
            switch(value) {
                case "Log In":
                    return { span: 3, offset: 0 }
                case "Sign Up":
                    return 3
                case "Promo Deals":
                    return 4
                case "Membership":
                    return 4
                default:
                    return 3
            }
        },
        md(value) {
            switch(value) {
                case "Log In":
                    return { span: 2, offset: 0 }
                case "Promo Deals":
                    return 4
                case "Membership":
                    return 4
                default:
                    return 3
            }
        },
        lg(value) {
            switch(value) {
                case "Log In":
                    return { offset: 4}
                case "Promo Deals":
                    return 3
                case "Membership":
                    return 3
                default:
                    return 2
            }
        },
        xl(value) {
            switch(value) {
                case "Log In":
                    return { span: 1, offset: 5 }
                default:
                    return 2
            }
        },
        xxl(value) {
            switch(value) {
                case "Log In":
                    return { span: 1, offset: 6 }
                case "Sign Up":
                    return { span: 2 }
                default: 
                    return ""
            }
        },
    }

    const RightBarMenu = () => {
        const [ open, setOpen ] = useState(true);
        const toggleOpen = () => setOpen(!open);

        return (
            <Col
            xs={{ span: 8, offset: 2 }}
            sm={{ span: 0 }}
            style={{ position: 'absolute' }}
            >
                <Anchor>
                    <div
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'flex-end'
                    }}>
                        <ConfigProvider direction='rtl'>
                            <Menu
                            mode='inline'
                            defaultSelectedKeys={['1']}
                            inlineCollapsed={open}
                            theme='dark'>
                                <Menu.Item key='1' icon={<HomeOutlined />}>
                                    Home
                                </Menu.Item>
                                <Menu.Item key='2' icon={<RocketOutlined />}>
                                    Features
                                </Menu.Item>
                                <Menu.Item key='3' icon={<DollarOutlined />}>
                                    Promos
                                </Menu.Item>
                                <Menu.Item key='4' icon={<UserAddOutlined />}>
                                    Membership
                                </Menu.Item>
                                <Menu.Item key='5' icon={<InfoCircleOutlined />}>
                                    About
                                </Menu.Item>
                                <Menu.Item key='6' icon={<PhoneOutlined />}>
                                    Contact
                                </Menu.Item>
                                <Menu.Item key='7' icon={<BookOutlined />}>
                                    Privacy Policy
                                </Menu.Item>
                                <Menu.Item key='8' icon={<FolderOpenOutlined />}>
                                    Terms of Use
                                </Menu.Item>
                            </Menu>
                        </ConfigProvider>
                    </div>
                </Anchor>
            </Col>
        );
    };

    const FeatureButtons = () => {
        const signUp = {
            padding: '8px 0',
            borderRadius: '32px',
            backgroundColor: colors.textColor.secondary,
            width: '1.3in',
            margin: '0 8px',
        }
        return button.textValues.map((textValue, index) => {
            return (
                <Col
                key={index}
                xs={buttonGrid.xs(textValue)}
                sm={buttonGrid.sm(textValue)}
                md={buttonGrid.md(textValue)}
                lg={buttonGrid.lg(textValue)}
                xl={buttonGrid.xl(textValue)}
                xxl={buttonGrid.xxl(textValue)}
                >
                    <Link to={'/' + (button.targetURL(textValue))}>
                        <div
                        style={textValue === "Sign Up" ? signUp : null}>
                            <Title 
                            style={{ 
                                textAlign: 'center', 
                                whiteSpace: 'nowrap',
                                marginBottom: 0,
                                color: textValue === "Sign Up" 
                                ? colors.textColor.support
                                : colors.textColor.primary
                            }} level={5}>
                                {textValue}
                            </Title>
                        </div>
                    </Link>
                </Col>
            )
        })
    }

    return (
        <>
            <Row
            style={{ 
                alignItems: "center",
                padding: '12px 0'
            }}
            >
                <Col 
                xs={{ span: 3, offset: 2 }}
                sm={{ span: 2, offset: 0 }}
                md={{ span: 1, offset: 2 }}
                lg={{ span: 2 }}
                xl={{ span: 1, offset: 3 }}
                >
                    <img alt='speccup logo' width={48} src={logo} />
                </Col>

                <FeatureButtons />
            </Row>
        </>
    );
}
 
export default Header;
