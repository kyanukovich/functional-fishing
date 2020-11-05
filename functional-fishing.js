/**
 * Function Fishing
 * A simple fishing game
 *
 * Rules:
 * To Eat: Must have at least 1 fish and a fire
 * To Make Fire: Must have a least 1 log of wood
 * To Fish: Must have at least 1 piece of bait and fire must be out
 * To Find Wood: The fire must be out.
 * To Find Bait: The fire must be out.
 */

const randomInt = function (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * The game object stores the current game status
 */

const game = {
  fish: 0,
  bait: 0,
  wood: 0,
  fire: false
}

/**
 * fire
 * To start a fire:
 *    The fire must be out
 *    There must be at least 1 piece of wood
 *
 * To stop a fire:
 *    The fire must be going
 */

function fire () {
  if (game.fire) {
    game.fire = false
    return 'You\'ve put out the fire.'
  } else if (game.wood >= 1) {
    game.wood--
    game.fire = true
    return 'You\'ve started the fire.'
  } else {
    return 'You do not have enough wood.'
  }
}

/**
 * fish
 * To go fishing:
 *    The fire must be out
 *    There must be at least 1 piece of bait
 */

function fish () {
  if (game.fire === false) {
    if (game.bait === 1) {
      game.bait--
      game.fish++
      return 'You\'ve caught a fish.'
    } else {
      return 'You need to put on a bait.'
    }
  } else {
    return 'You must put out the fire.'
  }
}

/**
 * bait
 * To search for bait:
 *    The fire must be out
 */

function bait () {
  if (game.fire === false) {
    if (game.bait === 0) {
      game.bait++
      return 'You\'ve put on a bait.'
    } else {
      return 'You\'ve already put on a bait.'
    }
  } else {
    return 'You must put out the fire.'
  }
}

/**
 * wood
 * To search for wood:
 *    The fire must be out
 */

function wood () {
  if (game.fire === false) {
    game.wood++
    return 'You\'ve got wood.'
  } else {
    return 'You must put out the fire.'
  }
}

/**
 * eat
 * To eat a fish:
 *    There fire must be going
 *    There must be at least 1 fish
 */

function eat () {
  if (game.fire) {
    if (game.fish >= 1) {
      game.fish--
      return 'You ate a fish.'
    } else {
      return 'You\'ve got nothing to eat.'
    }
  } else {
    return 'You should start a fire.'
  }
}

/**
 * inventory
 * Shows the players current inventory
 */

function inventory () {
  const response = []
  response.push('INVENTORY:\n')
  for (const item in game) {
    if (item === 'fire') {
      if (game[item]) {
        response.push('The fire is burning.')
      } else {
        response.push('The fire is not burning.')
      }
    } else {
      response.push(`${item}: ${game[item]}\n`)
    }
  }
  return response.join('')
}

/**
 * help
 * Display the game instructions.
 */

function help () {
  return `Welcome to Functional Fishing.
The text-based console fishing game.

Instructions: 
In this game you will catch, cook and eat fish. You will also search for wood and bait.

Commands:
To eat a fish, use eat()
To go fishing, use fish()
To start/stop a fire, use fire()
To search for bait, use bait()
To search for wood, use wood() 
To check the current inventory, use inventory()
To view these instructions, again, use help()`
}

console.log(help())
