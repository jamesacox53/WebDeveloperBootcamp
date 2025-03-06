import { franc } from 'franc';
import langs from 'langs';

const input = process.argv[2];

class LanguageFinder {
    getLanguageStr(input) {
        const inputStr = this._sanitizeInput(input);
        if (!inputStr)
            return "PLEASE INPUT SOME SAMPLE TEXT!";

        const langCodeStr = this._getLangCodeStr(inputStr);
        if (langCodeStr == 'und')
            return "SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!";

        return this._getLanguageStr(langCodeStr);
    }

    _sanitizeInput(input) {
        if (!input) return;

        const inputStr = input.toString();
        if (!inputStr) return;

        return inputStr.trim();
    }

    _getLangCodeStr(inputStr) {
        const langCodeStr = franc(inputStr);
    
        return langCodeStr;
    }

    _getLanguageStr(langCodeStr) {
        const language = langs.where("3", langCodeStr);
        
        if (language) {
            return `Our best guess is: ${language.name}`;
        
        } else {
            return `SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCodeStr}`;
        }
    }
}

const languageFinder = new LanguageFinder();

const languageStr = languageFinder.getLanguageStr(input);
console.log(languageStr);