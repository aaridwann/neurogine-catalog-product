export interface DetailState {
    data: Record<string, unknown>[];
    loading: boolean;
    error: unknown;
}

export interface DetailAction {
    type: string;
    payload: DetailState['data'];
}