import ServiceProvider from './ServiceProvider';
import Model from '../models';
import App from '@/models/App';
import BarHeight from '../models/BarHeight';
import Test from '../models/Test'
export default class ModelServiceProvider extends ServiceProvider {
    register () {
        let models = new Model(this.app);
        this.app.register('models', models);
        this.app.registerModel('model.global.barHeight', BarHeight);
        this.app.registerModel('model.test', Test);


        this.app.registerModel('model.app', App);

    }

    boot () {

    }
}
