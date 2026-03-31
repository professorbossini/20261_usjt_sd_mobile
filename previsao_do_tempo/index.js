const axios = require('axios')
const appid = 'ef0b0973b783e0614ac87612ec04344b'
const q = 'Itu'
const units = 'metric'
const lang = 'pt_BR'
const cnt = 2
const baseURL = `https://api.openweathermap.org/data/2.5/forecast`
const url = `${baseURL}?q=${q}&appid=${appid}&units=${units}&lang=${lang}&cnt=${cnt}`
const minhaPromise = axios.get(url)
minhaPromise
.then(res => {
  console.log(res.data)
  console.log('=========================')
  return res.data
})
.then(res => {
  console.log(`cnt: ${cnt}`)
  console.log('=========================')
  return res.list
})
.then(res => {
  //pegar o main do primeiro elemento da lista
  console.log(`Temp max do primeiro: ${res[0].main.temp_max}`)
  console.log('=========================')
  return res
})
.then(res => {
  console.log(`Description: ${res[0].weather[0].description}`)
  console.log('=========================')
  return res
})
//percorrer a lista exibindo, para cada previsão
//temperatura maxima, temperatura minima e descrição
//faça um for..of
.then(previsoes => {
  for(let previsao of previsoes){
    console.log(`Temp min: ${previsao.main.temp_min}`)
    console.log(`Temp max: ${previsao.main.temp_max}`)
    console.log(`Description: ${previsao.weather[0].description}`)
    console.log('---------------------')
  }
})
