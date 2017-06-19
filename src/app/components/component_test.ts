export class TestController {
    static $inject = ["$rootScope"];
    private leftSideNavId: string = "leftNav";
    constructor(
        private $rootScope: ng.IScope,
    ) { }
}

export const AppTest = {
    selector: "test",
    controller: TestController,
    controllerAs: "AppTest",
    template: require("./test.html"),
    bindings: {},
};