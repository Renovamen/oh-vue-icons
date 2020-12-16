<template>
<div
  class="page docs text-base pt-20 pb-16"
  :class="{
    'text-gray-300 bg-gray-800': isDark,
    'text-gray-700 bg-white': !isDark
  }"
>
  <div class="page-width">
    <div class="text-left sm:text-center">
      <RandomIcon />
      <h1 :class="{ 'dark': isDark }">
        Oh, Vue Icons!
      </h1>
      <p class="my-0">
        A Vue component for including inline SVG icons from different icon packs easily.
      </p>
      <p class="my-0">
        <a
          href="https://github.com/Renovamen/oh-vue-icons"
          target="_blank"
          :class="{ 'dark': isDark }"
        >
          github
        </a>
        ·
        <a
          href="https://www.npmjs.com/package/oh-vue-icons"
          target="_blank"
          :class="{ 'dark': isDark }"
        >
          npm
        </a>
        ·
        <NuxtLink
          to="/"
          :class="{ 'dark': isDark }"
        >
          icons
        </NuxtLink>
      </p>
      <p class="my-0">
        Now the following icon packs are supported:
      </p>
      <p class="mt-0 mb-20">
        <a
          href="https://fontawesome.com"
          target="_blank"
          :class="{ 'dark': isDark }"
        >
          Font Awesome
        </a>
        ·
        <a
          href="https://remixicon.com"
          target="_blank"
          :class="{ 'dark': isDark }"
        >
          Remix Icon
        </a>
        ·
        <a
          href="https://github.com/jpswalsh/academicons"
          target="_blank"
          :class="{ 'dark': isDark }"
        >
          academicons
        </a>
        ·
        <a
          href="https://game-icons.net"
          target="_blank"
          :class="{ 'dark': isDark }"
        >
          gameicons
        </a>
      </p>
    </div>

    <div class="text-left">
      <h2 :class="{ 'dark': isDark }">
        Installation and Importing
      </h2>
      <p>
        Install and import <code :class="{ 'dark': isDark }">oh-vue-icons</code> follow the instructions
        <a href="https://github.com/Renovamen/oh-vue-icons#installation" target="_blank" :class="{ 'dark': isDark }">here</a>,
        then you can reference any of the icons. See
        <NuxtLink to="/" :class="{ 'dark': isDark }">here</NuxtLink>
        for the full list of the available icons.
      </p>
      <h2 :class="{ 'dark': isDark }">
        Basic Use
      </h2>
      <p>
        <v-icon name="fa-flag"/> <v-icon name="ri-bank-card-fill"/> <v-icon name="ai-google-scholar-square"/> <v-icon name="game-battered-axe"/>
      </p>
      <figure :class="{ 'dark': isDark }">
        <pre class="language-html"><code class="language-html" v-html="getVueCode('basic')"></code></pre>
      </figure>

      <h2
        class="-mb-12"
        :class="{ 'dark': isDark }"
      >
        Styling
      </h2>

      <h3 :class="{ 'dark': isDark }">
        Scale
      </h3>
      <p>
        Use prop <code :class="{ 'dark': isDark }">scale: number|string</code> to specify the icon size, which is default to <code :class="{ 'dark': isDark }">1</code>.
      </p>
      <p>
        <v-icon
          name="fa-gamepad"
          scale="3"
        />
        <v-icon
          name="ri-folder-music-fill"
          scale="3"
        />
        <v-icon
          name="ai-overleaf"
          scale="3"
        />
        <v-icon
          name="game-ancient-sword"
          scale="3"
        />
      </p>
      <figure :class="{ 'dark': isDark }">
        <pre class="language-html"><code class="language-html" v-html="getVueCode('scale')"></code></pre>
      </figure>

      <h3 :class="{ 'dark': isDark }">
        Spin
      </h3>
      <p>
        Use prop <code :class="{ 'dark': isDark }">spin: boolean</code> to get any icon to rotate, which is default to <code :class="{ 'dark': isDark }">false</code>.
      </p>
      <p>
        <v-icon
          name="fa-sync"
          spin
        />
        <v-icon
          name="ri-refresh-line"
          spin
        />
        <v-icon
          name="ai-doi"
          spin
        />
        <v-icon
          name="game-earth-asia-oceania"
          spin
        />
      </p>
      <figure :class="{ 'dark': isDark }">
        <pre class="language-html"><code class="language-html" v-html="getVueCode('spin')"></code></pre>
      </figure>

      <h3 :class="{ 'dark': isDark }">
        Pulse
      </h3>
      <p>
        Use prop <code :class="{ 'dark': isDark }">pulse: boolean</code> to have any icon rotate with eight steps, which is default to <code :class="{ 'dark': isDark }">false</code>.
      </p>
      <p>
        <v-icon
          name="fa-spinner"
          pulse
        />
        <v-icon
          name="ri-loader-line"
          pulse
        />
        <v-icon
          name="ai-osf"
          pulse
        />
        <v-icon
          name="game-american-shield"
          pulse
        />
      </p>
      <figure :class="{ 'dark': isDark }">
        <pre class="language-html"><code class="language-html" v-html="getVueCode('pulse')"></code></pre>
      </figure>

      <h3 :class="{ 'dark': isDark }">
        Flip
      </h3>
      <p>
        Use prop <code :class="{ 'dark': isDark }">flip: 'vertical'|'horizontal'|'both'</code> to mirror an icon:
        <ul>
          <li><code :class="{ 'dark': isDark }">vertical</code>: mirrors an icon vertically</li>
          <li><code :class="{ 'dark': isDark }">horizontal</code>: mirrors icon horizontally</li>
          <li><code :class="{ 'dark': isDark }">both</code>: mirrors icon vertically and horizontally</li>
        </ul>
      </p>
      <p>
        <v-icon
          name="fa-signal"
          flip="horizontal"
        />
        <v-icon
          name="ri-playstation-line"
          flip="both"
        />
        <v-icon
          name="ai-google-scholar"
          flip="vertical"
        />
        <v-icon
          name="game-campfire"
          flip="vertical"
        />
      </p>
      <figure :class="{ 'dark': isDark }">
        <pre class="language-html"><code class="language-html" v-html="getVueCode('flip')"></code></pre>
      </figure>

      <h3 :class="{ 'dark': isDark }">
        Label
      </h3>
      <p>
        Specify prop <code :class="{ 'dark': isDark }">label: string</code> to set the <code :class="{ 'dark': isDark }">aria-label</code> for the icon if provided.
      </p>
      <p>
        <v-icon
          name="fa-code"
          label="Source Code"
        />
      </p>
      <figure :class="{ 'dark': isDark }">
        <pre class="language-html"><code class="language-html" v-html="getVueCode('label')"></code></pre>
      </figure>

      <h3 :class="{ 'dark': isDark }">
        Title
      </h3>
      <p>
        Specify prop <code :class="{ 'dark': isDark }">title: string</code> to set the title for the icon.
      </p>
      <p>
        <v-icon
          name="fa-vuejs"
          title="Vue.js"
        />
      </p>
      <figure :class="{ 'dark': isDark }">
        <pre class="language-html"><code class="language-html" v-html="getVueCode('title')"></code></pre>
      </figure>
      
      <h3 :class="{ 'dark': isDark }">
        Stacked Icons
      </h3>
      <p>
        Stack your icons easily jusy like in FontAwesome, even more powerful.
      </p>
      <p>
        <v-icon label="No Photo">
          <v-icon name="fa-camera"/>
          <v-icon
            name="fa-ban"
            scale="2"
            class="alert"
          />
        </v-icon>
      </p>
      <figure :class="{ 'dark': isDark }">
        <pre class="language-html"><code class="language-html" v-html="getVueCode('stack')"></code></pre>
      </figure>

      <h3 :class="{ 'dark': isDark }">
        Custom icons
      </h3>
      <p>
        You can register your own icons:
      </p>
      <figure :class="{ 'dark': isDark }">
        <pre class="language-javascript"><code class="language-javascript" v-html="getJSCode('custom')"></code></pre>
      </figure>
      <p>
        <v-icon name="baidu"/>
      </p>
      <figure :class="{ 'dark': isDark }">
        <pre class="language-html"><code class="language-html" v-html="getVueCode('custom')"></code></pre>
      </figure>

      <h3 :class="{ 'dark': isDark }">
        Multi-color icons
      </h3>
      <p>
        Register icons in more advanced ways to unleash the full power of SVG:
      </p>
      <figure :class="{ 'dark': isDark }">
        <pre class="language-javascript"><code class="language-javascript" v-html="getJSCode('multi')"></code></pre>
      </figure>
      <p>
        <v-icon name="webpack" /> <v-icon name="vue" /> <v-icon name="html5-c" />
      </p>
      <figure :class="{ 'dark': isDark }">
        <pre class="language-html"><code class="language-html" v-html="getVueCode('multi')"></code></pre>
      </figure>
    </div>
  </div>
