<template>
  <div class="auth-form container h-[65vh] max-w-[350] w-[348px] mx-auto mt-10">
    <div>
      <img
        class="mx-auto"
        src="https://m.media-amazon.com/images/G/01/zappos/melody/logo-blue-small._CB485919770_.svg"
        alt="img"
      />
    </div>
    <div class="border border-gray-300 p-5 rounded mt-2">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss">
.auth-form {
  input {
    padding: 7px;
    border: 1px solid;
  }
}
</style>
