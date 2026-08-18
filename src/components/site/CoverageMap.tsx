import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";
import {
  Circle,
  CircleMarker,
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  Tooltip,
  ZoomControl,
} from "react-leaflet";

import { BASE, mapRings, zones } from "@/lib/site-data";

const LIGHT_TILES = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
const DARK_TILES = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

const baseIcon = L.divIcon({
  className: "",
  html: `<span class="vm-base"><span class="vm-base-pulse"></span><span class="vm-base-dot"></span></span>`,
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

function useIsDark() {
  const [dark, setDark] = useState(
    typeof document !== "undefined" && document.documentElement.classList.contains("dark"),
  );
  useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() => setDark(el.classList.contains("dark")));
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return dark;
}

export default function CoverageMap() {
  const dark = useIsDark();

  return (
    <MapContainer
      center={BASE}
      zoom={9}
      minZoom={7}
      scrollWheelZoom={false}
      zoomControl={false}
      className="vm-map h-[460px] w-full"
      style={{ background: "transparent" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url={dark ? DARK_TILES : LIGHT_TILES}
        subdomains={["a", "b", "c", "d"]}
      />
      <ZoomControl position="bottomright" />

      {/* trasee spre localități */}
      {zones.map((z) => (
        <Polyline
          key={`route-${z.slug}`}
          positions={[BASE, z.coords]}
          pathOptions={{ color: "#2563eb", weight: 1.2, opacity: 0.35, dashArray: "4 8" }}
        />
      ))}

      {[...mapRings].reverse().map((ring, i) => (
        <Circle
          key={ring.km}
          center={BASE}
          radius={ring.radius}
          pathOptions={{
            color: "#2563eb",
            weight: 1.5,
            opacity: 0.4 + i * 0.15,
            dashArray: "6 6",
            fillColor: "#2563eb",
            fillOpacity: 0.05 + i * 0.03,
          }}
        >
          <Tooltip direction="top" className="vm-tip">{`${ring.minutes} — rază ${ring.km} km`}</Tooltip>
        </Circle>
      ))}

      <Marker position={BASE} icon={baseIcon} zIndexOffset={1000}>
        <Tooltip permanent direction="top" offset={[0, -12]} className="vm-tip vm-tip-strong">
          Baza noastră · Constanța
        </Tooltip>
      </Marker>

      {zones.map((z) => (
        <CircleMarker
          key={z.slug}
          center={z.coords}
          radius={7}
          pathOptions={{
            color: "#ffffff",
            weight: 2.5,
            fillColor: "#16a34a",
            fillOpacity: 1,
            className: "vm-zone-dot",
          }}
        >
          <Popup className="vm-popup">
            <span className="block text-[13px] font-extrabold">{z.name}</span>
            <span className="mt-1 block text-[12px] opacity-70">Sosire estimată: {z.etaMinutes}</span>
            <a href={`/zone/${z.slug}`} className="mt-2 inline-block text-[12px] font-bold text-blue-600">
              Află mai mult →
            </a>
          </Popup>
          <Tooltip direction="top" className="vm-tip">{`${z.name} · ${z.etaMinutes}`}</Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
