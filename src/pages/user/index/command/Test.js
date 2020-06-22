import Command from '../../../../commands/Command';

export default class Test extends Command {
    async handle (num) {
        this.model.test.dispatch('test', {
            num: num
        })
    }

    static commandName () {
        return 'TEST';
    }
}
