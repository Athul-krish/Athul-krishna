import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import './home.css';
const Home = () => {
  const text = 'Login';
  const btext = 'Signup';
  const navigate = useNavigate();
  return (
    <div id="bg">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            COURSE CLOUD
          </Typography>
          {(
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
              </IconButton>
              <Button buttonText={"Login"}
               variant="contained"             
                style={{
                marginLeft: "10px",
                marginRight: "14px",
                height:"40px",
                width:"40px"
              }}
              onClick={() => navigate("/login")}>
                {text}
       </Button>&nbsp;&nbsp;


       <Button variant="contained"
              color='success'
              style={{
              height:"42px",
              width:"42px"
              }}
              onClick={() => navigate("/signup")}>
                {btext}
       </Button>
        
            </div>
            
          )}
        </Toolbar>
      </AppBar>
      <center>
      <h1>Free Study Notes,Summaries and Answers for your Notes</h1><br/>
      <h2>Study Easies,Faster and better</h2>
      </center>
    </Box>
    </div>
    
  )
}

export default Home