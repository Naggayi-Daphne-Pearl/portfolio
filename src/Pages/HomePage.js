import { Grid, Container, Typography, List, ListItemIcon, ListItemButton, Box, CssBaseline, Button } from '@mui/material'
import React from 'react'
import { GitHub, Twitter, LinkedIn, Email } from '@mui/icons-material';
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="70%" sx={{ bgcolor: 'var(--white)' }}>
        <Box sx={{ bgcolor: 'var(--backgroundColor)', height: '100vh' }}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <List style={{
                backgroundColor: '#fff',
                width: '4rem',
                color: "#2E2E2E",
                margin: '6rem 0',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <ListItemButton href="https://github.com/Naggayi-Daphne-Pearl">
                  <ListItemIcon style={iconStyle}><GitHub /></ListItemIcon>
                </ListItemButton>

                <ListItemButton href="https://twitter.com/naggayi_pearl">
                  <ListItemIcon style={iconStyle}><Twitter /></ListItemIcon>
                </ListItemButton>

                <ListItemButton href="https://www.linkedin.com/in/daphne-naggayi-68070b185/">
                  <ListItemIcon style={iconStyle}><LinkedIn /></ListItemIcon>
                </ListItemButton>

                <ListItemButton href="https://mail.google.com/mail/u/0/#inbox">
                  <ListItemIcon style={iconStyle}><Email /></ListItemIcon>
                </ListItemButton>
              </List>
            </Grid>
            <Grid item xs={10}
              sx={{
                maxWidth: '35em',
                margin: '6rem auto',
                alignItems: 'center',
                justifyContent: 'center'

              }}>
              <Grid
                sx={{
                  margin: '0% 10%',

                }}>
                <Typography variant='h4'>Hello there! My name is Daphne Naggayi <br style={{ marginLeft: '1rem' }} /> and I'm a front end developer</Typography>

              </Grid>
              {/* <Grid sx={{
                margin: '3% 10%',
                color: 'var(--primary-700)',
                maxWidth: '50%'

              }}>
                <Typography align='center' variant='h5'>
                  A front end focused web developer that is also still learning backend with the hope of being a full stack developer
                </Typography>

              </Grid> */}

              <Link to="/about" style={{ textDecoration: "none" }}>
                <Button variant="contained" style={buttonStyle}>ABOUT </Button>
              </Link>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </>
  )
}

const buttonStyle = {
  cursor: 'pointer',
  color: 'var(--white)',
  background: 'var(--primary-500)',
  border: 'transparent',
  borderRadius: 'var(--borderRadius)',
  padding: '0.5rem 2rem',
  boxShadow: 'var(--shadow-1)',
  transition: 'var(--transition)',
  textTransform: 'capitalize',
  display: 'inline-block',
  marginTop: '1rem',
  alignItems: 'center',
  fontWeight: 'bolder',
  marginLeft: '23%',
  fontSize: '1rem',

}

const iconStyle = {
  color: 'var(--primary-700)',
}



export default HomePage