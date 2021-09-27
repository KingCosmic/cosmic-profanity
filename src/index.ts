import badWords from './words.json'
import charmap from './charmap.json'

// TODO: look into condensing words to check for bad words
// like we say "boob" is a bad word but they type "boooobs"
// instead of having several longer versions of "boob" we condense
// maching characters together to 1 and 2 versions and check that
// against our words.

// TODO: add support for 2 word profanities
// cock sucker will clean `cock` but leave sucker atm.

// TODO: add support for seperating words "f u c k e r"

class ProfanityFilter {
  // set our default bad words.
  static badwords:string[] = badWords

  static numberToLetter:{
    [letter:string]: string
  } = charmap

  /**
   * does this string contain any profane words?
   */
  static isProfane(content:string):boolean {
    // split the string by words
    const words = content.split(' ')

    for (let w = 0; w < words.length; w++) {
      let word = words[w]

      if (this.badwords.includes(word)) {
        return true
      } else if (this.containsVariant(word)) {
        return true
      }
    }

    return false
  }

  /**
   * takes a string and cleans any profanity in it
   * returning a string without any.
   */
  static clean(content:string):string {
    // split the string by words
    const words = content.split(' ')

    for (let w = 0; w < words.length; w++) {
      let word = words[w]

      if (this.badwords.includes(word)) {
        words[w] = '*'
      } else if (this.containsVariant(word)) {
        words[w] = '*'
      }
    }

    // return a cleaned sentence.
    return words.join(' ')
  }

  /**
   * checks to see if a word could be a bad word if letters were to be replaced with numbers
   */
  static containsVariant(word:string) {
    // split our word into letters
    const letters = word.split('')

    // loop through all our letters
    for (let l = 0; l < letters.length; l++) {
      // grab a variant if one exists.
      const variant = this.numberToLetter[letters[l]]

      // replace it if it does.
      letters[l] = (variant) ? variant : letters[l]
    }

    // is this a bad word once our letters are replaced?
    return this.badwords.includes(letters.join(''))
  }
}

export default ProfanityFilter