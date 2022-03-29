import React from "react";
export function Contact({}) {
  return <div className="contact">

                <h4 className="contact__title">Contact Us</h4>

                <div className="contact__info">

                    <div className="contact__email">
                        <a class="mailto" href="mailto:greaterworks805@gmail.com">
                            <i className="fa fa-envelope contact__icon"></i>
                        </a>

                        <p>greaterworks805@gmail.com</p>
                    </div>

                    <div className="contact__address">
                        <a href="https://goo.gl/maps/B8qFfzo218DiKi867" className="mapto">
                            <i className="fa fa-map-marker contact__icon"></i>
                        </a>
                        <p>Greater Works Construction, Inc.</p>
                        <p>7343 El Camino Real, Suite 223</p>
                        <p>Atascadero, CA 93422</p>
                        <p>CSLB 1040332</p>
                    </div>

                    <div className="contact__phone">
                        <a class="callto" href="tel:18054007129';">
                            <i className="fa fa-phone contact__icon"></i>
                        </a>
                        <p>(805) 400-7129</p>
                    </div>

                </div>

            </div>;
}
  