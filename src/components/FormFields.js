import React from 'react';

function FormFields(props) {
    return React.createElement(
        'div',
        { className: 'col-md-3 col-sm-12' },
        React.createElement(
            'div',
            { className: 'mb-3' },
            React.createElement(
                'label',
                {
                    htmlFor: 'exampleFormControlInput1',
                    className: 'form-label mb-3 ms-1 input-label',
                },
                props.label
            ),
            React.createElement('input', {
                type: 'email',
                className: 'form-control inp-placeholder',
                id: 'exampleFormControlInput1',
                placeholder: props.placeholder,
            })
        )
    );
}

export default FormFields;
