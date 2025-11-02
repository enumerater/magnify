const right = document.querySelectorAll('.right img')
const left = document.querySelector('.left')
right.forEach(
    (item) => {
        item.addEventListener('mouseover', (e) => {
            left.querySelector('img').src = e.target.src
            e.target.style.border = '1px solid #2aeb2aff'
        })
        item.addEventListener('mouseout', (e) => {
            e.target.style.border = '0'
        })
    }
)

left.addEventListener('mousemove', (e) => {
    const large = document.querySelector('.large')
    large.style.display = 'block'
    large.style.backgroundImage = `url(${left.querySelector('img').src})`
    
    console.log(large.style.backgroundImage)

    const mask = document.querySelector('.mask')
    mask.style.display = 'block'
    let x = e.offsetX - mask.offsetWidth / 2
    let y = e.offsetY - mask.offsetHeight / 2

    x = x<0 ? 0:x
    y = y<0 ? 0:y
    x = x>200 ? 200:x
    y = y>200 ? 200:y

    large.style.backgroundPosition = `-${x * 2}px -${y * 2}px`

    mask.style.left = x + 'px'
    mask.style.top = y + 'px'
})

left.addEventListener('mouseout', (e) => {
    const mask = document.querySelector('.mask')
    mask.style.display = 'none'
    const large = document.querySelector('.large')
    large.style.display = 'none'
})




