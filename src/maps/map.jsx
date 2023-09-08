import React from "react";
import "./map.css";
export default function Map() {
  return (
    <div className="map-1">
      <iframe
        width="100%"
        height="650"
        id="gmap_canvas"
        src="https://www.google.com/maps?ll=41.224622,69.270313&z=16&t=m&hl=ru&gl=US&mapclient=embed&cid=14869350032926088797"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
}
