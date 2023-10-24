import { Customer } from "../models/order.model";
import { Entry } from "./entry";

export interface Response<T> {
    data : Entry<T>[];
}
