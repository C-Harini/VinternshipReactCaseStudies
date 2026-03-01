
import './App.css'
import {useState} from "react";
import AssetEditor from './Components/AssertEditor';
import PortfolioSummary from './Components/PortfolioSummary'
interface Asset {
  name: string;
  symbol: string;
  value: number;
  change: number;
}

function App() {
 
    const assets :Asset[]= [
    { name: "Apple", symbol: "AAPL", value: 100, change: 2},
    { name: "Tesla", symbol: "TSLA", value: 200, change: 4 },
    {name:"Benze",symbol:"YYHH",value:500,change:6}
  ];
  const[assetss,setAssets]=useState<Asset[]>([]);
   const handleUpdate=(asset:Asset)=>{
    setAssets([...assetss,asset]);
  }
  return (
    <>
      <PortfolioSummary assets={assets}/>
      <AssetEditor onUpdate={handleUpdate}/>
      </>
      )
      }
export default App;
