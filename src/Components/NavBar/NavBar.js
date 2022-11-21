import React from 'react'
import { AppBar, Box, Toolbar, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import MenuBar from './MenuBar'
import profileImage from '../Images/photo.jpeg'

const NavBar = () => {
    return (
        <Box>
            <AppBar position="sticky" elevation={0}
                sx={{
                    backgroundColor: '#fff',
                    width: '100%',
                    color: "#2E2E2E",
                    marginBottom: '1.5rem'
                }}>
                <Toolbar sx={{
                    margin: { xs: '0px 0px 0px 0px', sm: '0px 0px 0px 0px', md: '0px 20px 0px 20px', lg: '0px 40px 0px 40px', xl: '50px 40px 50px 40px' },
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                }}>
                    <Grid container spacing={12} style={{
                        display: 'flex',
                        maxWidth:'98%'
                    }}>
                        <Grid item xs={8} lg={4}
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}>
                            <img src={profileImage} alt='#' style={{
                                // margin: 'auto',
                                display: 'block',
                                width: '2rem',
                                height: '2rem',
                                borderRadius: '1.5rem',
                                mr: 4,
                            }} />
                            <Typography variant='h5'
                                sx={{
                                    ml: 1,
                                    fontSize: { xs: '1.3rem', lg: '1.563rem' },
                                    fontFamily:'italics', 
                                    fontWeight:'bold'
                                    

                                }}>Daphne</Typography>
                        </Grid>
                        <Grid item lg={8} style={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}>
                            <Link to="/" style={{ textDecoration: "none" }}><Typography variant='h6' sx={{ mr: 8, display: { xs: 'none', lg: 'block' } }}>Home</Typography></Link>
                            <Link to="/about" style={{ textDecoration: "none" }}><Typography variant='h6' sx={{ mr: 8, display: { xs: 'none', lg: 'block' } }}>About</Typography></Link>
                            <Link to="/projects" style={{ textDecoration: "none" }}><Typography variant='h6' sx={{ mr: 8, display: { xs: 'none', lg: 'block' } }}>Projects</Typography></Link>
                            <Link to="/" style={{ textDecoration: "none" }}><Typography variant='h6' sx={{ mr: 8, display: { xs: 'none', lg: 'block' } }}>Resume</Typography></Link>
                            <MenuBar sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' }, }} />
                        </Grid>
                    </Grid>
                </Toolbar>

            </AppBar>

        </Box>

    )
}

export default NavBar