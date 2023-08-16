import { Typography } from "@mui/material";

export default function Footer(){

    return(
        <>
        <div className="grid centered_items">
            <hr style={{width:"100%"}}/>
            <div className="grid four_cols" style={{width: "80%"}}>
                <div>
                    <Typography>CompanyName</Typography>
                    <p>Company Slogan/Brand Identity Wordle</p>
                </div>
                <div>
                    <p>Products</p>
                    <a className="block">Product One</a>
                    <a className="block">Product Two</a>
                    <a className="block">Product Three</a>
                </div>
                <div>
                    <p>Products</p>
                    <a className="block">Product One</a>
                    <a className="block">Product Two</a>
                    <a className="block">Product Three</a>
                </div>
                <div>
                    <p>Products</p>
                    <a className="block">Product One</a>
                    <a className="block">Product Two</a>
                    <a className="block">Product Three</a>
                </div>
            </div>            
        </div>
        <div className="grid two_cols">
        <span>
            CompanyName &copy; 2023. All Rights Reserved.
        </span>
        <span style={{textAlign: "end"}}>Developed by <a href={"https://github.com/vilio316"}>vilio316</a></span>
    </div>
    </>
    )
}