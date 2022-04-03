import React from "react";

// images
import tools from "./../images/tools.jpg";
import before_after from "./../images/Before-4.jpg";
import design from "./../images/design1.jpg";
import rails from "./../images/rails1.jpg";
import trim from "./../images/trim1.jpg";
import repairs from "./../images/repairs1.jpg";
import owner from "./../images/WVK2020.jpeg";

// components
import { ContentBlock } from "./ContentBlock";
import { DemolitionVideo } from "./DemolitionVideo";
import ImageSlider from "./slideshow/ImageSlider";
import { SliderData } from "./slideshow/SliderData";

export function ContentBlocks() {
    return (
        <>
            {/* first image */}
            <ContentBlock
                image={tools}
                alt={"construction tools"}
                className={"image1"}
                id={"content1"}
                label={"Welcome!"}
                body={[
                    "We are a licensed, bonded and insured General Contracting company. Local to the Central Coast, we specialize in:",
                ]}
                phone={
                    <>
                        <ul>
                            <li> Remodels and additions</li>
                            <li> Escrow request for repairs</li>
                            <li> Home repairs</li>
                            <li> Tile installation</li>
                            <li> Floor installation</li>
                            <li> Drywall texture matching</li>
                            <li> Baseboards, trim and paint</li>
                        </ul>
                    </>
                }
            />

            {/* second image */}
            <ContentBlock
                image={before_after}
                alt={"before and after photo"}
                className={"image2"}
                id={"content2"}
                label={"Kitchen & Bath Remodel"}
                body={[
                    "We can transform any room in your house from tired to fabulous. Even an open concept kitchen is not as costly as you might think. With some preliminary reviews of your current home, we can give you a free estimate, along with options to make your dreams come true.",
                ]}
                beforeAndAfter={
                    <>
                        <div className="before-after">
                            <p>Before</p>
                            <p>After</p>
                        </div>
                    </>
                }
            />

            {/* third image */}
            <ContentBlock
                image={design}
                alt={"blueprint"}
                className={"image3"}
                id={"content3"}
                label={"Design | Build"}
                body={[
                    "Taking time up front to think through your design ideas will save you time and money! We will work with you and your designer to ensure your project will be done just right, on time and on budget.",
                    "If you are a do-it-yourself type, we can assist with some of the more specialized trades. Give you that added help to get your project done, and looking just right.",
                ]}
            />

            {/* fourth image */}
            <ContentBlock
                image={rails}
                alt={"staircase"}
                className={"image4"}
                id={"content4"}
                label={"Metal Stairs & Railings"}
                body={[
                    "For those who are looking for a modern, sleek look, we can build and install metal stairs and rails. Unlike store bought metal railing systems, our design uses solid metal rails, not the bulky wires. They can even be anodized or coated to a variety of colors to match your current interior design.",
                ]}
            />

            {/* fifth image */}
            <ContentBlock
                image={trim}
                alt={"wood trim"}
                className={"image5"}
                id={"content5"}
                label={"Custom Trim Fabrication"}
                body={[
                    "Custom homes require custom trim. If your current builder is installing cut to length trim, you are selling yourself short. We can fabricate custom designed window and opening trim to compliment your design needs. You can have your contractor install our units and truly dress up your finish look.",
                ]}
            />

            {/* sixth image */}
            <ContentBlock
                image={repairs}
                alt={"man holding on for dear life"}
                className={"image6"}
                id={"content6"}
                label={"Escrow Repair Specialists"}
                body={[
                    "You just had a home inspection and have days before closing escrow. Sound familiar? We have experienced crews and licensed subs available for a quick response.",
                    "Call or text, we can help.",
                ]}
                phone={<a href="tel:18054007129">(805) 400-7129</a>}
            />

            {/* seventh image */}
            <ContentBlock
                video={<DemolitionVideo/>}
                alt={"staircase"}
                className={"image7"}
                id={"content7"}
                label={"Demolition Interior and Exterior"}
                body={[
                    "We offer demolition services including water damage removal, drywall removal, wall paper removal, precision counter top cutting, cabinetry, concrete cutting/removal and more...",
                ]}
            />

            {/* eighth image */}
            <ContentBlock
                slideshow={<ImageSlider slides={SliderData} />}
            />

            {/* ninth image */}
            <ContentBlock
                image={owner}
                alt={"man holding on for dear life"}
                className={"image9"}
                id={"content9"}
                label={"Escrow Repair Specialists"}
                body={[
                    "Thank you for looking at our website. My building background started early, from tree houses with neighborhood kids to my first Building Permit in 2001. It has been a lifetime of experience and a journey well traveled. My crew and I look forward to serving you! CSLB General Contractor No.1040332",
                ]}
            />
        </>
    );
}
