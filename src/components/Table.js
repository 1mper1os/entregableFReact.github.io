import React from 'react';
import TableData from '../Data/TableData';
import TableValues from './TableValues';

function Table() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'table',
            { className: 'table spaced-table table-borderless' },
            React.createElement(
                'thead',
                null,
                React.createElement(
                    'tr',
                    null,
                    React.createElement(
                        'th',
                        { scope: 'col' },
                        React.createElement(
                            'div',
                            { className: 'form-check' },
                            React.createElement('input', {
                                className: 'form-check-input',
                                type: 'checkbox',
                                value: '',
                                id: 'flexCheckDefault',
                            })
                        )
                    ),
                    React.createElement('th', { scope: 'col' }, 'ID'),
                    React.createElement('th', { scope: 'col' }, 'Fecha'),
                    React.createElement('th', { scope: 'col' }, 'Cliente'),
                    React.createElement('th', { scope: 'col' }, 'Total'),
                    React.createElement('th', { scope: 'col' }, 'Monto Pagado'),
                    React.createElement('th', { scope: 'col' }, 'Monto Faltante'),
                )
            ),
            React.createElement(
                'tbody',
                null,
                TableData.map((e, i) =>
                    React.createElement(TableValues, { data: e, key: i })
                )
            )
        )
    );
}

export default Table;
