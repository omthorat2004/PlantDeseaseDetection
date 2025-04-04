import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
const Navbar = () => {
  return (
    <AppBar position='static'>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography noWrap variant='h6' component='a' sx={{mr: 2,

              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',}} >
                    PlantGuard
                </Typography>
                <Box sx={{display:"flex",flexDirection:'row',gap:2}}>
                <Button variant="contained" sx={{ bgcolor: "white", color: "black", "&:hover": { bgcolor: "#f0f0f0" } }}>
Detect
</Button>
                <Button variant="contained" sx={{ bgcolor: "white", color: "black", "&:hover": { bgcolor: "#f0f0f0" } }}>
  History
</Button>

                </Box>

            </Toolbar>
        </Container>
    </AppBar>

  );
}

export default Navbar;
