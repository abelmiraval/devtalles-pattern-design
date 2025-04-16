import {COLORS} from "../../helpers";

type Language = 'es' | 'en' | 'fr';

// i18n
export function createGreeter(lang: Language) {
    return function (name: string) {
        const messages = {
            es: `Hola, %c${name}!`,
            en: `Hello, %c${name}!`,
            fr: `Bonjour, %c${name}!`,
        };

        return console.log(messages[lang], COLORS.red);
    };
}

