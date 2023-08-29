import { createTheme } from "@mui/material";
import { green, yellow, blue, red} from "@mui/material/colors";

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
                    marginBottom: "0.5rem",
                }
            }
        },
        MuiCardMedia:{
            styleOverrides:{
                root:{
                    padding: "0.5rem",
                },
                media:{
                    borderRadius: "1.5rem",
                }
            }
        },
        MuiTypography:{
            styleOverrides:{
                root:{
                    fontFamily:["Indie Flower", "cursive"].join(","),
                    margin: "1.25rem 0",
                    fontWeight: "bold",
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    margin: "0.5rem 0",
                    borderRadius: "1rem",
                }
            }
        },
        MuiCardContent:{
            styleOverrides:{
                root:{
                    padding: "0.5rem",
                },
            } 
        },
    }
}
)
export const colors = createTheme({
    palette:{
        primary: red,
        success: blue,
    }
})