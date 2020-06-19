/* eslint-disable space-before-function-paren */
import Model from './Model';
import _ from 'underscore';

export default class Test extends Model {
    constructor (application) {
        super(application);
        // do something
        this.alias = '';
    }

    computed () {
        return _.extend(super.computed(), {
            textData () {
                return this.state.textData
            }
        });
    }

    data () {
        return _.extend(super.data(), {
            textData: null
        });
    }

    listeners () {
        super.listeners();
        this.addEventListener('test', function ({num}) {
            this.state.textData = num;
        })
    }
}
