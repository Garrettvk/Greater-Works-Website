import React from "react";
export function ContentBlock({ image, slideshow, video, alt, className, id, label, body, phone, list, beforeAndAfter}) {
    const bodyText = body?.map((text) => <p>{text}</p>);
    return (
        <>
            {image && <img src={image} alt={alt} className={className} />}

            {slideshow && <div className={className} style={{height: "0", marginTop: "41px"}}>{slideshow}</div>}

            {video && <div className={className}>{video}</div>}

            {/* container for before and after text */}
            {beforeAndAfter}

            {id && <div id={id}>
                <b className="content__title">{label}</b>

                {bodyText}

                {phone}

                {list}
            </div>
            }
        </>
    );
}
