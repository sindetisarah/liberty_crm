import React, { useState } from 'react'
import PaginationButtons, { dataPagination, PER_COUNT } from '../../components/PaginationButtons';
import './Table.css'

const Table = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(PER_COUNT['10']);

    return (
        <>
            <div className='table-responsive'>
                <table className='table table-modern table--main'>
                    <thead className='table__thead'>
                        <tr>
                            <td className='tr__td' />
                            {props.headers.map(d => {
                                return <th>{d.name}</th>
                            })}
                            <td />
                        </tr>
                    </thead>

                    <tbody className='table__tbody'>
                        {dataPagination(props.data, currentPage, perPage).map((data, i) => (
                            <tr key={i} className='tbody__tr'>
                                <td></td>
                                {Object.values(data).map((val, j) => {
                                    return <td key={j}>{val}</td>
                                })}
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <PaginationButtons
                data={props.data}
                label='items'
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                perPage={perPage}
                setPerPage={setPerPage}
            />
        </>
    )
}

export default Table