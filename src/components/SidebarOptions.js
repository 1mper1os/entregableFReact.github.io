import React from 'react';

function SidebarOptions(props) {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'li',
            { className: 'nav-item side-bar-list mb-4 mt-1' },
            React.createElement(
                'a',
                {
                    href: '#',
                    className: 'nav-link text-muted',
                    'aria-current': 'page',
                },
                React.createElement('img', {
                    className: 'active-line',
                    src: props.data.activeline,
                    style: {
                        visibility: props.data.isActive ? 'visible' : 'hidden',
                    },
                }),
                React.createElement('img', {
                    className: 'sidebar-icon',
                    src: props.data.isActive
                        ? props.data.activimg
                        : props.data.img,
                }),
                React.createElement(
                    'span',
                    { className: props.data.isActive ? 'text-primary' : ' ' },
                    props.data.menu
                )
            )
        )
    );
}

export default SidebarOptions;
