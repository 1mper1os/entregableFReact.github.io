import React from 'react';
import SidebarOptions from './SidebarOptions';
import SideOptions from '../Data/SideOptions';

function Sidebar() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'div',
            { className: 'mt-4 ps-3' },
            React.createElement(
                'div',
                {
                    className: 'd-flex flex-column flex-shrink-0 p-3 ps-2 container sidebar',
                    style: { width: '14rem', height: '100%' },
                },
                React.createElement(
                    'a',
                    {
                        href: '/',
                        className:
                            'd-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none',
                    },
                    React.createElement(
                        'span',
                        { className: 'fs-4 logo mb-5' },
                        'Medico Sales'
                    )
                ),
                React.createElement(
                    'ul',
                    { className: 'nav nav-pills flex-column mb-auto' },
                    SideOptions.map((e, i) =>
                        React.createElement(SidebarOptions, { data: e, key: i })
                    )
                ),
                React.createElement(
                    'a',
                    {
                        href: '#',
                        className: 'nav-link link-body-emphasis text-muted ps-4 pb-3',
                    },
                    React.createElement('img', {
                        src: './help.svg',
                        alt: '',
                    }),
                    'Help'
                )
            )
        )
    );
}

export default Sidebar;
