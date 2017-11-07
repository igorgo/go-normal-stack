'use strict'

const DIR = process.cwd()
const PATH_SEPARATOR = !!process.platform.match(/^win/) ? '\\' : '/'
const escapeRegExp = s => s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
const STACK_REGEXP = [
  [new RegExp(escapeRegExp(DIR + PATH_SEPARATOR + 'node_modules'), 'g'), ''],
  [new RegExp(escapeRegExp(DIR), 'g'), ''],
  [/\n\s{4,}at/g, ';'],
  [/\n/g, ';'],
  [/[\t^]/g, ' '],
  [/\s{2,}/g, ' '],
  [/;\s;/g, ';']
]

module.exports = (arg) => {
  let result = (arg instanceof Error) ? arg.stack : arg
  STACK_REGEXP.forEach((rx) => {
    result = result.replace(rx[0], rx[1])
  })
  return result
}
