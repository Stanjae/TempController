import { Box, Paper, Stack, Typography, CircularProgress, Button, IconButton, Fade } from '@mui/material';
import React, {useState} from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

const cusColors = [
  {color:'#2E3192', text:'Ice Cold'},
  {color:'#0054A5', text:'Ice'},
  {color:'#01A99C', text:'Cold'},
  {color:'#00A74E', text:'Cool'},
  {color:'#8BC800', text:'Light Cool'},
  {color:'#FEF200', text:'Temperate'},
  {color:'#FFC501', text:'Light Warm'},
  {color:'#FF9400', text:'Warm'},
  {color:'#F36523', text:'Hot'},
  {color:'#EE1D23', text:'Furnace'},


]

const TController = () => {
    const [temp, setTemp] = useState(0);
    const [tempColor, setTempColor] = useState(null)

    const AddTemp =()=>{
      if(temp === 100){
        setTemp(100);
      }else{
        setTemp(prevTemp => prevTemp  + 10);
      }
    };

    const ReduceTemp =()=>{
      if(temp === 0){
        setTemp(0);
      }else{
        setTemp(prevTemp => prevTemp - 10);
      }
    }
    
  return (
    <Box sx={{height:'100vh', width:'100%', bgcolor:`${cusColors[temp === 100 ? (temp-10)/10 : temp/10].color}`, p:4}}>

    <Paper elevation={2} sx={{width:'300px', bgcolor:'bgcolor.term', p:5, borderRadius:'1rem'}}>
      <Typography gutterBottom textAlign={'center'}>Temperature Controller</Typography>
      <Stack justifyContent={'center'} px={2} spacing={2}>
        <div>
          <CircularProgress sx={{color:`${cusColors[temp === 100 ? (temp-10)/10 : temp/10].color}`}} size={'100%'} variant="determinate" value={temp} />
          <Paper elevation={5} sx={{position:'absolute', flexDirection:'column', width:'160px', height:'160px', display:'flex', justifyContent:'center', 
          alignItems:'center', top:'15.2%', left:'6.4%', right:0, p:4, borderRadius:'100%'}}>
            <Fade easing={true} in={true}>
            <Typography fontWeight={500} gutterBottom variant='subtitle1'>{cusColors[temp === 100 ? (temp-10)/10 : temp/10].text}</Typography>
              </Fade>
            <Typography gutterBottom fontWeight={900} textAlign={'center'} variant='h4'>{temp} C <DeviceThermostatIcon/></Typography>
          </Paper>
        </div>
        <div>
          <Stack spacing={2} px={2} direction={'row'} justifyContent={'space-between'}>
            <IconButton onClick={ReduceTemp} variant='contained'><RemoveCircleIcon sx={{color:'#61CDFE'}}/></IconButton>
            <IconButton onClick={AddTemp} variant='contained'><AddCircleIcon sx={{color:'neutral.oranget'}}/></IconButton>
          </Stack>
        </div>
      </Stack>
    </Paper>
    </Box>
  )
}

export default TController