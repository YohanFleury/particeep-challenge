import { FILTER_CATEGORY } from "../reducers/constants";

export const filterCategory = categoryChoosen => {
    return {
        type: FILTER_CATEGORY,
        payload: categoryChoosen
    }
}