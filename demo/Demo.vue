<template>
<main>
  <figure
    id="logo"
    @mouseenter="toggle"
    @mouseleave="toggle"
    @click="change"
  >
    <random-icon
      ref="logo"
      :playing="playing"
    />
  </figure>
  <h1>
    <a href="https://github.com/Renovamen/oh-vue-icons">Oh Vue Icons!</a>
  </h1>
  <p class="desc">
    A Vue component for including inline SVG icons from different icon packs easily.
  </p>
  <p>
    <a href="https://github.com/Renovamen/oh-vue-icons" target="_blank">github</a>
    ·
    <a href="https://www.npmjs.com/package/oh-vue-icons" target="_blank">npm</a>
    ·
    <a href="https://github.com/Renovamen/oh-vue-icons#readme" target="_blank">docs</a>
  </p>
  <p class="desc">
    Now the following icon packs are supported:
  </p>
  <p class="iconsets">
    <a href="https://fontawesome.com" target="_blank">Font Awesome</a>
    ·
    <a href="https://remixicon.com" target="_blank">Remix Icon</a>
    ·
    <a href="https://github.com/jpswalsh/academicons" target="_blank">academicons</a>
  </p>

  <h2>Basic</h2>
  <p>
    <v-icon name="fa/flag"/> <v-icon name="ri/bank-card-fill"/> <v-icon name="ai/google-scholar-square"/>
  </p>
  <figure>
    <pre><code>&lt;v-icon <span class="attr">name</span>=<span class="val">"fa/flag"</span>/&gt;
&lt;v-icon <span class="attr">name</span>=<span class="val">"ri/bank-card-fill"</span>/&gt;
&lt;v-icon <span class="attr">name</span>=<span class="val">"ai/google-scholar-square"</span>/&gt;</code></pre>
  </figure>

  <h2>Scale</h2>
  <p>
    <v-icon
      name="fa/gamepad"
      scale="3"
    />
    <v-icon
      name="ri/folder-music-fill"
      scale="3"
    />
    <v-icon
      name="ai/overleaf"
      scale="3"
    />
  </p>
  <figure>
    <pre><code>&lt;v-icon <span class="attr">name</span>=<span class="val">"fa/gamepad"</span> <span class="attr">scale</span>=<span class="val">"3"</span>/&gt;
&lt;v-icon <span class="attr">name</span>=<span class="val">"ri/folder-music-fill"</span> <span class="attr">scale</span>=<span class="val">"3"</span>/&gt;
&lt;v-icon <span class="attr">name</span>=<span class="val">"ai/overleaf"</span> <span class="attr">scale</span>=<span class="val">"3"</span>/&gt;</code></pre>
  </figure>

  <h2>Spin</h2>
  <p>
    <v-icon
      name="fa/sync"
      spin
    />
    <v-icon
      name="ri/refresh-line"
      spin
    />
    <v-icon
      name="ai/doi"
      spin
    />
  </p>
  <figure>
    <pre><code>&lt;v-icon <span class="attr">name</span>=<span class="val">"fa/sync"</span> <span class="attr">spin</span>/&gt;
&lt;v-icon <span class="attr">name</span>=<span class="val">"ri/refresh-line"</span> <span class="attr">spin</span>/&gt;
&lt;v-icon <span class="attr">name</span>=<span class="val">"ai/doi"</span> <span class="attr">spin</span>/&gt;</code></pre>
  </figure>

  <h2>Pulse</h2>
  <p>
    <v-icon
      name="fa/spinner"
      pulse
    />
    <v-icon
      name="ri/loader-line"
      pulse
    />
    <v-icon
      name="ai/osf"
      pulse
    />
  </p>
  <figure>
    <pre><code>&lt;v-icon <span class="attr">name</span>=<span class="val">"fa/spinner"</span> <span class="attr">pulse</span>/&gt;
&lt;v-icon <span class="attr">name</span>=<span class="val">"ri/loader-line"</span> <span class="attr">pulse</span>/&gt;
&lt;v-icon <span class="attr">name</span>=<span class="val">"ai/osf"</span> <span class="attr">pulse</span>/&gt;</code></pre>
  </figure>

  <h2>Flip</h2>
  <p>
    <v-icon
      name="fa/signal"
      flip="horizontal"
    />
    <v-icon
      name="ri/playstation-line"
      flip="horizontal"
    />
    <v-icon
      name="ai/google-scholar"
      flip="horizontal"
    />
  </p>
  <figure>
    <pre><code>&lt;v-icon <span class="attr">name</span>=<span class="val">"fa/signal"</span> <span class="attr">flip</span>=<span class="val">"horizontal"</span>/&gt;
