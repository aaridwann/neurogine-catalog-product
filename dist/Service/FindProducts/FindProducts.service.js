import { apiClient, useQuery } from '@Neurogine/core-network';
import useSearchStore from '../../Store/Search';
// https://dummyjson.com/products/search?q=phone
const useSearch = () => {
    const { query, setResultData } = useSearchStore();
    const fetchProducts = async ({ search = '' }) => {
        const { data } = await apiClient.get(`/products/search`, {
            params: { q: search },
        });
        setResultData(data);
        return data;
    };
    return useQuery({
        queryKey: ['Search'],
        queryFn: () => fetchProducts({ search: query }),
        enabled: query.length > 0,
    });
};
export default useSearch;
