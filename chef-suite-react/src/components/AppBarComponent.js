import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Button, Select, MenuItem, FormControl } from '@mui/material';
import { RestaurantMenu } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

function AppBarComponent({onClickMenuButton, pages}) {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  return (
    <>
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <RestaurantMenu sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.1rem'
              }}
            >Chef Suite</Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => onClickMenuButton(page)}
                  sx={{ my: 2, color: 'inherit', display: 'block' }}
                >
                  {t(`menu.${page.toLowerCase()}`)}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={i18n.language?.split('-')[0] || 'en'}
                  onChange={handleChangeLanguage}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  sx={{ color: 'white', '& .MuiSelect-icon': { color: 'white' }, '&:before': { borderBottom: 'none' }, '&:after': { borderBottom: 'none' }, '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' } }}
                >
                  {languages.map((lang) => (
                    <MenuItem key={lang.code} value={lang.code}>
                      {lang.flag} {lang.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default AppBarComponent;