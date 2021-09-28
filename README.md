# cosmic-profanity

A JavaScript profanity filter (with TypeScript support)

## Getting Started

Install package

```Shell
npm i cosmic-profanity
```

## Usage

```Typescript
import Filter from 'cosmic-profanity'
// or
var Filter = require('cosmic-profanity').default


Filter.isProfane('I like big butts and I cannot lie')
// true

Filter.isProfane('I like big glutes and I cannot lie')
// false

Filter.clean('I like big butts (aka arses) and I cannot lie')
// I like big * (aka *) and I cannot lie
```

## Options

### wholeWord
determins if cleaning a string should remove the whole word
or just some of it.

```ts
import Filter from 'cosmic-profanity'

Filter.wholeWord = true

Filter.clean('motherfucker')

/**
 * with wholeWord turned on "****"
 * 
 * with it turned off "mother****er"
 */

```