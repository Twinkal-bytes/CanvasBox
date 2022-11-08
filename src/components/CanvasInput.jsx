import { Box } from "@mui/system";
import { Button, Card,  CardContent, FormLabel } from "@mui/material";
import {TextField} from "@mui/material";
import React,{useState} from "react";
import CreateCanvas from "./CreateCanvas";

const CanvasInput =()=>{
    const [value,setValue]=useState()

    const handleInput =()=>{
        console.log("Value Added")
    }
    const handleInputTextField =(e)=>{
        e.preventDefault()
        console.log(e)
    }
    return(
        <Box component="form"sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
        <Card sx={{ maxWidth: 345 ,align:'center' ,marginTop:'100px',marginLeft:'50px',justifyContent:'cemter'}}>
            Select Data To Create Box
            <CardContent>
            <FormLabel>Enter Height</FormLabel>
        <TextField id="standard-number" type="number" variant="standard" onChange={handleInputTextField}/><br/>
        <FormLabel>Enter Width</FormLabel>
        <TextField id="standard-number" type="number" variant="standard" onChange={handleInputTextField}/><br/>
        <FormLabel>Choose Color</FormLabel>
        <input type='color'/>
        <Button onClick={handleInput}>Click</Button>
        </CardContent>
        </Card>
        <CreateCanvas/>
        </Box>
        
        )
}
export default CanvasInput