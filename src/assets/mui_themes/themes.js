import { createTheme } from "@mui/material";
import { green, yellow, blue, red} from "@mui/material/colors";

export const testTheme= createTheme({
    palette:{
        primary: blue,
        secondary: red,
        success: green,
    }, 
    components:{
        MuiCard:{
            styleOverrides:{
                root:{
                    borderRadius: "1.5rem", 
                    margin: "1rem",
                    padding:'1rem',
                }
            }
        },
        MuiTextField:{
            styleOverrides:{
                root:{
                    margin: '1rem 0',
                    borderRadius:'1.25rem',
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
                    fontFamily:["Poppins", "sans-serif"].join(","),
                    margin: "1.25rem 0",
                    fontWeight: "bold",
                    padding: '0 1.25rem',
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    margin: "0.5rem 0",
                    marginBottom: "0.75rem",
                    borderRadius: "1.5rem",
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