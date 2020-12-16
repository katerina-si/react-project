import qs from 'qs';
import { defaultPaginationState } from '../components/table-with-paginator/PaginatorConfig';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}
export const GetLimitAndPageParams = () => {
    const query = useQuery();
    const { limit = defaultPaginationState.limit, page = defaultPaginationState.page } = qs.parse(query.toString());
    return {
        limit, page
    }
}

export const GetUrlParams = (params: any) => {
    return qs.stringify(params)
}