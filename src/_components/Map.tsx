import React, { useEffect, useState } from "react";
import {
  AdvancedMarker,
  Map,
  MapCameraChangedEvent,
  Pin,
} from "@vis.gl/react-google-maps";

export const MapBox = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set the flag to true once the component is mounted (client-side)
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Do not render the map during SSR
  }

  return (
    <div className="relative w-full">
      <iframe
        width="600"
        height="400"
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.627376926965!2d77.021654911321!3d28.610953384958286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6994c8bf34cc5%3A0x901c2232fd1376a9!2sSphinx%20Computers%20-%20Best%20Computer%20Shop%20in%20Delhi%20and%20Jharkhand!5e0!3m2!1sen!2sin!4v1726076695253!5m2!1sen!2sin"
        title="Astra WebLabs, Delhi, India"
        aria-label="Astra WebLabs, Delhi, India Map"
        data-rocket-lazyload="fitvidscompatible"
        data-lazy-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.627376926965!2d77.021654911321!3d28.610953384958286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6994c8bf34cc5%3A0x901c2232fd1376a9!2sSphinx%20Computers%20-%20Best%20Computer%20Shop%20in%20Delhi%20and%20Jharkhand!5e0!3m2!1sen!2sin!4v1726076695253!5m2!1sen!2sin"
        data-ll-status="loaded"
        className="entered lazyloaded w-full border-0"
      ></iframe>
    </div>
  );
};
