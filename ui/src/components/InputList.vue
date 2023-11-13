<template>
  <div>
    <!-- <div class="text-upercase text-wieght-medium text-center text-h6"> -->
    <!--   TITULO -->
    <!-- </div> -->
    <q-list bordered separator>
      <template v-for="(item, idx) in props.modelValue" :key="idx">
        <q-item v-ripple>
          <q-item-section>
            <slot name="item" :item="item">
              <q-input standout v-model="item.desc" class="full-width" />
            </slot>
          </q-item-section>
          <q-item-section avatar>
            <q-avatar class="cursor-pointer" icon="cancel" @click="fnRemoveItem(idx)" />
          </q-item-section>
        </q-item>
      </template>
      <q-item class="justify-center">
        <q-btn flat @click="fnAddItem" color="grey" icon="add" label="Novo item" />
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'InputList',
  emits: ['novo-item'],
  props: {
    modelValue: Array
  },
  setup(props, { emit }) {
    const itens = ref([

    ])

    const fnRemoveItem = (idx) => {
      itens.value.splice(idx, 1)
    }

    const fnAddItem = () => {
      emit('update:modelValue', props.modelValue.concat({}))
    }

    return {
      props,
      itens,
      fnRemoveItem,
      fnAddItem
    }
  }
})
</script>
