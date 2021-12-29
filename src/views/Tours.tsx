import React from 'react';
import './Tours.css';

const toursArray = [
    {
        label: 'Название',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
        price: '10 000',
    },
    {
        label: 'Название',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
        price: '10 000',
    },
    {
        label: 'Название',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
        price: '10 000',
    },
    {
        label: 'Название',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
        price: '10 000',
    },
    {
        label: 'Название',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
        price: '10 000',
    },
    {
        label: 'Название',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
        price: '10 000',
    },
]

export default function Tours() {
    return (
        <section className="Tours" id="tours">
            <h2 className="Tours__label">Туры</h2>
            <div className="Tours__content-container">
                {toursArray.map((tour, index) => (
                    <div className="Tours__card" key={index}>
                        <div className="Tours__description-container">
                            <h5>{tour.label}</h5>
                            <p className="Tours__description">
                                {tour.description}
                            </p>
                        </div>
                        <div className="Tours__info_container">
                            <p className="Tours__price">От <b>{tour.price}</b> р.</p>
                            <button>Купить</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}