
"use client"
import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('./info.svg'),
    iconRetinaUrl: require('./info.svg'),
    iconAnchor: undefined,
    popupAnchor: undefined,
    shadowUrl: undefined,
    shadowSize: undefined,
    shadowAnchor: undefined,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { iconPerson };