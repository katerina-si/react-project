export const pageLimits = [
    { value: 5, label: 5, },
    { value: 10, label: 10, },
];

export const defaultPaginationState = {
    limit: 10,
    page: 1,
    count: 0
};

export type Paginator = Readonly<typeof defaultPaginationState>;
