import React from 'react';

function Searchbar() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            {
                className:
                    'd-flex flex-column flex-md-row align-items-center pb-2 mb-4 container mt-2 pe-4',
            },
            React.createElement(
                'div',
                { className: 'container search-box' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-md-7' },
                        React.createElement(
                            'div',
                            { className: 'input-group mb-3' },
                            React.createElement(
                                'span',
                                {
                                    className: 'input-group-text search-icon',
                                    id: 'basic-addon1',
                                },
                                React.createElement('img', {
                                    src: './search-normal.svg',
                                    alt: '',
                                })
                            ),
                            React.createElement('input', {
                                type: 'text',
                                className: 'form-control search-bar',
                                placeholder: 'Buscar usuario',
                                'aria-label': 'Username',
                                'aria-describedby': 'basic-addon1',
                            })
                        )
                    )
                )
            ),
            React.createElement(
                'button',
                {
                    type: 'button',
                    className: 'btn border-black position-relative',
                },
                React.createElement('img', {
                    src: './notification-bing.svg',
                    alt: '',
                }),
                React.createElement(
                    'span',
                    {
                        className:
                            'position-absolute top-0 start-100 translate-middle badge',
                    },
                    React.createElement('img', {
                        src: './Ellipse 1.svg',
                        alt: '',
                    })
                )
            )
        )
    );
}

export default Searchbar;
