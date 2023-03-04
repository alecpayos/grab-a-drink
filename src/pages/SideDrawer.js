import * as React from 'react';
import { Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArticleIcon from '@mui/icons-material/Article';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';

const SideDrawer = ({ drawerText, drawerImage, direction }) => {
  const [state, setState] = React.useState({
    left: false,
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const menuValues = {
    listItemLinks: {
      overview: "/",
      deals: "/membership",
      shop: "/shop",
      about: "/",
      contact: "contact",
      delivery: "/delivery-info",
      terms: "/terms",
      privacy: "/privacy-policy"
    },
    listItemTexts: {
      overview: "Overview", 
      deals: "Exclusive Deals", 
      shop: "Our Shop", 
      about: "About Us", 
      contact: "Contact Us", 
      delivery: "Delivery Info", 
      terms: "Terms of Use", 
      privacy: "Privacy Policy"
    },
    listItemKeys: {
      overview: "overview",
      deals: "exclusive-deals",
      shop: "shop",
      about: "about-us",
      contact: "contact-us",
      delivery: "delivery-info",
      terms: "terms",
      privacy: "privacy"
    },
    listItemIcons: {
      overview: <NotStartedIcon />,
      deals: <RemoveRedEyeIcon />,
      shop: <ArticleIcon />,
      about: <ArticleIcon />,
      contact: <ArticleIcon />,
      delivery: <ArticleIcon />,
      terms: <ArticleIcon />,
      privacy: <ArticleIcon />
    }
  }

  const list= (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="h4">Grab A Drink</Typography>
          </ListItemText>
        </ListItem>
      </List>
      {anchor === 'left' && 
        <List className='drawer'>
          <Divider />
          {Object.keys(menuValues.listItemLinks).map((index) => {
              return (
              <Link to={menuValues.listItemLinks[index]}>
                <ListItem button key={menuValues.listItemKeys[index]}>
                  <ListItemIcon>
                    {menuValues.listItemIcons[index]}
                  </ListItemIcon>
                  <ListItemText primary={menuValues.listItemTexts[index]} />
                </ListItem>
                <Divider />
              </Link>
              )
          })}
        </List>
      }
      {
        anchor === 'bottom' && 
        <List>
          <Typography variant='h1'>Insert Cart</Typography>
        </List>
      }
        <List> 
          <ListItem button key='SpeccUp © 2021'>
            <ListItemText primary='SpeccUp © 2021' />
          </ListItem>
        </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key='MobileMenu'>
        <Button onClick={toggleDrawer(direction, true)} endIcon={drawerImage}>{drawerText}</Button>
        <Drawer
          anchor={direction}
          open={state[direction]}
          onClose={toggleDrawer(direction, false)}
        >
          {direction === 'left' ? list('left') : list('bottom')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default SideDrawer;