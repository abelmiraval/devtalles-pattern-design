import {GetConfigManager} from "./03-singleton";
import {configManager} from "./config-manager";


const config = new GetConfigManager();

const all = configManager.getAllConfig()
console.log(all);

configManager.setConfig('key1', 'value1')
console.log(configManager.getConfig('key1'));