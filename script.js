const filterBtn = document.querySelectorAll('.btn')
const opportunities = document.querySelectorAll('.scholar')

for (i = 0; filterBtn.length; i++) {
    filterBtn[i].addEventListener('click', (e) => {
        e.preventDefault()

        const filter = e.target.dataset.filter
        console.log('filter ', filter)


        opportunities.forEach(opportunity => {
            if (filter == 'all') {
                opportunity.style.display = 'block'
            } else if (opportunity.classList.contains(filter)) {
                opportunity.style.display = 'block'
            } else {
                opportunity.style.display = 'none'

            }
        })
    })
}