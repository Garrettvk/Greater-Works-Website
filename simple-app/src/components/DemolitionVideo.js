import React from "react";
import demolitionVideo from "videos/demolitionVideo.mp4";
import "styles/DemolitionVideo.css";

export function DemolitionVideo() {
    return (
        <div className="demolitionVideo">
            <video src={demolitionVideo} muted autoPlay loop />

            <div className="demolitionVideo__content" id="content5">
                <b className="content__title">
                    Demolition - Interior and exterior
                </b>

                <p className="content__body">
                    We offer demolition services including water damage removal,
                    drywall removal, wall paper removal, precision counter top
                    cutting, cabinetry, concrete cutting/removal and more...
                </p>
            </div>
        </div>
    );
}
