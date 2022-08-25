<script setup>
defineProps({
    msg: String,
})
</script>

<template>
  <p>Felizes os devs que não temem a maldição do HelloWorld...</p>
  <h1>
    {{ msg.split(" ")[0] }}
    &nbsp;•&nbsp;
    <span>{{ msg.split(" ")[1] }}</span>
  </h1>
</template>

<style scoped>
h1 {
  color: #eee;
  font-size: 3rem;
}

span {
  color: #188678;
  font-size: 3rem;
}

p {
  max-width: 80vw;
  margin-inline: auto;
  margin-bottom: 20vh;
}

@media (min-width: 900px) {
  p {
    font-size: 3rem;
    line-height: 1.3;
  }

  span,
  h1 {
    font-size: 8rem;
  }
}
</style>
