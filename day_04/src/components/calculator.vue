<script setup>
import { result, operationString } from "../composables/calculator";
import Button from "./button.vue";

const buttonValues = [
  "9",
  "8",
  "7",
  "/",
  "6",
  "5",
  "4",
  "X",
  "3",
  "2",
  "1",
  "-",
  "C",
  "0",
  "=",
  "+",
];
</script>

<template>
  <div class="calculator">
    <div class="display-wrapper">
      <div>
        <p>
          {{ operationString }}
        </p>
      </div>
      <div>
        <p>
          {{ result }}
        </p>
      </div>
    </div>

    <div class="keyboard-wrapper">
      <Button v-for="value in buttonValues" :key="value" :value="value" />
      <strong>Made with 💚 by xSallus&trade;</strong>
    </div>
  </div>
</template>

<style scoped>
.calculator {
  width: 23.4375rem;
  height: 50rem;

  max-height: 90vh;
  max-width: 100vw;

  border-radius: 6px;
  background-color: #4c4c4c;

  display: grid;
  grid-template-rows: 35% 65%;
  grid-template-areas: "top" "bottom";
}

.calculator .display-wrapper {
  grid-area: top;
  max-width: 100%;
  box-shadow: 0px 3px 3px 3px var(--base-color);
  padding: 1.25rem;

  display: inline-flex;
  flex-direction: column;
  gap: 0.5rem;
}

.calculator .keyboard-wrapper {
  grid-area: bottom;
  padding: 6px;
  padding-top: 12px;
  gap: 0.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
}

strong {
  display: inline;
  height: max-content;
  margin-top: auto;
  margin-bottom: 1rem;
  grid-column: 1/5;
  text-align: center;
}

.display-wrapper > div {
  flex: 1;
  width: 100%;
  text-align: right;
  padding: 6px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow-x: scroll;
  background-color: #343434;
  border-radius: 6px;
}

.display-wrapper > div p {
  font-size: 2.25rem;
}

/*.display-wrapper > div:first-child {}*/

/*.display-wrapper > div:last-child {}*/

span {
  color: #bcbcbc;
  font-size: 1.8rem;
}

@media;
</style>
