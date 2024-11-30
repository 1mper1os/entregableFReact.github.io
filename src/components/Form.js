import React from 'react';
import FormFields from './FormFields';

function Form() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { className: 'mt-4 mb-3' },
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(FormFields, {
                    label: 'Cliente',
                    placeholder: 'Ingresa el Nombre',
                }),
                React.createElement(FormFields, {
                    label: 'Busqueda por ID',
                    placeholder: 'Ingresa el ID',
                }),
                React.createElement(FormFields, {
                    label: 'Fecha de Inicio',
                    placeholder: 'Fecha de Inicio',
                }),
                React.createElement(FormFields, {
                    label: 'Fecha de Finalizacion',
                    placeholder: 'Fecha de Finalizacion',
                })
            )
        )
    );
}

export default Form;
