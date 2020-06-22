import App from './index';
import Vue from 'vue';
import Test from './command/Test'

const application = wx.$app;

if (application) {
    application.setComponent(App).run(function () {
        this.route = 'index';
        this.registerCommand(Test.commandName(), Test)
    }, function () {
        this.currentPage = new Vue(this.mountComponent);
    });
}
