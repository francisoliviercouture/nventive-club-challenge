import React, { FunctionComponent, useState } from 'react';

export enum TableHeaderOrder {
    ascending, descending
}

interface TableHeaderFilterProps {
    startOrder?: TableHeaderOrder;
    onToggle?: (order: TableHeaderOrder) => void;
}

export const TableHeaderFilter: FunctionComponent<TableHeaderFilterProps> = ({ startOrder, onToggle, children }) => {

    const [order, setOrder] = useState<TableHeaderOrder>(startOrder ? startOrder : TableHeaderOrder.descending);
    
    function onSpanClick() {
        onToggle && onToggle(order);
        const res = order === TableHeaderOrder.ascending ? TableHeaderOrder.descending : TableHeaderOrder.ascending;
        setOrder(res);
    }

    return (
        <span className="table-header-filter" onClick={onSpanClick}>{children} &#x25BE;</span>
    );
} 