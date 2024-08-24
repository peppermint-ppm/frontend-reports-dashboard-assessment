
"use client"
import L from 'leaflet';
import marker from '@/assets/location-sign.svg';

const iconPerson = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    iconAnchor: undefined,
    popupAnchor: undefined,
    shadowUrl: undefined,
    shadowSize: undefined,
    shadowAnchor: undefined,
    iconSize: new L.Point(24, 24),
    className: 'leaflet-div-icon'
});

export { iconPerson };