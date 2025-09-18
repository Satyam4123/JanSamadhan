import React, { useState, useRef, useEffect } from 'react';
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
  { lat: 26.8085, lng: 80.9250, description: 'Unauthorized construction reported' },
  { lat: 26.8060, lng: 80.9270, description: 'Garbage dumping in public area' },
  { lat: 26.8055, lng: 80.9245, description: 'Noise pollution complaint' },
];

const GeoTagging = () => {
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const mapRef = useRef();

  const ward120Feature = lucknowWards.features.find(f => f.properties.id === 120);
  const ward120GeoJSON = { type: 'FeatureCollection', features: [ward120Feature] };

  const geoJsonStyle = {
    color: '#FF0000',
    weight: 3,
    fillColor: '#FFAAAA',
    fillOpacity: 0.5,
  };

  useEffect(() => {
    if (!ward120Feature || !mapRef.current) return;

    const coordinates = ward120Feature.geometry.coordinates[0].map(([lng, lat]) => [lat, lng]);
    const bounds = L.latLngBounds(coordinates);
    mapRef.current.fitBounds(bounds);

    const wardPolygon = turf.polygon(ward120Feature.geometry.coordinates);
    const complaintsInWard = complaints.filter((complaint) => {
      const pt = turf.point([complaint.lng, complaint.lat]);
      return turf.booleanPointInPolygon(pt, wardPolygon);
    });

    setFilteredComplaints(complaintsInWard);
  }, [ward120Feature]);

  // When a complaint is clicked in the list
  const handleComplaintClick = (complaint) => {
    setSelectedComplaint(complaint);

    if (mapRef.current) {
      // Center map on the complaint location
      mapRef.current.setView([complaint.lat, complaint.lng], 16);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex p-4 h-full">

      {/* Left side: Map */}
      <div className="flex-1 bg-white shadow-md rounded-lg p-4 h-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Geo Tagging Map - Ward 120</h1>

        <MapContainer
          center={[26.8067, 80.9562]}
          zoom={13}
          style={{ height: '500px', width: '100%' }}
          whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          <GeoJSON
            data={ward120GeoJSON}
            style={geoJsonStyle}
            onEachFeature={(feature, layer) => {
              layer.bindPopup(
                `<strong>Ward Name:</strong> ${feature.properties['Ward Name']}<br/>
                 <strong>Ward Num:</strong> ${feature.properties['Ward Num']}`
              );
            }}
          />

          {complaints.map((complaint, idx) => (
            <Marker
              key={idx}
              position={[complaint.lat, complaint.lng]}
              icon={redIcon}
            >
              <Popup>{complaint.description}</Popup>
            </Marker>
          ))}

          {/* Highlight selected complaint */}
          {selectedComplaint && (
            <Marker
              position={[selectedComplaint.lat, selectedComplaint.lng]}
              icon={redIcon}
            >
              <Popup>{selectedComplaint.description}</Popup>
            </Marker>
          )}

        </MapContainer>
      </div>

      {/* Right side: Complaints List */}
      <div className="w-1/3 bg-white shadow-md rounded-lg p-4 ml-4 overflow-y-auto" style={{ maxHeight: '600px' }}>
        <h2 className="text-xl font-semibold mb-4">Complaints for Ward 120</h2>

        {complaints.length === 0 ? (
          <p>No complaints found in this ward.</p>
        ) : (
          complaints.map((complaint, idx) => (
            <div
              key={idx}
              className="border p-3 rounded-md mb-3 bg-red-100 cursor-pointer hover:bg-red-200"
              onClick={() => handleComplaintClick(complaint)}
            >
              <p><strong>Description:</strong> {complaint.description}</p>
              <p><strong>Lat:</strong> {complaint.lat}, <strong>Lng:</strong> {complaint.lng}</p>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default GeoTagging;
