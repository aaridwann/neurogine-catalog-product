import { useQuery } from '@Neurogine/core-network';
import CatalogService from '../../Service/CatalogService';
import useSearchStore from '../../Store/Search';
import useDebounce from '../UseDebounce';
const useProductSearch = () => {
    const { query } = useSearchStore();
    const debouncedQuery = useDebounce(query, 400);
    const { data, isLoading, error, isFetching, isFetched } = useQuery({
        queryKey: ['products', 'search', debouncedQuery],
        queryFn: () => CatalogService.fetchProductsBySearch(debouncedQuery),
        enabled: debouncedQuery.toString().trim().length > 0,
    });
    return { data, isLoading, error, isFetching, isFetched };
};
export default useProductSearch;
