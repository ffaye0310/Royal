import { Entry } from "./entry";

export interface Response<T> {
    data : Entry<T>[];
}
