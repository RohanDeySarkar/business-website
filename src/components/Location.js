import React, {useEffect} from 'react';

import {  Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import "./Location.css";

import mapImg from "./images/home-card-img1.jpg";

import Navbar from './Navbar';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      backgroundColor: '#FFFFFF'
    },
    media: {
      maxHeight: 140,
      maxWidth: 400,
    },
    details: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    email: {
        margin: "7px"
    }
});

function Location() {
    const center = { lat: 22.488936, lng:  88.299433 };
    const zoom = 12;

    const classes = useStyles();

    useEffect(() => {
        const L = require("leaflet");
    
        delete L.Icon.Default.prototype._getIconUrl;
    
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
          iconUrl: require("leaflet/dist/images/marker-icon.png"),
          shadowUrl: require("leaflet/dist/images/marker-shadow.png")
        });
    }, []);

    return (
        <div className="location">
            <div className="header">
                <div className="header__left">
                    <Navbar /> 
                    <h2>Location</h2> 
                </div>

                <div className="header__right">
                    <h2>ti-interior hub</h2>
                </div>
            </div>

            <div className="map">
                <LeafletMap center={center} zoom={zoom}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    /> 
                    <Marker position={center}>
                        <Popup>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia 
                                        className={classes.media}
                                        component="img"
                                        alt="media"
                                        image={mapImg}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            TI-Interior Hub
                                        </Typography>
                                        <div className={classes.details}>
                                            <CallIcon />
                                            <p>9123306751</p>
                                        </div>
                                        <div className={classes.details}>
                                            <EmailIcon className={classes.email}/>
                                            <p>tiinteriorhub@gmail.com</p>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Popup>
                    </Marker>
                </LeafletMap>
            </div>
        </div>
    )
}

export default Location;
