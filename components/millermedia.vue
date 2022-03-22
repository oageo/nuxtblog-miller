<template>
  <div class="millermedia">
    <!-- ビデオ用 -->
    <div v-if="vsource != ''" class="millervideo">
      <video class="player">
        <source src="{{ vsource }}">
      </video>
    </div>
    <!-- オーディオ用 -->
    <div v-else-if="asource != ''" class="milleraudio">
      <video class="player">
        <source src="{{ asource }}">
      </video>
    </div>
    <!-- YouTube用 -->
    <div v-else-if="ytvid != ''" class="milleryt">
      <div class="player">
        <div data-video-id="{{ ytvid }}" data-type="youtube" />
      </div>
    </div>
    <!-- Vimeo用 -->
    <div v-else-if="vimeovid != ''" class="millervimeo">
      <div class="player" data-plyr-provider="vimeo" data-plyr-embed-id="{{ vimeovid }}" />
    </div>
  </div>
</template>

<script>
import { plyr } from 'plyr'
const player = new plyr('.player')

export default ({
  props: [
    'vsource',
    'asource',
    'ytvid',
    'vimeovid'
  ]
})
</script>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/plyr/3.6.12/plyr.min.css);
</style>
