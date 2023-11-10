import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'SList',

  setup () {
    return () => h(QBadge, {
      class: 'SList',
      label: 'SList'
    })
  }
}
