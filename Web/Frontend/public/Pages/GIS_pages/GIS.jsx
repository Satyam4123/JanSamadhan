import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import * as turf from '@turf/turf';
import lucknowWards from '../GIS_pages/data/Lucknow Ward Boundary.json';

// Red marker icon
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Sample complaints
const complaints = [
  { lat: 26.8125, lng: 80.9123, description: 'Water leakage reported' },
  { lat: 26.8135, lng: 80.9135, description: 'Blocked sewage system' },
  { lat: 26.8140, lng: 80.9140, description: 'Street light not working' },
  { lat: 26.8085, lng: 80.9250, description: 'Unauthorized construction reported' },
  { lat: 26.8060, lng: 80.9270, description: 'Garbage dumping in public area' },
  { lat: 26.8055, lng: 80.9245, description: 'Noise pollution complaint' },
];

const GIS = () => {
  const [selectedWard, setSelectedWard] = useState(null);
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const mapRef = useRef();

  const geoJsonStyle = (feature) =>
    selectedWard && feature.properties.id === selectedWard.properties.id
      ? {
          color: '#FF0000',
          weight: 3,
          fillColor: '#FFAAAA',
          fillOpacity: 0.5,
        }
      : {
          color: '#007BFF',
          weight: 2,
          fillColor: '#00BFFF',
          fillOpacity: 0.3,
        };

  const handleWardClick = (feature) => {
    const map = mapRef.current;
    const coordinates = feature.geometry.coordinates[0].map(([lng, lat]) => [lat, lng]);

    if (map) {
      map.fitBounds(coordinates);
    }

    const wardPolygon = turf.polygon(feature.geometry.coordinates);
    const complaintsInWard = complaints.filter((complaint) => {
      const point = turf.point([complaint.lng, complaint.lat]);
      return turf.booleanPointInPolygon(point, wardPolygon);
    });

    setSelectedWard(feature);
    setFilteredComplaints(complaintsInWard);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex p-4">
      
      {/* Left side: Map */}
      <div className="flex-1 bg-white shadow-md rounded-lg p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Geo Tagging Map</h1>

        <MapContainer
          center={[26.8467, 80.9462]}
          zoom={12}
          style={{ height: '600px', width: '100%' }}
          whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          <GeoJSON
            data={lucknowWards}
            style={geoJsonStyle}
            onEachFeature={(feature, layer) => {
              layer.on({
                click: () => handleWardClick(feature),
              });
              layer.bindPopup(
                `<strong>Ward Name:</strong> ${feature.properties['Ward Name']}<br/>
                 <strong>Ward Num:</strong> ${feature.properties['Ward Num']}`
              );
            }}
          />

          {filteredComplaints.map((complaint, idx) => (
            <Marker
              key={idx}
              position={[complaint.lat, complaint.lng]}
              icon={redIcon}
            >
              <Popup>{complaint.description}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Right side: Complaints List */}
      <div className="w-1/3 bg-white shadow-md rounded-lg p-4 ml-4 overflow-y-auto" style={{ maxHeight: '600px' }}>
        <h2 className="text-xl font-semibold mb-4">Complaints for Selected Ward</h2>

        {!selectedWard ? (
          <p>Please click on a ward to view complaints.</p>
        ) : filteredComplaints.length === 0 ? (
          <p>No complaints found in this ward.</p>
        ) : (
          filteredComplaints.map((complaint, idx) => (
            <div key={idx} className="border p-3 rounded-md mb-3 bg-red-100">
              <p><strong>Description:</strong> {complaint.description}</p>
              <p><strong>Lat:</strong> {complaint.lat}, <strong>Lng:</strong> {complaint.lng}</p>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default GIS;
