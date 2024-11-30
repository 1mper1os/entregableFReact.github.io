import React from 'react';

function TableValues(props) {
    const { InvoiceID, Date, Customer, PayableAmount, PaidAmount, Due } = props.data;

    return (
        <tr>
            <th scope="row">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id={`flexCheckDefault-${InvoiceID}`} // Ajout d'un ID unique
                    />
                </div>
            </th>
            <td className="text-primary">{InvoiceID}</td>
            <td>{Date}</td>
            <td>{Customer}</td>
            <td>${PayableAmount}</td>  {/* Correction de l'interpolation */}
            <td>${PaidAmount}</td>      {/* Correction de l'interpolation */}
            <td>${Due}</td>            {/* Correction de l'interpolation */}
        </tr>
    );
}

export default TableValues;
