import ServiceProvider from './ServiceProvider';
import UriService from '@/services/http/UriService';
import HttpAuthService from '@/services/http/AuthService';
import Fly from 'flyio/dist/npm/wx';

export default class HttpServiceProvider extends ServiceProvider {
    register () {
        let http = function () {
            this.fly = Fly;
        };
        this.app.register('$http', http);
        this.app.register('uri', UriService);
        // 产品模型和产品服务
        this.app.register('http.auth', HttpAuthService);
    }
}
