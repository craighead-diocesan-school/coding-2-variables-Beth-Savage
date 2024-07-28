// ####################################
// ###### ----- Pupper Age ----- ######
// ####################################

function pupperAge() {
  alert('Dog years are human years times seven.')

  let humanYears = prompt('How old is your dog in human years?')
  humanYears = Number(humanYears)
  let dogYears = (humanYears * 7)

  alert('Your dog is ' + dogYears + ' dog years old.')
}
