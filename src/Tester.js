import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Component } from 'react';

function preventDefault(event) {
  event.preventDefault();
}

class Tester extends Component {
  constructor(props){
    super(props);
    this.state = { time: Date.now() };
    this.state = { disp: localStorage.getItem("globaltemp") };
  }
  
  render(){
    var time = new Date();
    var disp = localStorage.getItem("globaltemp");

    return(
      <React.Fragment>
        <Title>GPS Tracker</Title>
        <Typography component="p" variant="h4">
          Current Location
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>

          as of {time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} on {(new Date().getMonth()+1)+'/'+(new Date().getDate())+'/'+new Date().getFullYear()}
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {disp}
        </Typography>
        <div>
          <Link color="primary" href="#" onClick={preventDefault}>
            View Location Data
          </Link>
        </div>
      </React.Fragment>
    );
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({disp: localStorage.getItem("globaltemp")})
     }, 1000)
  }
}

export default Tester;