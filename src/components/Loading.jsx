import { CircularProgress, Typography } from "@mui/material";

export default function Loading(){
    return(
        <>
        <CircularProgress/>
        <Typography variant={"h4"}>Loading...</Typography>
        </>
    )
}