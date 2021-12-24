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
    this.state = { temp: localStorage.getItem("globaltemp") };
    
  }
  
  render(){
    var temp = localStorage.getItem("globaltemp");
    /*
    const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
    const SHEET_ID = process.env.REACT_APP_SHEET_ID;
    const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;
    const SPREADSHEET_ID = '1wiTnFkZAMgVFLrQl0M8Ypxjj1OKLvPlAQ2oRTFs_B3w';
    const SHEET_ID = '0';
    const CLIENT_EMAIL = 'react-692@bangledatabase-336118.iam.gserviceaccount.com';
    const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDaPoxGsv3IVeBY\n5h436iR3m5RgkzlX9QW2WT0AOgZ+OOanxqNNMlK0uk3ghbH7WZVlFyOdyC7pLWoM\nmQJ8rF8m3dlRNP+2qOnZhv9lE8pRximjuja73mAGI1dr0W6pkv/Puv2vXh3fsSJZ\n2D6JvSkBMiXbCaLl8pI2d3USlFTCK1B5HOsiOgu+aOVBfpDcHZV446HH3omM9498\naa1zwXRZBH6jFr2+M7uebUvrTsHvUhadWWNeRYjybS+afFpvWr2oPLjrbwTlwUI9\njaMUC/peLSMWPgZYpslzkD7jBfa6bAkSnTiELIA6mqaI0hlX/lQk9KG/L41egc/b\nz4xRwyMnAgMBAAECggEADzk4uL/Ikx5maV0X84eKJqu8FGaApAGL9fXQmwDxLgHT\nGRXykzJ08XVjdEtvKFzN3oDYM6vgldRcpudPdJnjg0cLXy5GvhuXQFy52Peh78VW\nZzzYj49J/HOfp/4ybXK7FGbzRjXW+KEXB9RdPGdtAk/Ysyg/bDHZACKiEHs3VFnn\nIHtKSd49umF0c2I3iNQLaajLRPrfk3CCQHPVD9lRisx0mf2Ry8U7RwucHGDAal12\nKZgFjKZZJ1kW+PAKh2ZDyN+iyJ9KM9SJS3lU8dyMPGCaCaanHUuV93uMbE3b/VOR\nDf8L5VlcJAU3/sqklrso6rOE1Mc62CQuRn/M0yiRdQKBgQD2YDqkuZWy7CpG4B8P\nIVNoaAsl24s/q0mjZch8+kMZwHqoXUwbpaksTlF2Sy5mcHqogHIjJWwX6TLxyf0C\nMgZhBpXnxP6Bq+50wcpba1zP3rI2Y0W46C3jYnkGx/zpCeLkVR2UafwLxMZQVshK\nSA5eWKHRPnu5jUPRkBezuYH07QKBgQDixQB4r+YyUKcCrw/+GeZbrHSkQVLzEL3t\nYOhkNSdA25HLYkHsXBMcaktsy7q7BgCWg18Uuqk8v/eOeso+0b0gOoif6ZejR1V4\nOWWR5ybUp88DFahge2GBH9+lMz06bChbDky3QoW203CZ9C32hUwus3am70wcNBRH\nVihi2+Ep4wKBgQChty4m+23IQH3LgcbBPqWpzUkr8zwmcX7nUqLTbc1ndNDN/Fc9\nenJdk5ai59wv/zpzqcPBUAnwc/AthuCcdUt8mj8BH2vSn5DocF8rvH/yLYGac3TL\nVxLvwq4gBlr6d7PHHhtJVHvNGb718tCK+Vr9EH4+gx3hAFl4j3UPUf98TQKBgQC7\ngOMD54WygselS3UwyN+VW4JSsoTQ4D36wk9FVEHxudvSTJtvwS44J5fYDJiIvczM\npzF+JV18Esqx78u8p5X2yQ9hEjfE1V3Re7wFKRkNavebeFPx+vLDXsSAh16QKRAx\nQiCiwwlnA2uukJ1UoiE82D06iNDo3RMLbS0VmPOTuwKBgAfwIDCij4uR+qvOxULa\nj0TPu0wSmpQrtM+opKxoXTpuK1BQj1GmOS8DZELaxuGpLNQ3xJjq77A2suJ+VuNk\n1TdwS18ZjHebtsKWjvBLvu40ReURkMwqyNmHGXEdpvQlZKnuq6iXd8zeoXq0y3yI\nRgl0rDyiAr9d5U7Bf7KcSlWc\n-----END PRIVATE KEY-----\n";
    
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

    const appendSpreadsheet = async (row) => {
      try {
        await doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY,
        });
        // loads document properties and worksheets
        await doc.loadInfo();
    
        const sheet = doc.sheetsById[SHEET_ID];
        const result = await sheet.addRow(row);
      } catch (e) {
        console.error('Error: ', e);
      }
    };
    
    const newRow = { Date: "new name", Temperature: "new value" };
    
    appendSpreadsheet(newRow);
    */
    return(
      <React.Fragment>
        <Title>Temperature Data</Title>
        <Typography component="p" variant="h4" sx={{ flex: 1 }}>
          {temp/100} °C
        </Typography>
        <div>
          <Link color="primary" href="#" onClick={preventDefault}>
            View Temperature Data
          </Link>
        </div>
      </React.Fragment>

    );
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({temp: localStorage.getItem("globaltemp")})
     }, 1000)
  }
}

export default Tester;