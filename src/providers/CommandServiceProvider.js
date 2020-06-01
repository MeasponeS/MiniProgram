import ServiceProvider from './ServiceProvider';
// 路由跳转命令
import RouterCommand from '@/commands/RouterCommand';
import AppAccessCommand from '@/commands/AppAccessCommand';
// 登录命令
import SignInCommand from '@/commands/SignInCommand';


// 获取导航栏高度
import GetBarHeightCommand from '../commands/BarHeightCommand';

import LoadAccountCommand from '@/commands/LoadAccountCommand';

import RegisterCommand from '@/commands/RegisterCommand';


export default class CommandServiceProvider extends ServiceProvider {
    constructor (app) {
        super(app);
        this.commands = [];
    }

    register () {
        let commands = [
            RouterCommand,
            SignInCommand,
            LoadAccountCommand,
            AppAccessCommand,
            RegisterCommand,
            GetBarHeightCommand,
        ];
        for (let key in commands) {
            this.app.registerCommand(commands[key].commandName(), commands[key]);
        }
    }
}
