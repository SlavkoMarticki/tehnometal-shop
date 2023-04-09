import React, { useEffect, useRef } from 'react';
import L, { LatLngExpression } from 'leaflet';
import Marker from '../../common/assets/map-marker.png';
import 'leaflet/dist/leaflet.css';
import './map.css';

const Map = ({ className }: { className?: string }): React.ReactElement => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize map with center and zoom
    const center: LatLngExpression = [45.4666648, 20.0666664];
    const zoom = 14;
    const map = L.map(mapRef.current as HTMLDivElement).setView(center, zoom);


    // Create tile layer and add to map
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHJhZ2FuNyIsImEiOiJjbGc4Zmg5cWIwZXg5M210Mzl1bm9ydG84In0.9Dv9ooQFfLuYuVzWiaAzRA').addTo(map);

    const myIcon = L.icon({
      iconUrl: Marker
      // ...
    });

    // Add marker on the map
    L.marker(center, { icon: myIcon, bubblingMouseEvents: true }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className={className}
      style={{ height: '400px' }}
    />
  );
};

export default Map;
