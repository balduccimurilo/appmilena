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
        fontWeight: "700",
        
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
        gridRowGap: "15px",
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

export default function Step3() {

    const classes = useStyles();

    return (

        <div className={classes.container}>
            <Paper className={classes.papers} elevation={4}>
                <Grid container direction="column" className={classes.gridgap}>
      
                        <Typography className={classes.text1}>
                                    Primeira passo:<br></br>
                                    Respire, relaxe e sorria. <br></br>
                        </Typography>

                        <Typography className={classes.text}>
                                    Tá chega de enrolação kkk<br></br>
                                    Agora posso começar. <br></br>
                                    E vou começar com um coisa que não sou bom, <br></br>
                                    mas você é muito boa, vou começar com uma poesia. 
                        </Typography>
                   
                    <Grid container className={classes.grid}>
                        <Grid item className={classes.gridItem} xs > 

                                <Button size="small" color="#F5F1ED"  className={classes.margin} alignItems="center" component={Link} to="/step4">
                                    <a className="text-button" endIcon={<ArrowForwardIosIcon  style={{ fontSize: 12, marginLeft: 5 }} />}>Next</a>
                                    
                                </Button>
                        </Grid>       
                    </Grid>
                </Grid>
            </Paper>
        </div >


    );
}