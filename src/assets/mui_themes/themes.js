import { createTheme } from "@mui/material";
import { green, purple, red, yellow, blue} from "@mui/material/colors";

export const testTheme= createTheme({
    palette:{
        primary: blue,
        secondary: yellow,
        success: green,
    }, 
    components:{
        MuiCard:{
            styleOverrides:{
                root:{
                    borderRadius: "1.5rem", 
                }
            }
        },
        MuiCardMedia:{
            styleOverrides:{
                root:{
                    padding: "1rem",
                    borderBottom: "1px solid red"
                }
            }
        },
        MuiTypography:{
            styleOverrides:{
                root:{
                    fontFamily:["Indie Flower", "cursive"].join(","),
                    margin: "1.25rem 0",
                    fontWeight: "bold"
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    margin: "0.5rem 0",
                    borderRadius: "1rem"
                }
            }
        }
    }
})