</div>
</template>

<script>
import RandomIcon from '../components/RandomIcon'
import Prism from 'prismjs'

const vue = {
  basic: `<v-icon name="fa-flag"/>
<v-icon name="ri-bank-card-fill"/>
<v-icon name="ai-google-scholar-square"/>
<v-icon name="game-battered-axe"/>`,
  scale: `<v-icon name="fa-gamepad" scale="3"/>
<v-icon name="ri-folder-music-fill" scale="3"/>
<v-icon name="ai-overleaf" scale="3"/>
<v-icon name="game-ancient-sword" scale="3"/>`,
  spin: `<v-icon name="fa-sync" spin/>
<v-icon name="ri-refresh-line" spin/>
<v-icon name="ai-doi" spin/>
<v-icon name="game-earth-asia-oceania" spin/>`,
  pulse: `<v-icon name="fa-spinner" pulse/>
<v-icon name="ri-loader-line" pulse/>
<v-icon name="ai-osf" pulse/>
<v-icon name="game-american-shield" pulse/>`,
  flip: `<v-icon name="fa-signal" flip="horizontal"/>
<v-icon name="ri-playstation-line" flip="both"/>
<v-icon name="ai-google-scholar" flip="vertical"/>
<v-icon name="game-campfire" flip="vertical"/>
`,
  label: `<v-icon name="fa-code" label="Source Code"/>`,
  title: `<v-icon name="fa-vuejs" title="Vue.js"/>`,
  stack: `<v-icon label="No Photos">
  <v-icon name="fa-camera"/>
  <v-icon name="fa-ban" scale="2" class="alert"/>
</v-icon>`,
  custom: `<v-icon name="baidu"/>`,
  multi: `<v-icon name="webpack" /> <v-icon name="vue" /> <v-icon name="html5-c" />`
}

