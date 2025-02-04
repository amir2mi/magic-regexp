import assert from 'node:assert'
import { createRegExp, exactly, digit, oneOrMore, char } from 'magic-regexp'

// Typed capture groups
const ID_RE = createRegExp(exactly('id-').and(digit.times(5).as('id')))
const groups = 'some id-23490 here we go'.match(ID_RE)?.groups
console.log(ID_RE, groups?.id)

// Quick-and-dirty semver
const SEMVER_RE = createRegExp(
  oneOrMore(digit)
    .as('major')
    .and('.')
    .and(oneOrMore(digit).as('minor'))
    .and(exactly('.').and(oneOrMore(char).as('patch')).optionally())
)
console.log(SEMVER_RE)

assert.equal(createRegExp(exactly('foo/test.js').after('bar/')).test('bar/foo/test.js'), true)
