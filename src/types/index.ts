export interface IMain {
    data: IBalanceData;
    responseMessage: string;
    status: string;
}

export interface IBalanceData {
    balanceCommerce: string;
}

export interface IMainProviders {
    data: ICompanies;
    responseMessage: string;
    status: string;
}

export interface ICompanies {
    companies: ICompany[];
}

export interface ICompany {
    company: string;
    image: string
    _id: string;
}
