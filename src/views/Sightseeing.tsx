import React from 'react';
import './Sightseeing.css';

export default function Sightseeing() {
    return (
        <section className="Sightseeing" id="sightseeing">
            <h2 className="Sightseeing__label">Достопримечательности</h2>
            <div className="Sightseeing__content-container">
                <div className="Sightseeing__card">
                    <img src="images/bridge-image.png" alt="bridge"/>
                    <div className="Sightseeing__card_text-container">
                        <h4>Тропа предков</h4>
                        <p className="Sightseeing__card_description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum
                            pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornare condimentum
                            fermentum. Integer mattis pretium tortor dictum tristique. Donec in congue mauris. Quisque
                            vitae nisi ultricies, efficitur odio vel, porta nulla. Donec porta, mauris nec pharetra
                            mollis,
                            diam lorem luctus velit, nec ultricies nunc quam posuere dui. Donec at nisl lorem. Sed vitae
                            sapien metus. In erat felis, pharetra vitae libero eu, posuere accumsan odio.
                        </p>
                        <p className="Sightseeing__card_description">
                            Fusce eget mauris ullamcorper mi fermentum ullamcorper. Donec egestas mollis dolor, a
                            dignissim
                            dolor venenatis eu. Suspendisse quis quam laoreet, mattis neque eu, feugiat lectus. Maecenas
                            non urna mollis, ultricies eros vel, ullamcorper risus. Nulla hendrerit venenatis erat, in
                            rhoncus quam placerat nec. Ut feugiat nisi in mattis lacinia. Morbi eleifend, neque eget
                            dapibus
                            scelerisque, ligula nisl malesuada odio, et imperdiet metus mi pretium enim.
                        </p>
                    </div>
                </div>
                <div className="Sightseeing__card_reverted">
                    <img src="images/bridge-image.png" alt="bridge"/>
                    <div className="Sightseeing__card_text-container">
                        <h4>Приисковый</h4>
                        <p className="Sightseeing__card_description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum
                            pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornare condimentum
                            fermentum. Integer mattis pretium tortor dictum tristique. Donec in congue mauris. Quisque
                            vitae nisi ultricies, efficitur odio vel, porta nulla. Donec porta, mauris nec pharetra
                            mollis,
                            diam lorem luctus velit, nec ultricies nunc quam posuere dui. Donec at nisl lorem. Sed vitae
                            sapien metus. In erat felis, pharetra vitae libero eu, posuere accumsan odio.
                        </p>
                        <p className="Sightseeing__card_description">
                            Fusce eget mauris ullamcorper mi fermentum ullamcorper. Donec egestas mollis dolor, a
                            dignissim
                            dolor venenatis eu. Suspendisse quis quam laoreet, mattis neque eu, feugiat lectus. Maecenas
                            non urna mollis, ultricies eros vel, ullamcorper risus. Nulla hendrerit venenatis erat, in
                            rhoncus quam placerat nec. Ut feugiat nisi in mattis lacinia. Morbi eleifend, neque eget
                            dapibus
                            scelerisque, ligula nisl malesuada odio, et imperdiet metus mi pretium enim.
                        </p>
                    </div>
                </div>
                <div className="Sightseeing__card">
                    <img src="images/bridge-image.png" alt="bridge"/>
                    <div className="Sightseeing__card_text-container">
                        <h4>Сундуки</h4>
                        <p className="Sightseeing__card_description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum
                            pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornare condimentum
                            fermentum. Integer mattis pretium tortor dictum tristique. Donec in congue mauris. Quisque
                            vitae nisi ultricies, efficitur odio vel, porta nulla. Donec porta, mauris nec pharetra
                            mollis,
                            diam lorem luctus velit, nec ultricies nunc quam posuere dui. Donec at nisl lorem. Sed vitae
                            sapien metus. In erat felis, pharetra vitae libero eu, posuere accumsan odio.
                        </p>
                        <p className="Sightseeing__card_description">
                            Fusce eget mauris ullamcorper mi fermentum ullamcorper. Donec egestas mollis dolor, a
                            dignissim
                            dolor venenatis eu. Suspendisse quis quam laoreet, mattis neque eu, feugiat lectus. Maecenas
                            non urna mollis, ultricies eros vel, ullamcorper risus. Nulla hendrerit venenatis erat, in
                            rhoncus quam placerat nec. Ut feugiat nisi in mattis lacinia. Morbi eleifend, neque eget
                            dapibus
                            scelerisque, ligula nisl malesuada odio, et imperdiet metus mi pretium enim.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}