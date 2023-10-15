import * as React from 'react';
import { PhoneInput } from 'react-international-phone';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';

import { useState  } from 'react';
import axios from "axios";
import Tab from '@mui/material/Tab';
import 'react-international-phone/style.css';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { useNavigate } from 'react-router-dom';
// import { PhoneInput } from 'react-international-phone';




export default function Login(){
    const [message,setMessage]=useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [loginEmailError, setLoginEmailError] = useState(false)
    const [loginPasswordError, setLoginPasswordError] = useState(false)
    const navigate = useNavigate()

    const [address,setAddress]=useState("")
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    // const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [bankName, setBankName] = useState("")
    const [accountNumber, setAccountNumber] = useState("")
    const [ifscCode,setIfscCode]= useState("")
    const [panNumber,setPanNumber]= useState("")
    const [riskCapacity,setRiskCapacity]=useState("")

  
    const [addressError,setAddressError]= useState(false)
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [dateOfBirthError, setDateOfBirthError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [cityError, setCityError] = useState(false)
    const [stateError, setStateError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    const [bankNameError,setBankNameError]=useState(false)
    const [accountNumberError,setAccountNumberError]=useState(false)
    const [panNumberError,setPanNumberError]=useState(false)
    const [ifscCodeError,setIfscCodeError]=useState(false)
    const [riskCapacityError,setRiskCapacityError]=useState(false)

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setMessage("")
    setOpen(false)};

    // const dashboard="/advisor/dashboard"
    // const hash="#"
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }; 
    const handleSubmit = (event) => {
        //  const data = new FormData(event.currentTarget);
        event.preventDefault();
        setFirstNameError(false)
        setLastNameError(false)
        setEmailError(false)
        setPasswordError(false)
        setAddressError(false)
        setDateOfBirthError(false)
        setPhoneError(false)
        setCityError(false)
        setStateError(false)
        setConfirmPasswordError(false)
    
        if (firstName === '') {
          setFirstNameError(true)
          return
      }
        if (lastName === '') {
          setLastNameError(true)
          return
      } 
        if(address===""){
          setAddressError(true)
          return
        }
        if (email === '') {
        setEmailError(true)
        return
      }
        if (phone === '') {
        setPhoneError(true)
        return
      }
    
      if (dateOfBirth === '') {
        setDateOfBirthError(true)
        return
    }
      if (city === '') {
        setCityError(true)
        return
    } 
      if (state === '') {
      setStateError(true)
      return
    }
      if (password === '') {
      setPasswordError(true)
      return
    }
    if (confirmPassword === '') {
      setConfirmPasswordError(true)
      return
    }
   handleOpen();
    // console.log(dateOfBirth)

 
    
    
        }

    const handleModalSubmit=(event)=>{
      event.preventDefault();
      setBankNameError(false)
      setAccountNumberError(false)
      setPanNumberError(false)
      setIfscCodeError(false)
      setRiskCapacityError(false)
  
      if (bankName === '') {
          setBankNameError(true)
          return
      }
      if (ifscCode === '') {
          setIfscCodeError(true)
          return
      }
      if (panNumber === '') {
        setPanNumberError(true)
        return
    }
    if (accountNumber === '') {
        setAccountNumberError(true)
        return
    }
    if (riskCapacity === '') {
      setRiskCapacityError(true)
      return
  }
      const investorData={
        "clientId":0,
        "advisorId":  '0',
        "firstName": firstName,
        "lastName" :  lastName,
        "email":     email,
        "password":  password,
        "confirmPassword": confirmPassword,
        "phoneNumber":  phone.replace(/\s+/g, "").replace(/-/g, "").replace("+91",""),
        "address":address,
        "city": city,
        "state":  state,
        "pincode":"123456",
        "bankName":bankName,
        "accountNumber":accountNumber,
        "ifscCode":ifscCode,
        "panNumber":panNumber,
        "isProfileComplete":true
      
      }
      axios({
        method:"post",
        url:"https://localhost:7136/api/ClientSignUp/signup",
        data:investorData
    }).then(function(response){
         if(response.data.message==="User registered successfully!"){
          setMessage(response.data.message)
              
              
              setFirstName("")
              setLastName("")
              setDateOfBirth("")
              setEmail("")
              setPhone("")
              setCity("")
              setState("")
              setAddress("")
              setAccountNumber("")
              setBankName("")
              setIfscCode("")
              setPanNumber("")
              setRiskCapacity("")
              setPassword("")
              setConfirmPassword("")
            
         }
           
        
       
     } , function(error){
             console.log(error)
             if(error.response.data.message){
              setMessage(error.response.data.message)
            }
    }) 
}    
    const handleLoginSubmit = (event) => {
      event.preventDefault();
      
  
      setLoginEmailError(false)
      setLoginPasswordError(false)
  
      if (loginEmail === '') {
          setLoginEmailError(true)
          return
      }
      if (loginPassword === '') {
          setLoginPasswordError(true)
          return
      }
  const investorData={
        email:loginEmail,
        password:loginPassword
  }
     
      axios({
        method:"post",
        url:"https://localhost:7136/api/ClientSignUp/login",
        data:investorData
    }).then(function(response){
         
          console.log(response) 
          if(response.data.message==="Login successful!" || response.data.message==="Profile is not complete. Please provide the missing information."){
            const clientId=response.data.client.clientId
            navigate(`/investor/dashboard/${clientId}`)
          }
        
       
     } , function(error){
             console.log(error)
    })
    }
  return (
    
    <Grid container spacing={7} item xs={12} sx={{backgroundColor:"#e4f1ff"}} sm={8} md={4} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
             
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Sign Up" value="1" />
            <Tab label="Log In" value="2" />
           
          </TabList>
        </Box>
        <TabPanel value="1">
       
            
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  margin="dense"
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  value={firstName}
                  error={firstNameError}
                  onChange={e => setFirstName(e.target.value)}
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  margin="dense"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  error={lastNameError}
                  onChange={e => setLastName(e.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              
              </Grid>
              
              <TextField
                size="small"
                margin="dense"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                error={emailError}
                onChange={e => setEmail(e.target.value)}
                autoComplete="email"
                autoFocus
              />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
      
        <DateField  value={dateOfBirth}
                error={dateOfBirthError}
                onChange={value => setDateOfBirth(value)}
                required size="small"
               margin="dense" label="Date of Birth" />
      
    </LocalizationProvider>
              </Grid>

            <Grid item xs={12} sm={6}>
            <PhoneInput
                  style={{"padding": "10px 0px",
                  "--react-international-phone-border-color" : "#bab2b2",
                  "--react-international-phone-background-color":"#e4f1ff" 
                }}
                hideDropdown={true}
                inputStyle ={ {
                  "width" : "145px"
                  }}
                  defaultCountry="in"
                  name="phoneNumber"
                  value={phone}
                  
                  error={phoneError}
                  onChange={(phone) => setPhone(phone)}
                />
            </Grid>
          </Grid>
          
              
              
              <TextField
                name="address"
                value={address}
                error={addressError}
                onChange={e => setAddress(e.target.value)}
                size="small"
                margin="dense"
                required
                fullWidth
                id="outlined-multiline-flexible"
                label="Address"
                multiline
                maxRows={4}
        />
        <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  margin="dense"
                  name="city"
                  value={city}
                  error={cityError}
                  onChange={e => setCity(e.target.value)}
                  required
                  fullWidth
                  id="city"
                  label="City"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  margin="dense"
                  required
                  fullWidth
                  id="state"
                  label="State"
                  name="state"
                  value={state}
                  error={stateError}
                  onChange={e => setState(e.target.value)}
                />
              </Grid>
              </Grid>
        <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                margin="dense"
                required
                fullWidth
                name="password"
                value={password}
                  error={passwordError}
                  onChange={e => setPassword(e.target.value)}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              /></Grid>
              
              <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                margin="dense"
                required
                fullWidth
                name="password"
                value={confirmPassword}
                  error={confirmPasswordError}
                  onChange={e => setConfirmPassword(e.target.value)}
                label="Confirm Password"
                type="password"
                id="confirmPassword"
              
              />
             </Grid>
             </Grid>
              <Button
                
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Next
              </Button>
              <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
         {message?<Typography id="modal-modal-title" variant="h6" component="h2">
            {message}
          </Typography>:<> <Typography id="modal-modal-title" variant="h6" component="h2">
            Please Fill Mandatory Fields For Starting Investment
          </Typography>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                
                  margin="dense"
                  autoComplete="given-name"
                  name="bankName"
                  required
                  fullWidth
                  value={bankName}
                  error={bankNameError}
                  onChange={e => setBankName(e.target.value)}
                  id="bankName"
                  label="Bank Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  margin="dense"
                  required
                  fullWidth
                  id="accountNumber"
                  label="Account Number"
                  name="accountNumber"
                  value={accountNumber}
                  error={accountNumberError}
                  onChange={e => setAccountNumber(e.target.value)}
                  
                />
              </Grid>
              
              </Grid>
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  margin="dense"
                  autoComplete="given-name"
                  name="ifscCode"
                  required
                  fullWidth
                  value={ifscCode}
                  error={ifscCodeError}
                  onChange={e => setIfscCode(e.target.value)}
                  id="ifscCode"
                  label="IFSC Code"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
              
                  margin="dense"
                  required
                  fullWidth
                  id="panNumber"
                  label="PAN Number"
                  name="panNumber"
                  value={panNumber}
                  error={panNumberError}
                  onChange={e => setPanNumber(e.target.value)}
                  
                />
              </Grid>
              
              </Grid>
              <Grid sx={{mt:1}}>
              <FormControl required fullWidth>
        <InputLabel id="demo-simple-select-label">Risk Capacity</InputLabel>
        <Select
          
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Risk Capacity"
          value={riskCapacity}
          error={riskCapacityError}
          onChange={e => setRiskCapacity(e.target.value)}
        >
          <MenuItem value={'Low Risk'}>Low Risk(Gold,Fixed Income assets,Bonds etc)</MenuItem>
          <MenuItem value={'High Risk'}>High Risk(Equity,Future,Options etc)</MenuItem>
          <MenuItem value={'Medium Risk'}>Medium Risk(Mixed of Low and High Risk)</MenuItem>
        </Select>
      </FormControl>
      </Grid>
              <Button onClick={handleModalSubmit}>Create Account</Button></>}
        </Box>
      </Modal>

              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box></TabPanel>
        <TabPanel value="2">
            
            <Box component="form" noValidate onSubmit={handleLoginSubmit} sx={{ mt: 8 }}>
            <TextField
                size="small"
                margin="dense"
              
                required
                onChange={e => setLoginEmail(e.target.value)}
                name="email"
                fullWidth
                id="email"
                label="Email Address"
                value={loginEmail}
                error={loginEmailError}
                autoComplete="email"
                autoFocus
              />
              <TextField
                size="small"
                margin="dense"
                required
                onChange={e => setLoginPassword(e.target.value)}
                name="password"
                fullWidth
                value={loginPassword}
                error={loginPasswordError}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
           
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
               Sign In
              </Button>

{/*               
              {
                email&&password?
              <Button
                
                href={email&&password?dashboard:hash}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
               Sign In
              </Button>
              :<Button
                
              
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Sign In
            </Button>} */}
              <Grid container>
                <Grid item xs>
                  <Link href="#"  variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" value="1" onClick={(e)=> setValue("1")}  variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box></TabPanel>
       
      </TabContext>
            
          </Box>
        </Grid>
    
  )

        }
