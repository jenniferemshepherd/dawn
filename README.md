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
so that there is variation in cells
i want to see two different cells

as an observer
so the cells seem more realistic as living creatures
i want to see them move

as an observer
so that the cells can interact
i want an event to occur when they collide

as an observer
so that more cells can be created
i want the cells to create another cell on collision
```

### v2

```
as an observer
so that the new cells are genetic offspring
the new cell will have attributes that are a mix of the parent attributes
```

### v3

`Placeholder`

### v4

`Placeholder`

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

# Points for development:
* sounds
* tbc



<!-- ####Things you may want to cover:

* version

* System dependencies

* Configuration

* Database creation/initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->
