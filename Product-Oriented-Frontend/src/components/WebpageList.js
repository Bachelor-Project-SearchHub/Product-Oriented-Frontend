import { Container, Paper } from "@mui/material";
import Webpage from "./Webpage";

export default function WebpageList( { webpages, error, errorMsg }) {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    return (
        <Container>
            <h1>Webpages</h1>
            <Paper elevation={3} style={paperStyle}>
                {error &&  <p data-testid="error"> {errorMsg} </p>}
                {!error && webpages.map(webpage=>(
                        <Webpage key={webpage.id} webpage={webpage}/>))
                }
            </Paper>
        </Container>
    );
}

