import * as React from 'react';
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
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const SideDrawer = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className='drawer'>

        <Link to='/'>
          <ListItem button key='Overview'>
            <ListItemIcon>
              <NotStartedIcon />
            </ListItemIcon>
            <ListItemText primary='Overview' />
          </ListItem>
        </Link>

        <Link to='/speccup-demo'>
          <ListItem button key='Try Demo'>
            <ListItemIcon>
              <RemoveRedEyeIcon />
            </ListItemIcon>
            <ListItemText primary='Try Demo' />
          </ListItem>
        </Link>

        <Link to='/disclaimer'>
          <ListItem button key='Disclaimer'>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary='Disclaimer' />
          </ListItem>
        </Link>

      </List>
      <Divider />
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
        <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
        <Drawer
          anchor='left'
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default SideDrawer;