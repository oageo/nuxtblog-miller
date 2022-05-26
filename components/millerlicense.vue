<template>
  <div loading="lazy" class="lazy block license">
    <div class="cc010" v-if="license === 'cc010'">
      <p xmlns:dct="http://purl.org/dc/terms/">
      <a rel="license" href="http://creativecommons.org/publicdomain/zero/1.0/">
        <img src="http://i.creativecommons.org/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0" />
      </a>
      <br />
      To the extent possible under law,
        <span rel="dct:publisher" resource="[_:publisher]">the person who associated CC0</span>
        with this work has waived all copyright and related or neighboring rights to this work.
      </p>
    </div>
    <div class="ccby40" v-else-if="license === 'ccby40'">
      <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
    </div>
    <div class="ccby40" v-else-if="license === 'ccbysa40'">
      <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
    </div>
  </div>
</template>

<script>
export default {
  props: {
    license: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
