import { Grid, Typography } from "@mui/material";

export default function ErrorPage(){
return(
    <>
    <Grid container style={{height:"25rem"}} alignContent={"center"}>
        <Typography variant="h2" textAlign={"center"} style={{width: "100%"}}>Oops!</Typography>
        <Typography variant="h4" textAlign={"center"}>We can't seem to find the item you're looking for in our inventory. Please <a href={`/`}>try again from the home page</a> or refresh. </Typography>
    </Grid>
    </>
)
}
