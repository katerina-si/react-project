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
                    {columns.map((c) => <th key={c.key}>{c.title}</th>)}
                </tr>
            </thead>
            <tbody>
                {dataSource.map((item) =>
                    <tr key={item.key}>
                        {columns.map((c) => {
                            const field = item[`${c.key}`];
                            return <td key={c.key}>{c.render ? c.render(item) : field}</td>
                        })}
                    </tr>)}
            </tbody>
        </table>
    );
}
export {Table};
