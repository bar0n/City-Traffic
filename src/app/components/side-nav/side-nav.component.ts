export class  SideNavController{

}
export const SideNav={
    selector: "sideNav",
    controller: SideNavController,
    controllerAs: "SideNav",
    template: require("./side-nav.html"),
    bindings: {
        componentId: "@",
    },
};
