import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import AnimatedHoverWrapper from 'components/AnimatedHoverWrapper';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { pages } from 'utils/pages';
import './NavBar.css';
import { INavBar } from './types';

const NavBar: INavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleCloseNavMenu = (route: string) => {
    setAnchorElNav(null);
    navigate(route);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <AppBar color="secondary" position="sticky" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page, index) => (
              <MenuItem
                key={index}
                onClick={() => handleCloseNavMenu(page.route)}
              >
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          spacing={3}
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
          }}
        >
          <AnimatedHoverWrapper route="/" isLogo={true}>
            Shy.X
          </AnimatedHoverWrapper>
          <AnimatedHoverWrapper route="/projects">
            Projects
          </AnimatedHoverWrapper>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
