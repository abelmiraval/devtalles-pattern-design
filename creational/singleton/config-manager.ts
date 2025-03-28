class ConfigManager {
    private config: Record<string, string> = {};

    public setConfig(key: string, value: string): void {
        this.config[key] = value;
    }

    public getConfig(key: string): string | null {
        return this.config[key];
    }

    public getAllConfig(): Record<string, string> {
        return { ...this.config };
    }
}

//Es complicado para hacer pruebas, si le ponemos el export arriba alguien puede crear instancia de ConfigManager
//Esta es la unica instancia de ConfigManager que se puede crear
export const configManager = new ConfigManager();