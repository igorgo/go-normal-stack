'use strict'
import test from 'ava'
import m from '.'

test(t => {
  const error = new Error('Some error message')
  t.log(m(error))
  t.log(m(error.stack))
  t.log(m('just string'))
  t.pass()
})
