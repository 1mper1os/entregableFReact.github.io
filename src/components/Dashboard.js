import React from 'react';
import Searchbar from './Searchbar';
import Form from './Form';
import Table from './Table';

function Dashboard() {
    return React.createElement(
        'div',
        { className: 'container-fluid right-portion' },
        React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'mt-4' },
                React.createElement(Searchbar, null),
                React.createElement(
                    'div',
                    { className: 'container mx-2 pe-4' },
                    React.createElement('h4', null, 'Informacion de los clientes'),
                    React.createElement(Form, null),
                    React.createElement(Table, null)
                )
            )
        )
    );
}

export default Dashboard;
