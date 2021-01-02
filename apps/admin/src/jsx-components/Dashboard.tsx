import { useEffect, useState } from "react";
import { withRouter } from  "react-router-dom";
import { ApiClient } from 'admin-bro'
import { Box, Button, Header, Label } from '@admin-bro/design-system';

const SHEETS_ID = '1N_j5vx1Ux4AvDruZOPpjB5j5Zsen8DLe0A6YUdGl6ks';
const api = new ApiClient()

function LoadToGoogleSheets(props) {
  console.log(props);

  const [data, setData] = useState({})

  useEffect(() => {
    // window.open(`https://docs.google.com/spreadsheets/d/${SHEETS_ID}/edit`, '_blank')
    // props.history.replace(props.resource.href);
  }, [])
  const handleReloadGoogleSheets=()=>{
    api.getDashboard({params:{type: "SAVE_TO_SHEETS"}}).then((response) => {
      setData(response.data)
      console.log(response.data)
      window.open(`https://docs.google.com/spreadsheets/d/${response.data.sheetId}/edit`, '_blank')
    })
  }
  const handleOpenGoogleSheets=()=>{
    api.getDashboard({params:{type: "GET_SHEET_ID"}}).then((response) => {
      setData(response.data)
      console.log(response.data)
      window.open(`https://docs.google.com/spreadsheets/d/${response.data.sheetId}/edit`, '_blank')
    })
  }

  return (
    <Box style={{padding: "20px"}}>
      <Header>Makers Application Admin Page</Header>
      <Button onClick={handleReloadGoogleSheets}>Reload users to Google Sheets</Button>
      <Button onClick={handleOpenGoogleSheets}>Open Google Sheets</Button>
    </Box>
  );
}

export default withRouter(LoadToGoogleSheets);
