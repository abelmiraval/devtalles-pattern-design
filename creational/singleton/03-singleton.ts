

import { configManager} from "./config-manager";


export class GetConfigManager{

    public constructor() {
        configManager.setConfig('apiUrl', 'https://localhost:3000/api');
        configManager.setConfig('timeout', '5000');
        configManager.setConfig('apiKey', 'ABC123');


        console.log(configManager.getConfig('apiUrl')); // https://localhost:3000/api
        console.log(configManager.getConfig('timeout')); // 5000
        console.log(configManager.getConfig('apiKey')); // ABC123
    }
}

