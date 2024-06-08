import { Grid, ThemeProvider, Typography } from "@mui/material";
import { testTheme } from "../assets/mui_themes/themes";

export default function Footer(){

    return(
        <>
        <ThemeProvider theme={testTheme}>
        <Grid container spacing={2}>  
        <hr style={{width:"100%"}}/>
        <Grid item xs={12} sm={5} >          
                    <Typography variant="h5">The Dummy Store</Typography>
                    <p>Together, we are, the lethal shopper!</p>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <p style={{fontWeight: "bold"}}>Products</p>
                    <a className="block">Product One</a>
                    <a className="block">Product Two</a>
                    <a className="block">Product Three</a>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <p style={{fontWeight: "bold"}}>Products</p>
                    <a className="block">Product One</a>
                    <a className="block">Product Two</a>
                    <a className="block">Product Three</a>
                </Grid>
                <Grid item xs={12} sm={2} sx={{pt: 1}}>
                    <p style={{fontWeight: "bold"}}>Products</p>
                    <a className="block">Product One</a>
                    <a className="block">Product Two</a>
                    <a className="block">Product Three</a>
                </Grid>
            </Grid>
        <div className="grid two_cols" style={{paddingTop: "0.5rem"}}>
        <span>
            The Dummy Store&copy; TDS 2023. All Rights Reserved.
        </span>
        <span style={{textAlign: "end"}}>Developed by <a href={"https://github.com/vilio316"}>vilio316</a></span>
    </div>
    </ThemeProvider>
    </>
    )
}