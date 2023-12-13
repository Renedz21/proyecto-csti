import { getActualBalance } from "@/helpers/get-balance";
import { useQuery } from "@tanstack/vue-query";

export const useBalance = () => {
    const { isPending, isFetching, isError, data, error, isLoading } = useQuery({
        queryKey: ['getActualBalance'],
        queryFn: getActualBalance,
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