&lt;v-icon <span class="attr">name</span>=<span class="val">"ri/playstation-line"</span> <span class="attr">flip</span>=<span class="val">"horizontal"</span>/&gt;
&lt;v-icon <span class="attr">name</span>=<span class="val">"ai/google-scholar"</span> <span class="attr">flip</span>=<span class="val">"horizontal"</span>/&gt;</code></pre>
  </figure>

  <h2>Label</h2>
  <p><small>Accessible for screen readers, etc.</small></p>
  <p>
    <v-icon
      name="fa/code"
      label="Source Code"
    />
  </p>
  <figure>
    <pre><code>&lt;v-icon <span class="attr">name</span>=<span class="val">"fa/code"</span> <span class="attr">label</span>=<span class="val">"Source Code"</span>/&gt;</code></pre>
  </figure>

  <h2>Title</h2>
  <p><small>Descriptive title support.</small></p>
  <p>
    <v-icon
      name="fa/brands/vuejs"
      title="Vue.js"
    />
  </p>
  <figure>
    <pre><code>&lt;v-icon <span class="attr">name</span>=<span class="val">"fa/brands/vuejs"</span> <span class="attr">title</span>=<span class="val">"Vue.js"</span>/&gt;</code></pre>
  </figure>

  <h2>Stacked icons</h2>
  <p>
    <small>Use stacked icons like in FontAwesome. Even more powerful.</small>
  </p>
  <p>
    <v-icon label="No Photo">
      <v-icon name="fa/camera"/>
      <v-icon
        name="fa/ban"
        scale="2"
        class="alert"
      />
    </v-icon>
  </p>
  <figure>
    <pre><code>&lt;v-icon <span class="attr">label</span>=<span class="val">"No Photos"</span>&gt;
  &lt;v-icon <span class="attr">name</span>=<span class="val">"fa/camera"</span>/&gt;
  &lt;v-icon <span class="attr">name</span>=<span class="val">"fa/ban"</span> <span class="attr">scale</span>=<span class="val">"2"</span> <span class="attr">class</span>=<span class="val">"alert"</span>/&gt;
&lt;/v-icon&gt;</code></pre>
  </figure>

  <h2>Custom icons</h2>
  <p><small>You can register your own icons.</small></p>
  <p><v-icon name="baidu"/></p>
  <figure>
    <pre><code>&lt;v-icon <span class="attr">name</span>=<span class="val">"baidu"</span>/&gt;</code></pre>
  </figure>

  <h2>Multi-color icons</h2>
  <p>
    <small>Register icons in more advanced ways to unleash the full power of SVG.</small>
  </p>
  <p>
    <v-icon name="webpack"/> <v-icon name="vue"/> <v-icon name="html5-c"/>
  </p>

  <footer>
    <a
      href="https://github.com/Renovamen/oh-vue-icons/blob/master/LICENSE"
      target="_blank"
    >MIT License</a>
    ·
    <a
      href="https://github.com/Renovamen/oh-vue-icons"
      target="_blank"
    >View on GitHub</a>
  </footer>
</main>
</template>

<script>
import RandomIcon from './RandomIcon'
import '../src/icons'

export default {
  name: 'demo',
  components: {
    RandomIcon
  },
  data () {
    return {
      playing: true
    }
  },
  methods: {
    toggle () {
      this.playing = !this.playing
    },
    change () {
      this.$refs.logo.change()
    }
  }
}
</script>

<style>
@import './font.css';

body {
  margin: 0;
  padding: 4em 0 0;
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
  color: #666;
  text-align: center;
}

a {
  color: inherit;
  text-decoration: none;
}

p a {
  color: #377bb5;
  font-weight: 600;
}

p a:hover {
  text-decoration: underline;
}

#logo {
  display: block;
  width: 120px;
  height: 120px;
  margin: 20px auto 40px;
  padding: 20px;
  position: relative;
  border-radius: 50%;
  background-color: #35495e;
  color: #74b3eb;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s;
}

#logo:hover {
  margin: 10px auto 30px;
  padding: 30px;
  background-color: #74b3eb;
  color: #35495e;
}

#logo .v-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  margin-bottom: 1em;
  font-weight: 700;
}

h2 {
  margin-top: 3em;
  font-size: 1.2em;
  font-weight: 400;
}

h1, h2 {
  color: #2c3e50;
}

.desc {
  color: #758081;
}

.iconsets {
  margin-bottom: 4em;
}

figure .v-icon {
  display: block;
}

p small {
  font-size: 0.9em;
  color: #758081;
}

pre {
  display: inline-block;
  margin: 0;
  padding: 0.8em;
  background-color: #fafafa;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  text-align: left;
  line-height: 1.1;
  color: #e45649;
  border-radius: 5px;
}

pre, code {
  font-family: "Roboto Mono", Monaco, courier, monospace;
}

pre code {
  font-size: 0.9em;
}

.attr {
  color: #986801;
}

.val {
  color: #50a14f;
}

footer {
  margin: 10em 0 3em;
  font-size: 0.5em;
  text-align: center;
}

footer a {
  display: inline-block;
  margin: 0 5px;
  padding: 3px 0 6px;
  color: #7f8c8d;
  font-size: 2em;
  text-decoration: none;
}

footer a:hover {
  padding-bottom: 3px;
  border-bottom: 2px solid #377bb5;
}

.alert {
  color: #c33;
  opacity: 0.8;
}

@media (max-width: 640px) {
  body {
    padding-top: 0;
    text-align: left;
  }

  #logo {
    margin: 0 auto;
    transform: scale(0.6);
  }

  #logo:hover {
    margin: -10px auto;
  }

  h1, p {
    padding: 0 25px;
  }

  h1 {
    border-left: 5px solid #2c3e50;
  }

  h2 {
    padding-left: 20px;
    border-left: 5px solid rgba(0, 0, 0, 0.1);
  }

  figure {
    margin: 1em 25px;
  }

  pre {
    display: block;
    box-shadow: none;
    overflow-x: auto;
    font-size: 0.9em;
  }
}
</style>
