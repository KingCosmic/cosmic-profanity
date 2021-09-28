import badWords from './words.json'

// TODO: add support for seperating words "f u c k e r"

class ProfanityFilter {
  // set our default bad words.
  static badwords:RegExp[] = badWords.map(word => {
    word = word.replace(/a/g, '[a4@]+')
    word = word.replace(/b/g, '[b8]+')
    word = word.replace(/c/g, '[c<]+')
    word = word.replace(/d/g, '[d]+')
    word = word.replace(/e/g, '[e3]+')
    word = word.replace(/f/g, '[f]+')
    word = word.replace(/g/g, '[g]+')
    word = word.replace(/h/g, '[h]+')
    word = word.replace(/i/g, '[i]+')
    word = word.replace(/j/g, '[j]+')
    word = word.replace(/k/g, '[k]+')
    word = word.replace(/l/g, '[l]+')
    word = word.replace(/m/g, '[m]+')
    word = word.replace(/n/g, '[n]+')
    word = word.replace(/o/g, '[o0]+')
    word = word.replace(/p/g, '[p]+')
    word = word.replace(/q/g, '[q]+')
    word = word.replace(/r/g, '[r]+')
    word = word.replace(/s/g, '[s5\\$]+')
    word = word.replace(/t/g, '[t7\\+]+')
    word = word.replace(/u/g, '[u]+')
    word = word.replace(/v/g, '[v]+')
    word = word.replace(/w/g, '[w]+')
    word = word.replace(/x/g, '[x]+')
    word = word.replace(/y/g, '[y]+')
    word = word.replace(/z/g, '[z]+')

    // word = word.replace(/]+/g, ']+[^\\w]*')

    return new RegExp(`(${word})`, 'ig')
  })

  /**
   * does this string contain any profane words?
   */
  static isProfane(content:string):boolean {
    // split the string by words
    const words = content.split(' ')

    // loop through our sentence
    for (let w = 0; w < words.length; w++) {

      // loop through our badwords
      for (let bw = 0; bw < this.badwords.length; bw++) {

        // is this the badword that matches here?
        if (words[w].match(this.badwords[bw])) {
          return true
        }
      }
    }

    // return false since we didn't find any bad words.
    return false
  }

  /**
   * takes a string and cleans any profanity in it
   * returning a string without any.
   */
  static clean(content:string):string {
    // split the string by words
    const words = content.split(' ')

    // loop through our sentence
    for (let w = 0; w < words.length; w++) {

      // loop through our badwords
      for (let bw = 0; bw < this.badwords.length; bw++) {
        words[w] = words[w].replace(this.badwords[bw], '**')
      }
    }

    // return a cleaned sentence.
    return words.join(' ')
  }
}

export default ProfanityFilter