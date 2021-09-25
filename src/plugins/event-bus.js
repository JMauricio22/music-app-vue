import mitt from 'mitt'

const emitter = mitt()

const eventBus = {}

eventBus.install = app => {
  app.config.globalProperties.$bus = emitter
}

export default eventBus
