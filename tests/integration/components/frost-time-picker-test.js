/**
 * Integration test for the frost-time-picker component
 */

import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {$hook, initialize as initializeHook} from 'ember-hook'
import wait from 'ember-test-helpers/wait'
import {afterEach, beforeEach, describe} from 'mocha'
import sinon from 'sinon'

describeComponent(
  'frost-time-picker',
  'Integration: EmberFrostTimePickerComponent',
  {
    integration: true
  },
  function () {
    let sandbox

    beforeEach(function () {
      sandbox = sinon.sandbox.create()
      initializeHook()
    })

    afterEach(function () {
      sandbox.restore()
    })

    describe('after render', function () {
      beforeEach(function () {
        this.setProperties({
          myHook: 'myThing'
        })

        this.render(hbs`
          {{frost-time-picker
            hook=myHook
          }}
        `)

        return wait()
      })

      it('should have an element', function () {
        expect(this.$()).to.have.length(1)
      })

      it('should be accessible via the hook', function () {
        expect($hook('myThing')).to.have.length(1)
      })
    })
  })
