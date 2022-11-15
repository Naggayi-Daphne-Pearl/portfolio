import { Grid, Container, Typography, List, ListItemIcon, ListItemButton, Box, CssBaseline, Button } from '@mui/material'
import React from 'react'
import { GitHub, Twitter, LinkedIn, Email } from '@mui/icons-material';
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="70%" sx={{ bgcolor: 'var(--white)' }}>
        <Box sx={{ bgcolor: 'var(--backgroundColor)', height: '80vh' }}>
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
                  <ListItemIcon><GitHub /></ListItemIcon>
                </ListItemButton>

                <ListItemButton href="https://twitter.com/naggayi_pearl">
                  <ListItemIcon><Twitter /></ListItemIcon>
                </ListItemButton>

                <ListItemButton href="https://www.linkedin.com/in/daphne-naggayi-68070b185/">
                  <ListItemIcon><LinkedIn /></ListItemIcon>
                </ListItemButton>

                <ListItemButton href="https://mail.google.com/mail/u/0/#inbox">
                  <ListItemIcon><Email /></ListItemIcon>
                </ListItemButton>
              </List>
            </Grid>
            <Grid item xs={10}
              style={{
                maxWidth: '45em',
                margin: '6rem 6rem',
                alignItems: 'center',
                justifyContent: 'center'

              }}>
              <div>
                <Typography variant='h3' align="center">HEY, I AM DAPHNE NAGGAYI</Typography>
                <Typography variant='p'
                  sx={{ alignItems: 'center', marginTop: '1rem' }}>
                  A front end focused web developer that is also still learning backend with the hope of being a full stack developer
                </Typography>
              </div>

              <Link to="/projects" style={{ textDecoration: "none" }}>
                <Button variant="contained" style={buttonStyle}>Projects</Button>
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
  letterSpacing: 'var(--letterSpacing)',
  padding: '0.375rem 0.75rem',
  boxShadow: 'var(--shadow-1)',
  transition: 'var(--transition)',
  textTransform: 'capitalize',
  display: 'inline-block'
}



export default HomePage