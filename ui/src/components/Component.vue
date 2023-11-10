<template>
  <div>
    <!-- <div class="text-upercase text-wieght-medium text-center text-h6"> -->
    <!--   TITULO -->
    <!-- </div> -->
    <q-list bordered separator>
      <template v-for="(item, idx) in itens" :key="idx">
        <q-item v-ripple>
          <q-input standout v-model="item.desc" class="full-width">
            <template v-slot:append>
              <q-icon class="cursor-pointer" name="cancel" @click="fnRemoveItem(idx)" />
            </template>
          </q-input>
        </q-item>
      </template>
      <q-item class="justify-center">
        <q-btn flat @click="fnAddItem" color="grey" icon="add" label="Novo item" />
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { ref } from 'vue';
import { lorem } from 'txtgen';

export default {
  name: 'SList',
  setup() {
    const itens = ref([
      { desc: ref(lorem(1, 1)) },
    ])

    const fnAddItem = () => {
      itens.value.push({ desc: ref(lorem(1, 1)) })
    }

    const fnRemoveItem = (idx) => {
      itens.value.splice(idx, 1)
    }

    return {
      itens,
      fnAddItem,
      fnRemoveItem
    }
  }
}
</script>
