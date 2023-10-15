import * as React from 'react'
import { useEffect, useState } from "react";
import './AdvisorDashboard.css'
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import { BarChart } from '@mui/x-charts/BarChart';
import CollapsibleTable from "./table";
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Row from "./Row";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import { useParams } from "react-router-dom";
import axios from "axios";
import { styled } from '@mui/material/styles';
function Dashboard(){
    const [selectedOption, setSelectedOption] = useState('InvestmentStrategies');
    const { advisorId,firstName } = useParams()
    
    


  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
  return (
    <div className="investorDashboard">
       <div className="top-right">
        <div className="user-info" onClick={toggleDropdown}>
          <i className="material-icons">person</i>
          <span>User {firstName}</span>
        </div>
        {isDropdownOpen && (
          <div className="dropdown">
            <ul>
              <li>Logout</li>
              {/* Add other options as needed */}
            </ul>
          </div>
        )}
      </div>
      <div className="sidebar">
        <h2>Investment Portal</h2>
        <ul>
          <li className="sidebar-item" onClick={() => handleOptionClick('ClientList')}> <i className="material-icons">pie_chart</i> <span>List of Clients</span></li>
          <li className="sidebar-item" onClick={() => handleOptionClick('InvestmentStrategies')}><i className="material-icons">swap_horiz</i><span>Strategies</span></li>
          {/* <li className="sidebar-item" onClick={() => handleOptionClick('Reports')}><i className="material-icons">description</i><span>Reports</span></li> */}
          <li className="sidebar-item" onClick={() => handleOptionClick('Settings')}><i className="material-icons">settings</i><span>Settings</span></li>
        </ul>
      </div>
      <div className="content">
        {selectedOption === 'ClientList' && <ClientList />}
        {selectedOption === 'InvestmentStrategies' && <InvestmentStrategies advisorId={advisorId} firstName={firstName}/>}
        {selectedOption === 'Reports' && <ReportsContent />}
        {selectedOption === 'Settings' && <SettingsContent />}
      </div>
    </div>
  );
}

function InvestmentStrategies( {advisorId,firstName} ) {

  //handle modal
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };   
const [modalOpen, setModalOpen] = React.useState(false);
const handleOpen = () => setModalOpen(true);
const handleClose = () => setModalOpen(false);
const [strategyName,setStrategyName]=useState('')
const [clientId,setClientId]=useState('')
const [sixMonReturns,setSixMonReturns]=useState('')
const [oneYrReturns,setOneYrReturns]=useState('')
const [threeYrReturns,setThreeYrReturns]=useState('')
const [fiveYrReturns,setFiveYrReturns]=useState('')

const [strategyNameError,setStrategyNameError]=useState(false)
const [clientIdError,setClientIdError]=useState(false)
const [sixMonReturnsError,setSixMonReturnsError]=useState(false)
const [oneYrReturnsError,setOneYrReturnsError]=useState(false)
const [threeYrReturnsError,setThreeYrReturnsError]=useState(false)
const [fiveYrReturnsError,setFiveYrReturnsError]=useState(false)



  const [open, setOpen] = useState(false);
  const [data,setData]=useState([])
  const [listOfStratgies,setListOfStrategies]=useState([])
  useEffect(()=>{
    axios({
      method:'get',
      url:`https://localhost:7136/api/strategies/${advisorId}/By-ClientId`
    }).then(function(response){
    const list=response.data.strategies
     list.map((e)=>setData([e.investmentAmount,e.expectedAmount,e.amount,e.returnPercentage]))
     setListOfStrategies(list)
      console.log(list)
    
    },
    function(error)
    {
      console.log(error)
    })
},[listOfStratgies])

