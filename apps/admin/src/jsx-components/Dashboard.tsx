import { Component } from "react";
import { withRouter } from  "react-router-dom";
import { ApiClient } from 'admin-bro'
import { Box, Button, Header } from '@admin-bro/design-system';

const api = new ApiClient()

class Dashboard extends Component{
  handleReloadGoogleSheets=()=>{
    api.getDashboard({params:{type: "SAVE_TO_SHEETS"}}).then((response) => {
      console.log(response.data)
      window.open(`https://docs.google.com/spreadsheets/d/${response.data.sheetId}/edit`, '_blank')
    })
  }
  handleOpenGoogleSheets = ()=>{
    api.getDashboard({params:{type: "GET_SHEET_ID"}}).then((response) => {
      console.log(response.data)
      window.open(`https://docs.google.com/spreadsheets/d/${response.data.sheetId}/edit`, '_blank')
    })
  }
  render(){
    return (
      <Box style={{padding: "20px"}}>
        <Header>Makers Application Admin Page</Header>
        <Button onClick={this.handleReloadGoogleSheets}>Reload users to Google Sheets</Button>
        <Button onClick={this.handleOpenGoogleSheets}>Open Google Sheets</Button>
      </Box>
    )
  }
}

export default withRouter(Dashboard);