const js = {
  custom: `OhVueIcon.add({
  name: 'baidu',
  width: 23.868,
  height: 26,
  d: 'M3.613 13.701c2.827-.608 2.442-3.986 2.357-4.725-.138-1.139-1.477-3.128-3.296-2.971C.386 6.21.052 9.515.052 9.515c-.309 1.528.74 4.793 3.561 4.186zm3.002 5.875c-.083.238-.268.846-.107 1.375.315 1.187 1.346 1.24 1.346 1.24h1.48v-3.619H7.749c-.713.213-1.057.767-1.134 1.004zM8.86 8.035c1.562 0 2.823-1.797 2.823-4.019C11.683 1.796 10.421 0 8.86 0 7.301 0 6.036 1.796 6.036 4.016c0 2.222 1.265 4.019 2.824 4.019zm6.724.265c2.087.271 3.429-1.956 3.695-3.644.272-1.686-1.074-3.644-2.552-3.98-1.48-.339-3.329 2.032-3.497 3.578-.2 1.89.271 3.778 2.354 4.046zm5.114 9.923s-3.229-2.498-5.113-5.198c-2.555-3.981-6.185-2.361-7.399-.337-1.209 2.024-3.093 3.305-3.36 3.644-.271.334-3.9 2.293-3.095 5.871.806 3.576 3.635 3.508 3.635 3.508s2.085.205 4.504-.336c2.42-.537 4.503.134 4.503.134s5.652 1.893 7.199-1.751c1.545-3.645-.874-5.535-.874-5.535zm-9.671 5.423H7.352c-1.587-.316-2.219-1.4-2.299-1.584-.078-.188-.528-1.059-.29-2.539.686-2.219 2.642-2.379 2.642-2.379h1.956V14.74l1.666.025v8.881zm6.844-.025h-4.229c-1.639-.423-1.716-1.587-1.716-1.587v-4.677l1.716-.027v4.203c.104.447.661.529.661.529h1.742v-4.705h1.825v6.264zm5.986-12.486c0-.808-.671-3.239-3.159-3.239-2.492 0-2.825 2.295-2.825 3.917 0 1.548.131 3.71 3.227 3.641 3.096-.068 2.757-3.507 2.757-4.319z'
})`,

  'multi': `OhVueIcon.register(
  {
    name: 'webpack',
    width: 1200,
    height: 1200,
    paths: [
      {
        style: 'fill:#8ED6FB',
        d: 'M1035.6 879.3l-418.1 236.5V931.6L878 788.3l157.6 91zm28.6-25.9V358.8l-153 88.3V765l153 88.4zm-901.5 25.9l418.1 236.5V931.6L320.3 788.3l-157.6 91zm-28.6-25.9V358.8l153 88.3V765l-153 88.4zM152 326.8L580.8 84.2v178.1L306.1 413.4l-2.1 1.2-152-87.8zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2 152-87.8z'
      },
      {
        style: 'fill:#1C78C0',
        d: 'M580.8 889.7l-257-141.3v-280l257 148.4v272.9zm36.7 0l257-141.3v-280l-257 148.4v272.9zm-18.3-283.6zM341.2 436l258-141.9 258 141.9-258 149-258-149z'
      }
    ]
  },
  {
    name: 'vue',
    width: 256,
    height: 221,
    polygons: [
      {
        style: 'fill:#41B883',
        points: '0,0 128,220.8 256,0 204.8,0 128,132.48 50.56,0 0,0'
      },
      {
        style: 'fill:#35495E',
        points: '50.56,0 128,133.12 204.8,0 157.44,0 128,51.2 97.92,0 50.56,0'
      }
    ]
  },
  {
    name: 'html5-c',
    width: 512,
    height: 512,
    raw: '<path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512"/><path fill="#EF652A" d="M256,472 L405,431 440,37 256,37"/><path fill="#EBEBEB" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"/><path fill="#FFF" d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"/>'
  }
)`
}

