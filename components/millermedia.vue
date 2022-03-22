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
import { Plyr } from 'plyr'
const player = new Plyr('.player')
let vsource, asource, ytvid, vimeovid

export default ({
  props: [
    vsource: String,
    asource: String,
    ytvid: String,
    vimeovid: String
  ]
})
</script>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/plyr/3.6.12/plyr.min.css);
</style>
