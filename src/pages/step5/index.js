import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FavoriteIcon from '@material-ui/icons/Favorite';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';

import './styles.css';


const useStyles = makeStyles((theme) => ({

    margin: {
        margin: theme.spacing(1),
    },

    root: {
        '& > *': {
            width: '100%',
            height: '100%',
            alignContent: "center",
        },
    },

    container: {
        paddingTop:"250px",
        paddingLeft: "20%",
        paddingRight: "20%",
        position: 'relative',
        backgroundColor: "#FEF2F2",
    },

    papers: {
        width: "80%",
        height: "70%",
        display: "flex",
        alignItems: "center",
        margin: "auto",
        height: "300px",
        backgroundColor: "#FEFCEF",
        borderStyle: "solid",
        borderRadius: "20px",
        
    },

    text1: {
        marginTop: "30px",
        justifyContent: "center",
        textAlign: "center", 
        marginBottom: "5px",
        fontFamily: "cursive",
        fontSize: "20px",
        fontWeight: "500",
        
     },


    text: {
       justifyContent: "center",
       textAlign: "center", 
       marginBottom: "0px",
       fontFamily: "segoe UI emoji",
       fontSize: "18px",
       fontWeight: "500",
       fontFamily: "cursive",
    },

    
    grid: {
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",

    },

    gridgap: {
        display: "grid",
        gridRowGap: "10px",
    },

    gridItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "20",
        height: "80%",
        width: "15%",
        padding: "4",
        justifyContent: "flex-end",
    },


}))

export default function Step5() {

    const classes = useStyles();

    return (

        <div className={classes.container}>
            <Paper className={classes.papers} elevation={4}>
                <Grid container direction="column" className={classes.gridgap}>
      
                        <Typography className={classes.text1}>
                                    O amor é mais sensível, a amizade mais segura.<br></br>
                                    O amor nos dá asas, a amizade o chão.<br></br>
                                    No amor há mais carinho, na amizade compreensão.
                        </Typography>

                        <Typography className={classes.text}>
                                    O amor é plantado e com carinho cultivado,<br></br>
                                    a amizade vem faceira,<br></br>
                                    e com troca de alegria e tristeza,<br></br>
                                    torna-se uma grande e querida companheira.
                        </Typography>
                   
                    <Grid container className={classes.grid}>
                        <Grid item className={classes.gridItem} xs > 

                                <Button size="small" color="#F5F1ED"  className={classes.margin} alignItems="center" component={Link} to="/step6">
                                    <a className="text-button" endIcon={<ArrowForwardIosIcon  style={{ fontSize: 12, marginLeft: 5 }} />}>Next</a>
                                    
                                </Button>
                        </Grid>       
                    </Grid>
                </Grid>
            </Paper>
        </div >


    );
}