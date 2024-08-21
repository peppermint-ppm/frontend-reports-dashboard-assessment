import { useEffect } from 'react';
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



const { MapContainer } = ReactLeaflet;

const DynamicMap = ({ children, className, width, height, ...rest }) => {


  // if ( className ) {
  //   mapClassName = `${mapClassName} ${className}`;
  // }

  useEffect(() => {
    (async function init() {
    //   delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: 'leaflet/images/marker-icon-2x.png',
        iconUrl: 'leaflet/images/marker-icon.png',
        shadowUrl: 'leaflet/images/marker-shadow.png',
      });
    })();
  }, []);

  return (
    <MapContainer className={"w-[36vw] h-[40vh]"} {...rest}>
      {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  )
}

export default DynamicMap;