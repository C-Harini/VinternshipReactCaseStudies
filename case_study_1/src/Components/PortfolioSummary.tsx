import '../App.css'

interface Asset{
    name:string;
    symbol:String;
    value:number;
    change:number;
  
}


interface AssetProps{
    assets:Asset[];
}


function PortfolioSummary(props:AssetProps){
     let totalValue=0;
    let averageChange=0;
    let len=0;
     props.assets.forEach(element => {
        totalValue+=element.value;
        averageChange+=element.change;
        len+=1;
     });
     averageChange=(averageChange/len)
     return<>
     <p className="total_disply">The total value of the assets is {totalValue}</p>
     <p className='total_disply'>The avaerage change is {averageChange.toFixed(2)} %</p>
     </>
}
export default PortfolioSummary;
