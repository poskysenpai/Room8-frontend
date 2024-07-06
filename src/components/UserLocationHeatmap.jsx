// src/components/UserLocationHeatmap.jsx
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.heat';

const data = [
  [37.7749, -122.4194, 0.8],
  [34.0522, -118.2437, 0.7],
  [40.7128, -74.0060, 0.9],
  [36.1699, -115.1398, 0.6],
  [51.5074, -0.1278, 0.8],
];

const HeatmapLayer = ({ points }) => {
  const map = useMap();

  useEffect(() => {
    const heat = L.heatLayer(points, {
      radius: 25,
      blur: 15,
      maxZoom: 17,
      gradient: {
        0.2: 'rgba(255, 0, 0, 0.2)', // Light red
        0.4: 'rgba(255, 0, 0, 0.4)', // Medium red
        0.6: 'rgba(255, 0, 0, 0.6)', // Darker red
        0.8: 'rgba(255, 0, 0, 0.8)', // Darker red
        1.0: 'rgba(255, 0, 0, 1.0)'  // Full red
      }
    }).addTo(map);

    return () => {
      map.removeLayer(heat);
    };
  }, [map, points]);

  return null;
};

const UserLocationHeatmap = () => (
  <div className="bg-white p-4 shadow rounded">
    <h3 className="text-xl font-semibold mb-4">User Location Heatmap</h3>
    <MapContainer center={[37.7749, -122.4194]} zoom={5} scrollWheelZoom={false} className="h-96">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <HeatmapLayer points={data} />
    </MapContainer>
  </div>
);

export default UserLocationHeatmap;
