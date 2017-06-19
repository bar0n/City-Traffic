import * as angular from "angular";

import { Dashboard } from "./dashboard.component";
import { TrafficMap } from "./components";

export const DashboardModule: ng.IModule = angular.module("app.states.dashboard", [])
    .component(Dashboard.selector, Dashboard)
    .component(TrafficMap.selector, TrafficMap);

//AIzaSyDlXTh5ICpObmXLPny6f5Cux43Quu3PLLQ