const handleModalSubmit=(event)=>{

  event.preventDefault();
  setStrategyNameError(false)
  setClientIdError(false)
  setSixMonReturnsError(false)
  setOneYrReturnsError(false)
  setThreeYrReturnsError(false)
  setFiveYrReturnsError(false)

  if(strategyName===""){
    setStrategyNameError(true)
    return
  }
  if(clientId===""){
    setClientIdError(true)
    return
  }
  if(sixMonReturns===""){
    setSixMonReturnsError(true)
    return
  }
  if(oneYrReturns===""){
    setOneYrReturnsError(true)
    return
  }
  if(threeYrReturns===""){
    setThreeYrReturnsError(true)
    return
  }
  if(fiveYrReturns===""){
    setFiveYrReturnsError(true)
    return
  }
  const strategyData ={
    "strategyId": 0,
  "investmentId": 0,
  "investmentName": strategyName,
  "amount": threeYrReturns,
  "clientId": clientId,
  "advisorId": advisorId,
  "returnPercentage": fiveYrReturns,
  "investmentAmount": sixMonReturns,
  "expectedAmount": oneYrReturns,
  "status": "string",
  "timePeriod": "string",
  "remarks": "string"
  }
  axios({
    method:'post',
    url:'https://localhost:7136/api/strategies/Add',
    data: strategyData
}).then((response)=>{
   console.log(response)
   if(response.data.message="Strategy added successfully."){
    setStrategyName('')
    setClientId('')
    setSixMonReturns('')
    setOneYrReturns('')
    setThreeYrReturns('')
    setFiveYrReturns('')
    handleClose()
   }
},(error)=>{
  console.log(error)
  handleClose()
})
 


}



  return (
    <div className="portfolio">
    
      {/* Add your portfolio content here */}
     <Button  onClick={handleOpen} variant='contained'>Add Strategy</Button>
  <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create New Strategy For Client
          </Typography>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                
                  margin="dense"
                  autoComplete="given-name"
                  name="strategyName"
                  required
                  fullWidth
                  value={strategyName}
                  error={strategyNameError}
                  onChange={e => setStrategyName(e.target.value)}
                  id="strategyName"
                  label="Strategy Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  margin="dense"
                  required
                  fullWidth
                  id="clientId"
                  label="Client ID"
                  name="clientId"
                  value={clientId}
                  error={clientIdError}
                  onChange={e => setClientId(e.target.value)}
                  
                />
              </Grid>
              
              </Grid>
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                
                  margin="dense"
                  autoComplete="given-name"
                  name="6m Returns"
                  required
                  fullWidth
                  value={sixMonReturns}
                  error={sixMonReturnsError}
                  onChange={e => setSixMonReturns(e.target.value)}
                  id="6m Returns"
                  label="6m Returns(%)"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  margin="dense"
                  required
                  fullWidth
                  id="1yr"
                  label="1yr Returns(%) "
                  name="1yr"
                  value={oneYrReturns}
                  error={oneYrReturnsError}
                  onChange={e => setOneYrReturns(e.target.value)}
                  
                />
              </Grid>
              
              </Grid>
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  margin="dense"
                  autoComplete="given-name"
                  name="3yr"
                  required
                  fullWidth
                  value={threeYrReturns}
                  error={threeYrReturnsError}
                  onChange={e => setThreeYrReturns(e.target.value)}
                  id="3yr"
                  label="3yr Returns(%)"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
              
                  margin="dense"
                  required
                  fullWidth
                  id="5yr"
                  label="5yr Returns(%)"
                  name="5yr"
                  value={fiveYrReturns}
                  error={fiveYrReturnsError}
                  onChange={e => setFiveYrReturns(e.target.value)}
                  
                />
              </Grid>
              
              </Grid>
              
              <Button  onClick={handleModalSubmit}>Create Strategy</Button>
        </Box>
      </Modal>
    <div className="rectangle-div">  
    {/* <CollapsibleTable/> */}
    <TableContainer component={Paper}>
      <Table   aria-label="simple table">
        <TableHead>
        <TableRow >
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align='right'>6m return&nbsp;(%) </TableCell>
            <TableCell align='right'>1yr return&nbsp;(%)</TableCell>
            <TableCell align='right'>3yr return&nbsp;(%)</TableCell>
            <TableCell align='right'>5yr return&nbsp;(%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
     
         {listOfStratgies?.map((row) => (
          <React.Fragment>
          <TableRow>
          <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
       
          <TableCell>{row.investmentName}</TableCell>
          <TableCell align="right">{row.investmentAmount} </TableCell>
          <TableCell align="right">{row.expectedAmount}</TableCell>
          <TableCell align="right">{row.amount}</TableCell>
          <TableCell align="right">{row.returnPercentage}</TableCell>
        </TableRow>
            <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
            <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['6m', '1 yr', '3yr','5yr'],
          scaleType: 'band',
          label:'Time'
        },
      ]}
      yAxis={[
        {
          label:'% Returns'
        }
      ]}
      series={[
        {
          color:'#b7d9ff',
          data: data,
          label:'Percentage Returns'
        },
      ]}
      width={500}
      height={300}
    />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      </React.Fragment>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
    </div>  
    </div>
  );
}

function ClientList() {
  return (
    <div>
       <div className="rectangle-div">  
    {/* <ClientTable/> */}
   
    </div>
    </div>
  );
}

function ReportsContent() {
  return (
    <div>
      <h1>Reports Content</h1>
      {/* Add your reports content here */}
    </div>
  );
}

function SettingsContent() {
  return (
    <div>
      <h1>Settings Content</h1>
      {/* Add your settings content here */}
    </div>
  );
}

export default Dashboard