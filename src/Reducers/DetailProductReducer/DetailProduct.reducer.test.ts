import { describe, it, expect } from "vitest";

import { detailProductReducer } from "./DetailProduct.reducer";

// eslint-disable-next-line max-lines-per-function
describe("Reducer: DetailProduct", () => {
    it("should return the initial state", () => {
        const initialState = {
            data: [],
            loading: false,
            error: null,
        };

        expect(detailProductReducer(initialState, { type: "SET_DATA_DETAIL_PRODUCT", payload: [] })).toEqual(initialState);
    });

    it("should handle SET_DATA_DETAIL_PRODUCT", () => {
        const action = {
            type: "SET_DATA_DETAIL_PRODUCT",
            payload: [{ id: 1, name: "Product 1" }],
        };

        const expectedState = {
            data: [{ id: 1, name: "Product 1" }],
            loading: false,
            error: null,
        };

        expect(detailProductReducer(undefined, action)).toEqual(expectedState);
    });

    it("should handle GET_DETAIL_PRODUCT_REQUEST", () => {
        const action = {
            type: "GET_DETAIL_PRODUCT_REQUEST",
            payload: [],
        };

        const expectedState = {
            data: [],
            loading: true,
            error: null,
        };

        expect(detailProductReducer(undefined, action)).toEqual(expectedState);
    });

    it("should handle GET_DETAIL_PRODUCT_SUCCESS", () => {
        const action = {
            type: "GET_DETAIL_PRODUCT_SUCCESS",
            payload: [{ id: 1, name: "Product 1" }],
        };

        const expectedState = {
            data: [{ id: 1, name: "Product 1" }],
            loading: false,
            error: null,
        };

        expect(detailProductReducer(undefined, action)).toEqual(expectedState);
    });

    it("should handle GET_DETAIL_PRODUCT_FAILED", () => {
        const action = {
            type: "GET_DETAIL_PRODUCT_FAILED",
            payload: [],
        };

        const expectedState = {
            data: [],
            loading: false,
            error: "Error",
        };

        expect(detailProductReducer(undefined, action)).toEqual(expectedState);
    });
});