import React from 'react';
import './Sightseeing.css';

const sightseeingArray = [
    {
        class: 'Sightseeing__card',
        title: 'Тропа предков',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum' +
            ' pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornare condimentum' +
            ' fermentum. Integer mattis pretium tortor dictum tristique. Donec in congue mauris. Quisque' +
            ' vitae nisi ultricies, efficitur odio vel, porta nulla. Donec porta, mauris nec pharetra mollis,' +
            ' diam lorem luctus velit, nec ultricies nunc quam posuere dui. Donec at nisl lorem. Sed vitae' +
            ' sapien metus. In erat felis, pharetra vitae libero eu, posuere accumsan odio.',

            'Fusce eget mauris ullamcorper mi fermentum ullamcorper. Donec egestas mollis dolor, a dignissim' +
            ' dolor venenatis eu. Suspendisse quis quam laoreet, mattis neque eu, feugiat lectus. Maecenas' +
            ' non urna mollis, ultricies eros vel, ullamcorper risus. Nulla hendrerit venenatis erat, in' +
            ' rhoncus quam placerat nec. Ut feugiat nisi in mattis lacinia. Morbi eleifend, neque eget dapibus' +
            ' scelerisque, ligula nisl malesuada odio, et imperdiet metus mi pretium enim.'
        ]
    },
    {
        class: 'Sightseeing__card_reverted',
        title: 'Приисковый',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum' +
            ' pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornare condimentum' +
            ' fermentum. Integer mattis pretium tortor dictum tristique. Donec in congue mauris. Quisque' +
            ' vitae nisi ultricies, efficitur odio vel, porta nulla. Donec porta, mauris nec pharetra mollis,' +
            ' diam lorem luctus velit, nec ultricies nunc quam posuere dui. Donec at nisl lorem. Sed vitae' +
            ' sapien metus. In erat felis, pharetra vitae libero eu, posuere accumsan odio.',

            'Fusce eget mauris ullamcorper mi fermentum ullamcorper. Donec egestas mollis dolor, a dignissim' +
            ' dolor venenatis eu. Suspendisse quis quam laoreet, mattis neque eu, feugiat lectus. Maecenas' +
            ' non urna mollis, ultricies eros vel, ullamcorper risus. Nulla hendrerit venenatis erat, in' +
            ' rhoncus quam placerat nec. Ut feugiat nisi in mattis lacinia. Morbi eleifend, neque eget dapibus' +
            ' scelerisque, ligula nisl malesuada odio, et imperdiet metus mi pretium enim.'
        ]
    },
    {
        class: 'Sightseeing__card',
        title: 'Сундуки',
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum' +
            ' pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornare condimentum' +
            ' fermentum. Integer mattis pretium tortor dictum tristique. Donec in congue mauris. Quisque' +
            ' vitae nisi ultricies, efficitur odio vel, porta nulla. Donec porta, mauris nec pharetra mollis,' +
            ' diam lorem luctus velit, nec ultricies nunc quam posuere dui. Donec at nisl lorem. Sed vitae' +
            ' sapien metus. In erat felis, pharetra vitae libero eu, posuere accumsan odio.',

            'Fusce eget mauris ullamcorper mi fermentum ullamcorper. Donec egestas mollis dolor, a dignissim' +
            ' dolor venenatis eu. Suspendisse quis quam laoreet, mattis neque eu, feugiat lectus. Maecenas' +
            ' non urna mollis, ultricies eros vel, ullamcorper risus. Nulla hendrerit venenatis erat, in' +
            ' rhoncus quam placerat nec. Ut feugiat nisi in mattis lacinia. Morbi eleifend, neque eget dapibus' +
            ' scelerisque, ligula nisl malesuada odio, et imperdiet metus mi pretium enim.'
        ]
    },
]

interface ISightseeingCardProps {
    class: string,
    title: string,
    description: string[],
}

export default function Sightseeing() {
    const getSightseeingCard = (cardInfo: ISightseeingCardProps, index: number) => (
        <div className={cardInfo.class} key={index}>
            <img src="images/bridge-image.png" alt="bridge"/>
            <div className="Sightseeing__card_text-container">
                <h4>{cardInfo.title}</h4>
                {cardInfo.description.map((description, index) => (
                    <p className="Sightseeing__card_description" key={index}>
                        {description}
                    </p>
                ))}
            </div>
        </div>
    )

    return (
        <section className="Sightseeing" id="sightseeing">
            <h2 className="Sightseeing__label">Достопримечательности</h2>
            <div className="Sightseeing__content-container">
                {sightseeingArray.map((cardInfo, index) => (
                    getSightseeingCard(cardInfo, index)
                ))}
            </div>
        </section>
    );
}