const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)


const calculateBill = () => {
    const bill = Number(billInput.value)
    const tipPercentage= Number(tipInput.value)/100
    const tipAmount = bill* tipPercentage
    console.log({tipAmount})
    const total= tipAmount+bill
    console.log({total})
    const perPersonTotal= total/numberOfPeople
    console.log({perPersonTotal})
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`

}
const increasePeople=() =>{
    numberOfPeople += 1
    numberOfPeopleDiv.innerText =numberOfPeople
     calculateBill()
}

const decreasePeople= () => {
    if(numberOfPeople <=1){
        alert('Hey! You cannot have less than 1 person!')
        return
    }               
    numberOfPeople -= 1
    numberOfPeopleDiv.innerText= numberOfPeople
    calculateBill()
    

}