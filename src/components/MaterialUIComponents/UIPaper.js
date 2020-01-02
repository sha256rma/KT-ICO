import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flexbox',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(100),
            height: theme.spacing(50),
        },
    },
}));

export default function SimplePaper() {
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3} >
                <form>
                    <div className="buyCoins">
                        <div className="amountToBuy">Amount of ether to buy:</div>
                        <TextField> </TextField>
                        <div> ≈  KT </div>
                        <div className="etherDC"> (1 ETH ≈ 100 TC) </div>
                    </div>
                    <div className="buttonBuy">
                        <Button type="submit" variant="contained" color="primary" value="Submit"> Buy KT Tokens </Button>
                    </div>
                </form>

                <div className="flex errorMessage">
                    <i className="material-icons">error_outline</i>
                    <div >Error Message: asydassadasdas</div>
                </div>

                <div className="flex loadingContainer">
                    <div>
                        <div className="loadingText"> Waiting For Confirmation</div>
                        <div className="loadTextSub">(this can take up to 30 seconds)</div>
                    </div>
                    <CircularProgress/>
                </div>

                <div className="flex successfully">You successfully bought KT Coins!</div>
            </Paper>
        </div>
    );
}