export const printDataInDought = () => {

    fetch("https://api.jsonbin.io/v3/b/63a092ab15ab31599e2045be",{
      headers: {
        "x-access-key": "$2b$10$5pBRUbFRKdKft/b8qSQ3IeyPQgQ8CLXlvgoQA6GdpYvdWva.pOfGS"
      }})
      .then(resp => resp.json())
      .then(data => {

const transactions = data.record.transactions
const transacationTypes = data.record.transacationTypes

    const typesList = transactions.map((i)=> {
switch(i.type){
    case 1:
        return transacationTypes[1]
        break;
    case 2:
        return transacationTypes[2]
        break;
    case 3:
        return transacationTypes[3]
        break;
    case 4:
        return transacationTypes[4]
        break;
}
    })

       const allTypesListCounter = typesList.reduce((accumulator, value) => {
        return {...accumulator, [value]: (accumulator[value] || 0) + 1};}, {});

    const transactionsDescriptions = Object.keys(allTypesListCounter)
const transactionsRepeatitions = Object.values(allTypesListCounter)

        return chartPrint(transactionsDescriptions, transactionsRepeatitions )
      }
      )
    
    }
    
    
    
    const chartPrint = (x_Param, y_Param) =>{
    
      let chart =  document.getElementById("chartDought").getContext('2d')
    let transactionsRepetitionChart = new Chart(chart, {
      type: "doughnut",
    data: {
      labels: x_Param, 
      datasets:[{
        label: "Saldo",
        data: y_Param
      }]
    }, 
    options: {
      tooltips:{
        mode: "index"
      }
    }})
    }
    