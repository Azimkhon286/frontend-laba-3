import React from 'react';
import './Contacts.css';

export default function Contacts() {
    return (
        <section className="Contacts" id="contacts">
            <h2 className="Contacts__label">КОНТАКТЫ</h2>
            <div className="Contacts__content-container">
                <div className="Contacts__text-container">
                    <div className="Contacts__description">
                        <img className="Contacts__description-icon" src="images/icons/location.svg" alt="location" />
                            <p>655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67</p>
                    </div>
                    <div className="Contacts__description">
                        <img className="Contacts__description-icon" src="images/icons/phone.svg" alt="phone" />
                            <p>
                                8 (3902) 22-53-35
                                <br/>
                                8 (3902) 24-30-71
                            </p>
                    </div>
                    <div className="Contacts__description">
                        <img className="Contacts__description-icon" src="images/icons/email.svg" alt="email" />
                            <p>kancler@vskhakasia.ru</p>
                    </div>
                </div>
                <div>
                    <img className="Contacts__map-img" src="images/Map.png" alt="map" />
                </div>
            </div>
        </section>
    );
}