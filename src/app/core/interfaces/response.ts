import { Customer } from "../models/customer.model";
import { Entry } from "./entry";

export interface Response {
    data : Entry<Customer>[];
}
