import {ConsumerController} from "../src/controller/ConsumerController";

export const consumerRoutes = [{
    method: "get",
    route: "/consumers",
    controller: ConsumerController,
    action: "all"
}, {
    method: "get",
    route: "/consumers/:id",
    controller: ConsumerController,
    action: "one"
}, {
    method: "post",
    route: "/consumers",
    controller: ConsumerController,
    action: "save"
}, {
    method: "delete",
    route: "/consumers/:id",
    controller: ConsumerController,
    action: "remove"
}];