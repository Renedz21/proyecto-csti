import { getProviders } from "@/helpers/get-balance";
import { useQuery } from "@tanstack/vue-query";

export const useGetProviders = () => {
    const { isPending, isFetching, isError, data, error, isLoading } = useQuery({
        queryKey: ['getProviders'],
        queryFn: getProviders,
    })

    return {
        isPending,
        isFetching,
        isError,
        data,
        error,
        isLoading,
    }
}