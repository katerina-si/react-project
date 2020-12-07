import React from 'react';
import styles from './Table.module.scss'

export interface ITableColumnItem {
    title: string,
    key: string,
    render?: (value?: any) => {},
}
export interface ITableDataSourceItem {
    key: string;
    [key: string]: string;
}
type Props = {
    columns: ITableColumnItem[];
    dataSource: ITableDataSourceItem[];
}


const Table = ({ columns, dataSource }: Props) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {columns.map((column) => <th key={column.key}>{column.title}</th>)}
                </tr>
            </thead>
            <tbody>
                {dataSource.map((item) =>
                    <tr key={item.key}>
                        {columns.map((column) => {
                            const field = item[`${column.key}`];
                            return <td key={column.key}>{column.render ? column.render(item) : field}</td>
                        })}
                    </tr>)}
            </tbody>
        </table>
    );
}
export { Table };
