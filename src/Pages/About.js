import React from 'react';
import { Container, Box, Grid, Typography, LinearProgress } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import ProgressBar from './ProgressBar'

const About = () => {
  const technicalData = [
    { text: 'HTML & CSS',  completed: 90,},
    { text: 'Javascript',  completed: 80 },
    { text: 'React js ',  completed: 80 },
    { text: 'UI/UX',  completed: 70 },
    { text: 'Node js ',  completed: 70 },
    { text: 'Database Management' ,  completed: 60},
    { text: 'Typescript',  completed: 60 },
    { text: 'Version Control',  completed: 80 },
  ]

  const professSkills = [
    { text: 'Communication Skills', completed: 100,},
    { text: 'Team Work', completed: 90, },
    { text: 'Lean and Agile', completed: 90,},
    { text: 'Critical Thinking' , completed: 90,},
    { text: 'Problem Solving', completed: 90, },
    { text: 'Creativity', completed: 60, },


  ]
  return (
    <Container maxWidth="100%" >
      <Box sx={{
        bgcolor: 'var(--backgroundColor)',
        color: 'var(--textColor)',
        maxWidth: '100%',
        margin: '1.5rem auto'
      }}>
        <Grid sx={{
          maxWidth: '40em',
          margin: '2rem auto'
        }}>
          <Typography variant='h5' align='center'>About me </Typography>
          <Typography variant='body2' align='center'>My name is Naggayi Daphne Pearl. <br />  I am a junior software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. I am well-versed in technology and writing code to create systems that are reliable and user-friendly.
            <br />I am a confident communicator, strategic thinker, and innovative creator and develop software that is customized to meet a company’s organizational needs highlight its core competencies, and further its success.
          </Typography>
        </Grid>

        <Grid sx={{
          maxWidth: "60em",
          margin: '2rem auto'
        }}>
          <Typography variant='h5' align='center'>My Skills </Typography>
          <Grid container spacing={5}>
            <Grid item xs={12} lg={6}>
              <Box >
                {technicalData.map((item, index) => (
                  <div key={index}>
                    <Typography sx={{
                      marginTop: '5%'
                    }}>{item.text}</Typography>
                    <ProgressBar completed={item.completed} bgcolor="var(--primary-700)"/>
                  </div>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box>
                {professSkills.map((item, index) => (
                  <div key={index}>
                    <Typography sx={{
                      marginTop: '5%'
                    }}>{item.text}</Typography>
                    <ProgressBar completed={item.completed} bgcolor="var(--primary-700)"/>        
                  </div>
                ))}
              </Box>
            </Grid>

          </Grid>

        </Grid>



      </Box>
    </Container>
  )
}

const progressStyle = {
  color: 'var(--primary-700)',

}

export default About