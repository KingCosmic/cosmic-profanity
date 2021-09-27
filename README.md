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
var Filter = require('cosmic-profanity')


Filter.isProfane('I like big butts and I cannot lie')
// true

Filter.isProfane('I like big glutes and I cannot lie')
// false

Filter.clean('I like big butts (aka arses) and I cannot lie')
// I like big * (aka *) and I cannot lie
```

## Options
Coming soon.