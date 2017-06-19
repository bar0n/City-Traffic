import "./traffic-map.scss";
export class TrafficMapController {

}
export const TrafficMap = {
    selector: "trafficMap",
    controller: TrafficMapController,
    controllerAs: "TrafficMap",
    template: require("./traffic-map.html"),
    bindings: {
        zoom: "<",
        center: "<",
    },
};