export default {
  components: {
    RandomIcon
  },
  computed: {
    isDark() {
      return this.$store.state.theme.isDark
    }
  },
  methods: {
    getVueCode(name) {
      const source = vue[name]
      const highlight = Prism.highlight(source, Prism.languages.html, 'html')
      return highlight
    },
    getJSCode(name) {
      const source = js[name]
      const highlight = Prism.highlight(source, Prism.languages.javascript, 'javascript')
      return highlight
    }
  }
}
</script>

<style>
pre {
  margin: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.alert {
  color: #c33;
  opacity: 0.8;
}

@media (max-width: 640px) {
  pre {
    box-shadow: none;
  }
}
</style>

<style lang="postcss">
h1 {
  @apply text-3xl font-semibold mt-10 mb-6;
}

h2 {
  @apply mt-20 text-2xl font-medium pb-2;
}

h3 {
  @apply my-4 mt-16 text-xl font-medium;
}

h1, h2, h3 {
  @apply text-gray-800;
}

h1.dark, h2.dark, h3.dark {
  @apply text-gray-200;
}

p {
  @apply my-2 leading-6;
}

.docs a {
  @apply text-blue-600 font-medium;
}

.docs a.dark {
  @apply text-blue-400
}

.docs a:hover {
  @apply underline;
}

figure {
  @apply mt-2 mb-4;
}

ul {
  @apply my-2;
}

li {
  @apply ml-8 list-disc leading-7;
}
</style>