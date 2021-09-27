"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const words_json_1 = __importDefault(require("./words.json"));
class ProfanityFilter {
    static isProfane(content) {
        const words = content.split(' ');
        for (let w = 0; w < words.length; w++) {
            let word = words[w];
            if (this.badwords.includes(word)) {
                return true;
            }
            else if (this.containsVariant(word)) {
                return true;
            }
        }
        return false;
    }
    static clean(content) {
        const words = content.split(' ');
        for (let w = 0; w < words.length; w++) {
            let word = words[w];
            if (this.badwords.includes(word)) {
                words[w] = '*';
            }
            else if (this.containsVariant(word)) {
                words[w] = '*';
            }
        }
        return words.join(' ');
    }
    static containsVariant(word) {
        const letters = word.split('');
        for (let l = 0; l < letters.length; l++) {
            const variant = this.numberToLetter[letters[l]];
            letters[l] = (variant) ? variant : letters[l];
        }
        return this.badwords.includes(letters.join(''));
    }
}
ProfanityFilter.badwords = words_json_1.default;
ProfanityFilter.numberToLetter = {};
exports.default = ProfanityFilter;
