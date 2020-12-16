import React from 'react';
import styles from './TableWithPaginator.module.scss'
import ReactPaginate from 'react-paginate';
import Select from 'react-select';
import { Table } from '..';
import { ITableColumnItem, ITableDataSourceItem } from '../table/Table';
import { pageLimits, Paginator } from './PaginatorConfig';

type Props = {
    columns: ITableColumnItem[];
    dataSource: ITableDataSourceItem[];
    paginatorState: Paginator;
    onChangePage: (value: number) => void
    onChangeLimit: (value: number) => void
}

const TableWithPaginator = ({ columns, dataSource, onChangePage, onChangeLimit, paginatorState }: Props) => {
    const currentLimit = { value: paginatorState.limit, label: paginatorState.limit }

    return (
        <div>
            <Select className={styles.PageLimiter}
                defaultValue={currentLimit}
                label="Single select"
                onChange={(e: any) => onChangeLimit(e.value)}
                options={pageLimits}
            />
            <Table
                dataSource={dataSource}
                columns={columns}></Table>
            {
                paginatorState ?
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={paginatorState.count / paginatorState.limit}
                        initialPage={paginatorState.page - 1}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={e => onChangePage(e.selected + 1)}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    /> :
                    null
            }
        </div>
    );
}
export { TableWithPaginator };
