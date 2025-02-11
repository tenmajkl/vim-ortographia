# vim-ortographia

This plugin converts staples to diacritics, just like Jan Hus intented in his Orthographia Bohemica.

## Motivation

Vim in my opinion works better with english keyboard, but when you need to write in czech, you need to switch keyboards or shoot in foot.

It doesnt directly use staples from old czech, it uses combination that make sence.

## Staples

| Staple | Unicode-char | 
|--------|--------------|
| we     | ě            | 
| ss     | š            | 
| cc     | č            | 
| rr     | ř            |
| zz     | ž            |
| yy     | ý            |
| aa     | á            |
| ii     | í            |
| ee     | é            |
| oo     | ó            |
| tt     | ť            |
| uu     | ú            |
| ui     | ů            |
| dd     | ď            |
| nn     | ň            |

## Instalation

Simpy include `tenmajkl/vim-ortographia` in your plugin manager.

```vim
use 'tenmajkl/vim-ortographia'

"or
Plug 'tenmajkl/vim-ortographia'

"or some other idk
```

Then you need to enable it using `:Ortographia`.

## Development notes

It was hard not to try to be funny and name this repo eg. kostnice.

## Overleaf Interaction

if ur using vim mode in overleaf (which i suppose u are), install tampermonkey script from dis repo (`overleaf.js`)
