<template>
  <div class="loading">
    <div class="loading__cover">
      <div class="loading__circle-container">
        <div class="loading__circle loading__circle_color_light"></div>
        <div class="loading__circle loading__circle_color_light"></div>
        <div class="loading__circle loading__circle_color_light"></div>
      </div>

      <div class="loading__circle-container">
        <div class="loading__circle loading__circle_color_dark"></div>
        <div class="loading__circle loading__circle_color_dark"></div>
        <div class="loading__circle loading__circle_color_dark"></div>
      </div>

      <h2 class="loading__title">Loading</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@keyframes move {
  from {
    margin-left: 0;
  }

  to {
    margin-left: 70%;
  }
}

@keyframes move-backwards {
  from {
    margin-left: 70%;
  }

  to {
    margin-left: 0;
  }
}

.loading {
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.loading__cover {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.loading__circle-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: fit-content;
}

.loading__circle {
  width: 20%;
  padding-bottom: 20%;
  border-radius: 50%;
  margin-bottom: 5px;
}

.loading__circle:nth-of-type(2) {
  animation-delay: 0.1s;
}

.loading__circle:nth-of-type(3) {
  animation-delay: 0.2s;
}

.loading__circle_color_light {
  background-color: #f2a365;
  animation: move 0.5s infinite alternate ease-in-out;
}

.loading__circle_color_dark {
  background-color: #30475e;
  animation: move-backwards 0.5s infinite alternate ease-in-out;
}

.loading__title {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
