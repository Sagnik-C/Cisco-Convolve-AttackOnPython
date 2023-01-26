import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import products from "../../data.json";

export default function Orders({ product }) {
    return (
        <React.Fragment>
            <Title>Predictions</Title>
            <Table style={{ tableLayout: 'fixed' }} size="small">
                <TableHead>
                    <TableRow>
                        {Object.keys(products[product]).map((model => <TableCell align="center" key={model}>{model}</TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.values(products[product]["Date"]).map((date, index) => (
                        <TableRow key={"value" + index}>
                            {Object.keys(products[product]).map(model => <TableCell align="center">{products[product][model][index]}</TableCell>)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}