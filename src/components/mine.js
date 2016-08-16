'use strict'

const DEFAULT_VALUE = 'Weex-html5 extending'

// prototype methods.
const proto = {
  create () {
    const node = document.createElement('div')
    this.inner = document.createElement('span')
    this.value = DEFAULT_VALUE
    this.inner.textContent = `Hello ${DEFAULT_VALUE}!`
    node.appendChild(this.inner)
    return node
  }
}

// attribute setters.
const attr = {
  value (val) {
    this.value = val
    this.inner.textContent = `Hello ${val}!`
  }
}

// style setters.
const style = {
  txtColor (val) {
    this.inner.style.color = val
  },
  bgColor (val) {
    this.inner.style.backgroundColor = val
  }
}

// event config.
const event = {
  click: {
    extra () {
      return {
        value: this.inner.textContent
      }
    }
  }
}

function init (Weex) {
  const Component = Weex.Component
  const extend = Weex.utils.extend

  function Mine (data) {
    Component.call(this, data)
  }

  Mine.prototype = Object.create(Component.prototype)
  extend(Mine.prototype, proto)
  extend(Mine.prototype, { attr })
  extend(Mine.prototype, {
    style: extend(Object.create(Component.prototype.style), style)
  })
  extend(Mine.prototype, { event })

  Weex.registerComponent('mine', Mine)
}

export default { init }
