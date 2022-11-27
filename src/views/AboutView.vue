
<template>
  <div class="about">
    <div v-if="!isLoading">
      <img :src="character.image" :alt="character.name">
      <h3>
        {{character.name}}
      </h3>
      <p>
        <b> Specie: </b> {{character.species}}
      </p>
      <p>
        <b> Status: </b> {{character.status}}
      </p>
      <p>
        <b> Gender: </b> {{character.gender}}
      </p>
      <p>
        <b> Origin: </b> {{character.origin?.name}} - {{character.origin?.url}}
      </p>
      <p>
        <b> Location: </b> {{character.location?.name}} - {{character.location?.url}}
      </p>
      <p>
        <router-link to="/" >
          Return
        </router-link>
      </p>
    </div>
    <div v-else>
      is Loading page
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import CharacterServices from '@/services/CharacterServices'

export default defineComponent({
  name: 'About-page',
  setup () {
    const services = new CharacterServices()
    const character = services.getCharacter()
    const isLoading = ref<boolean>(true)
    const { id } = useRoute().params

    onMounted(async () => {
      await services.fetchById(id)
      isLoading.value = false
    })

    console.log(useRoute().params)
    return {
      character
    }
  }
})
</script>
