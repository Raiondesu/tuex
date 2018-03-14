# Tuex

A simpler Vuex alternative written in TypeScript.

## [![](https://img.shields.io/travis/Raiondesu/Tuex/master.svg?style=flat-square)](https://travis-ci.org/Raiondesu/Tuex) [![](https://img.shields.io/codecov/c/github/Raiondesu/Tuex/dev.svg?style=flat-square)](https://codecov.io/gh/Raiondesu/Tuex) [![](https://img.shields.io/codacy/grade/929a2e386c4c4cb6ae12619f89b0f0e3/master.svg?style=flat-square)](https://app.codacy.com/app/Raiondesu/Tuex/dashboard) ![](https://badges.herokuapp.com/size/npm/tuex@latest/lib/index.min.js?style=flat-square) ![](https://badges.herokuapp.com/size/npm/tuex@latest/lib/index.min.js?style=flat-square&gzip=true) [![](https://img.shields.io/npm/dt/tuex.svg?style=flat-square)](http://npmjs.com/package/tuex)

> (TypeScript + Vuex) - Complexity = Tuex

## [Full Documentation](https://github.com/Raiondesu/Tuex/wiki)

![](https://github.com/Raiondesu/Tuex/raw/master/TuexDiagram.png)

## [About](https://github.com/Raiondesu/Tuex/wiki/What-is-Tuex)

Tuex is a reactive centralized state management library for Vue.js. It takes heavy inspiration from the Flux pattern (especially Vuex).

The main goal of Tuex is to make state-management less complex for small-scale apps, while also keeping the state flexibile and scalabile.

## [Installation](https://github.com/Raiondesu/Tuex/wiki/Installation)

```bash
npm install tuex --save
# or
https://unpkg.com/tuex
```

## [Usage](https://github.com/Raiondesu/Tuex/wiki/Getting-Started)

```js
// imports or scripts
...
Vue.use(Tuex);

const TuexStore = new Tuex.Store({
  num: 0,

  increase(amount) {
    this.num += amount;
  }
});
...
```

```js
// Vue component
...
  created() {
    this.$store.state.increase(10);
    console.log(this.$store.num);
    // => 10

    this.$store.state.num = -1;
    console.log(this.$store.num);
    // => -1
  }
...
```

## [Roadmap](https://github.com/Raiondesu/Tuex/wiki/Roadmap)

Coming soon:
- Full Wiki Documentation
- Refactoring
- Performance gains
- Breaking changes

- More configuration options
- Code coverage
- Fully Vuex-compatible API (to some extent)

- Component binding helpers
