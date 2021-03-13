<template>
  <div id="app">
    <h1>Oh, Vue Icons!</h1>

    <h2>Basic</h2>
    <v-icon name="fa-flag" />
    <v-icon name="fc-linux" />

    <h2>Scale 3x</h2>
    <v-icon name="fa-flag" scale="3" />
    <v-icon name="fc-linux" scale="3" />

    <h2>Flip</h2>
    Vertical: <v-icon name="fc-linux" flip="vertical" />,
    Horizontal, <v-icon name="fc-linux" flip="horizontal" />,
    Both: <v-icon name="fc-linux" flip="both" />

    <h2>Fill Color</h2>
    <v-icon name="bi-battery-full" fill="green" />
    <v-icon name="bi-battery-half" fill="orange" />
    <v-icon name="bi-battery" fill="red" />

    <h2>Animations</h2>
    <h3>Basic</h3>
    <v-icon name="ri-refresh-line" animation="spin" />
    <v-icon name="fa-spinner" animation="spin-pulse" />
    <v-icon name="gi-piercing-sword" animation="wrench" />
    <v-icon name="fa-regular-bell" animation="ring" />
    <v-icon name="ri-heart-pulse-line" animation="pulse" />
    <v-icon name="bi-lightning" animation="flash" />
    <h3>Hover</h3>
    <v-icon name="ri-refresh-line" animation="spin" hover />
    <h3>Parent Hover</h3>
    <div
      class="v-parent v-hover"
      style="cursor: pointer;"
    >
      <v-icon name="ri-refresh-line" animation="spin" hover />
      Hover me!
    </div>
    <h3>Speed</h3>
    Slow: <v-icon name="ri-refresh-line" animation="spin" speed="slow" />
    Normal: <v-icon name="ri-refresh-line" animation="spin" />
    Fast: <v-icon name="ri-refresh-line" animation="spin" speed="fast" />

    <h2>Stacked Icons</h2>
    <v-icon label="No Photos">
      <v-icon name="fa-camera" />
      <v-icon name="fa-ban" scale="2" fill="#fC644d" />
    </v-icon>
    <v-icon label="No Photos" animation="wrench">
      <v-icon name="fa-camera" />
      <v-icon name="fa-ban" scale="2" fill="#fC644d" />
    </v-icon>

    <h2>Inverse</h2>
    <v-icon label="Wechat Logo">
      <v-icon name="fa-square" scale="1.5" fill="#57C181" />
      <v-icon name="si-wechat" inverse />
    </v-icon>

    <h2>Custom Icons</h2>
    <v-icon name="baidu" />
  </div>
</template>
