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
            for (let bw = 0; bw < this.badwords.length; bw++) {
                if (words[w].match(this.badwords[bw])) {
                    return true;
                }
            }
        }
        return false;
    }
    static clean(content) {
        const words = content.split(' ');
        let sentence = words.join('');
        let newString = '';
        let currentIndex = 0;
        for (let bw = 0; bw < this.badwords.length; bw++) {
            const matches = sentence.match(this.badwords[bw]);
            if (!matches)
                continue;
            for (let m = 0; m < matches.length; m++) {
                sentence = sentence.replace(matches[m], new Array(matches[m].length).fill('*', 0, matches[m].length).join(''));
            }
        }
        for (let w = 0; w < words.length; w++) {
            newString += sentence.substring(currentIndex, currentIndex + words[w].length);
            newString += ' ';
            currentIndex += words[w].length;
        }
        return newString.trim();
    }
}
ProfanityFilter.badwords = words_json_1.default.map(word => {
    word = word.replace(/a/g, '[a4@]+');
    word = word.replace(/b/g, '[b8]+');
    word = word.replace(/c/g, '[c<]+');
    word = word.replace(/d/g, '[d]+');
    word = word.replace(/e/g, '[e3]+');
    word = word.replace(/f/g, '[f]+');
    word = word.replace(/g/g, '[g]+');
    word = word.replace(/h/g, '[h]+');
    word = word.replace(/i/g, '[i]+');
    word = word.replace(/j/g, '[j]+');
    word = word.replace(/k/g, '[k]+');
    word = word.replace(/l/g, '[l]+');
    word = word.replace(/m/g, '[m]+');
    word = word.replace(/n/g, '[n]+');
    word = word.replace(/o/g, '[o0]+');
    word = word.replace(/p/g, '[p]+');
    word = word.replace(/q/g, '[q]+');
    word = word.replace(/r/g, '[r]+');
    word = word.replace(/s/g, '[s5\$]+');
    word = word.replace(/t/g, '[t7\+]+');
    word = word.replace(/u/g, '[u]+');
    word = word.replace(/v/g, '[v]+');
    word = word.replace(/w/g, '[w]+');
    word = word.replace(/x/g, '[x]+');
    word = word.replace(/y/g, '[y]+');
    word = word.replace(/z/g, '[z]+');
    word = word.replace(/\]\+/g, ']+[^\\w]*');
    return new RegExp(`(${word})`, 'ig');
});
ProfanityFilter.wholeWord = false;
exports.default = ProfanityFilter;
