# dawn

|| [Ed Perkins](https://github.com/edpe) || [Jennifer Shepherd](https://github.com/jenniferemshepherd) || [Ellie Wem](https://github.com/elliewem) || [Roland Vink](https://github.com/rcvink) ||

_dawn_ can be observed in action [here](https://rcvink.github.io/dawn/).

## What is dawn?

_dawn_ is a procedurally generated socio-genetic simulation. What does that mean?

- Procedurally generated
  - None of the outcomes are predefined; they are based purely on the results of the random algorithms.
- Socio-genetic simulation
  - _dawn_ is inspired by Conway's Game of Life, Spore and No Man's Sky.
  - The user observes 'cells' interacting with each other in an environment; living, breeding, inheriting properties, and eventually dying.

## getting started

[The easy way.](https://rcvink.github.io/dawn/)

The lengthier way:
* `git clone` this repository.
* `cd dawn`.
* `npm install` to install dependencies.
* `npm run build` to bundle dependencies.
* `npm test` to run unit tests.
* `open dawn.html` (OSX) or `xdg-open dawn.html` (Linux) to observe _dawn_

## process

1. diagrammed ideas
2. wrote user stories
3. defined our MVP
4. wrote tests
5. wrote code
6. refactored
7. repeated steps 2 - 6

## user stories

### mvp
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
so that i can get a sense of time elapsing in the simuation
i would like to see the cells grow

as an observer
so that the environment does not become crowded
i want cells to die after a period of time
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

### v5
```
as an observer
so that the new cells don't eventually become the same colour
i want there to be a chance of colour mutation

as an observer
so i can experience cell creation on a different sensory level
i want there to be a sound on creation
```


## stack
* [NPM](https://www.npmjs.com/) for package management.
* [Matter-js](http://brm.io/matter-js/) for physics.
* [p5-sound](https://p5js.org/reference/#/libraries/p5.sound) for sound.
* [Jasmine](https://jasmine.github.io/) for unit testing.
* [Browserify](http://browserify.org/) for bundling.

# points for development
Check out our [issues](https://github.com/jenniferemshepherd/dawn/issues).
