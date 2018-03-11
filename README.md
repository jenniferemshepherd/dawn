# dawn

## process

1. listed user interactions and defined mvp and v2 interactions.
2. wrote user stories

## getting started

* `git clone` this repository.
* `cd dawn`.
* `npm install` to install dependencies for development.
* `open specRunner.html` (OSX) or `xdg-open specRunner.html` (Linux) to run unit tests.
* to be continued

## user stories

### mvp/v1
```
as an observer
because I am interested in life simulations
i want to see a basic cell

as an observer
so that there is more to look at
i want to see two different cells

as an observer
so the cells seem more realistic as living creatures
i want to see them move
```

### v2

```
as an observer
so that more cells can be created
i want the cells to create another cell on collision
```

### v3

```

as an observer
so that i can get a sesne of time elapsing in the simuation
i would like to see the cells grow
```

### v4

```
as an observer
so that the canvas looks interesting
i want there to be visibly different properties in each cell

as an observer
so that the new cells are genetic offspring
the new cell will have attributes that are a mix of the parent attributes
```


## web stack
* [Node.js](https://nodejs.org/en/).
* [NPM](https://www.npmjs.com/) for dependencies.
* [Matter.js](http://brm.io/matter-js/) for physics, with the following plugins:
  * [matter-attractors](https://github.com/liabru/matter-attractors)
  * [matter-collision-events](https://github.com/dxu/matter-collision-events)
* [p5-sound](https://p5js.org/reference/#/libraries/p5.sound) for sound.
* [React.js](https://reactjs.org/) for UI.
* [Jasmine](https://jasmine.github.io/) for unit and integration testing.
* [Nightwatch.js](http://nightwatchjs.org/) for front-end UI testing.
* [webpack](https://webpack.js.org/) for bundling on deployment.

## to run

## to test
* open specrunner blah

# Points for development:
* sounds
* tbc



<!-- ####Things you may want to cover:

* version

* System dependencies

* Configuration

* Database creation/initialization

* Services (job queues, cache servers, search engines, etc.)

* ... -->
