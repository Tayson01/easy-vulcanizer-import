import "leaflet/dist/leaflet.css";
import { Circle, CircleMarker, MapContainer, Popup, TileLayer, Tooltip } from "react-leaflet";

import { BASE, mapRings, zones } from "@/lib/site-data";

export default function CoverageMap() {
  return (
    <MapContainer
      center={BASE}
      zoom={9}
      scrollWheelZoom={false}
      className="h-[420px] w-full"
      style={{ background: "transparent" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {[...mapRings].reverse().map((ring) => (
        <Circle
          key={ring.km}
          center={BASE}
          radius={ring.radius}
          pathOptions={{
            color: "#2563eb",
            weight: 1.5,
            opacity: 0.55,
            fillColor: "#2563eb",
            fillOpacity: 0.07,
          }}
        >
          <Tooltip direction="top">{`${ring.minutes} — rază ${ring.km} km`}</Tooltip>
        </Circle>
      ))}

      <CircleMarker
        center={BASE}
        radius={9}
        pathOptions={{ color: "#ffffff", weight: 3, fillColor: "#2563eb", fillOpacity: 1 }}
      >
        <Tooltip permanent direction="top" offset={[0, -8]}>
          Baza noastră · Constanța
        </Tooltip>
      </CircleMarker>

      {zones.map((z) => (
        <CircleMarker
          key={z.slug}
          center={z.coords}
          radius={6}
          pathOptions={{ color: "#ffffff", weight: 2, fillColor: "#16a34a", fillOpacity: 1 }}
        >
          <Popup>
            <span className="font-semibold">{z.name}</span>
            <br />
            Sosire estimată: {z.etaMinutes}
            <br />
            <a href={`/zone/${z.slug}`} className="font-semibold text-blue-600">
              Află mai mult →
            </a>
          </Popup>
          <Tooltip direction="top">{`${z.name} · ${z.etaMinutes}`}</Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
