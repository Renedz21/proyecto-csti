import axiosInstance from '@/lib/index';
import type { IMain, IMainProviders } from '@/types/index';

export const getActualBalance = async () => {
    const { data } = await axiosInstance.get<IMain>('/getActualBalance')
    return data.data.balanceCommerce
}

export const getProviders = async () => {
    const response = await axiosInstance.get<IMainProviders>('/getProviders')
    return response.data.data.companies
}