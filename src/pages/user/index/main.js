import App from './index';
import Vue from 'vue';
const application = wx.$app;
if (application) {
    application.setComponent(App).run(function () {
        this.route = 'index';
    }, function () {
        this.currentPage = new Vue(this.mountComponent);
    });
}
