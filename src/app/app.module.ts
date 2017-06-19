import * as angular from "angular";

import {App} from "./app.component";
import {AppTest} from "./components/component_test";
import {TopBar} from "./components/top-bar/top-bar.component";
import {SideNav} from "./components";
import {StatesModule} from "./states";
import {routes} from "./app.route";
import {materialConfig} from "./config/material.config"

angular.module("app", [
    "ngMaterial",
    "ngMdIcons",
    "ngMap",
    StatesModule.name,

])
    .config(materialConfig)
    .config(routes)
    .component(App.selector, App)
    .component(AppTest.selector, AppTest)
    .component(TopBar.selector, TopBar)
    .component(SideNav.selector, SideNav);

angular.bootstrap(document.getElementById("app"), ["app"]);