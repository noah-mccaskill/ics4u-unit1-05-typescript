/**
 * This program calculates the length required
 * for a board foot.
 *
 * By: Noah McCaskill
 * Version: 1.0
 * Since:  2022-10-3
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

/**
 * @param {number} userWidth of the wood
 * @param {number} userHeight of the wood
 * @returns {mumber} userLength of the wood
 */
function BoardFoot(userHeight: number, userWidth: number): number {
  // Process
  const BOARD_FOOT = 144
  const userLength = BOARD_FOOT / (userWidth * userHeight)
  return userLength
}

console.log('This program calculates the required length for a board foot.')

try {
  // Input and Output
  const valueInput = prompt('Enter in a width: ')
  const userWidth = parseFloat(valueInput)
  const valueInputTwo = prompt('Enter a height: ')
  const userHeight = parseFloat(valueInputTwo)

  if (isNaN(userWidth) || isNaN(userHeight)) {
    throw new Error('\nThat is not a valid input.')
  }

  if (userWidth <= 0 || userHeight <= 0) {
    throw new Error('\nThat is not a valid input.')
  }

  console.log(
    `\nThe required length  is ${BoardFoot(
      userHeight,
      userWidth
    )} inches for the board foot to be 144 inches³.`
  )
  console.log('\nDone.')
} catch (e) {
  console.log('\nThat is not a valid input.')
}
