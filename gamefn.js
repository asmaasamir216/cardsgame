document.addEventListener('DOMContentLoaded',()=> {
    const cardArray=[
        {
            image:'poo',
            src:'images/poo.jpg'

        },
        {
            image:'poo',
            src:'images/poo.jpg'

        },
        {
            image:'elsa',
            src:'images/elsa.jpg'

        },
        {
            image:'elsa',
            src:'images/elsa.jpg'

        },
        {
            image:'shalby',
            src:'images/shalby.jpg'

        },
        {
            image:'shalby',
            src:'images/shalby.jpg'

        },
        {
            image:'spong',
            src:'images/spong.jpg'

        },
        {
            image:'spong',
            src:'images/spong.jpg'

        },
        {
            image:'tna',
            src:'images/tna.jpg'

        },
        {
            image:'tna',
            src:'images/tna.jpg'

        },
        {
            image:'winy',
            src:'images/winy.jpg'

        },
        {
            image:'winy',
            src:'images/winy.jpg'

        },
        
    ]
    //vars and consts to use later

    const space=document.querySelector('.space')
    const result=document.querySelector('#result')
    const cardsWon=[]
    var cardsChosen=[]
    var cardsChosenId=[]

    //draw space work create space

    function createBoard()
    {
        for(i=0 ; i<cardArray.length ; i++)
        {
            var card=document.createElement('img')
            card.setAttribute('src','images/question.jpg')
            card.setAttribute('height',100)
            card.setAttribute('width',100)
            card.setAttribute('data-id',i)
            space.appendChild(card)
            card.addEventListener('click',flipCard)
        }
    }

    //flipCard function

    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].image)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].src)
        if(cardsChosen.length ===2)
        {
            setTimeout(checkForMatch,300)
        }
    }

    //function to check match

    function checkForMatch(){

        var cards=document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(optionOneId==optionTwoId){
            cards[optionOneId].setAttribute('src','images/question.jpg')
            cards[optionTwoId].setAttribute('src','images/question.jpg')
            alert('You already clicked the card!!')
        }
        else if(cardsChosen[0]===cardsChosen[1])
        {
            alert('You found a match')
            cards[optionOneId].setAttribute('src','images/white.jpg')
            cards[optionTwoId].setAttribute('src','images/white.jpg')
            cards[optionOneId].removeEventListener('click',flipCard)
            cards[optionTwoId].removeEventListener('click',flipCard)
            cardsWon.push(cardsChosen)

        }
        else{
            cards[optionOneId].setAttribute('src','images/question.jpg')
            cards[optionTwoId].setAttribute('src','images/question.jpg')
            alert('Wrong Card!!')
        }
        cardsChosen=[]
        cardsChosenId=[]
        result.textContent=cardsWon.length
        if(cardsWon.length===cardArray.length/2)
        {
           result.textContent='**** You Win ****'
        }
    }

   cardArray.sort(()=>0.5 - Math.random())

    createBoard()

})