import { Paper } from "@mui/material";

const Webpage = ({ webpage }) => {
    return (
        <Paper elevation={3} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={webpage.id}>
            id:{webpage.id}<br/>
            webpagename:{webpage.webpagename}<br/>
            url:<a href={webpage.url}>{webpage.url}</a> <br/>
            price:{webpage.price}<br/>
            productid:{webpage.productid}<br/>
        </Paper>
    )
}

export default Webpage

