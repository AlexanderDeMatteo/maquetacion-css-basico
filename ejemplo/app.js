const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

function wrapping(gifts) {
        return gifts.map((item, index)=>{
            wrap = item.length +2
            simbol="*"
            simbols=simbol.repeat(wrap)
              return `${simbols}\n*${item}*\n${simbols}`
          })
      }
    


console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
