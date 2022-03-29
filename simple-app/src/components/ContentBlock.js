import React from "react";
export function ContentBlock({ image, alt, className, id, label, body, phone, list, beforeAndAfter}) {
    const bodyText = body.map((text) => <p>{text}</p>);
    return (
        <>
            <img src={image} alt={alt} className={className} />

            {/* container for before and after text */}
            {beforeAndAfter}

            <div id={id}>
                <b className="content__title">{label}</b>

                {bodyText}

                {phone}

                {list}
            </div>
        </>
    );
}
