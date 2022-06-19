interface CoinProps {

  key: string;
  name: string;
  price: number;
  volume: number;
  change: number;
  
}


function Coin(props :CoinProps) {

 const capitalizeFirst = (str :string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

    return (
        <div className="card">

        <div className="coin-main">

        <h1 className="coin-name">{ capitalizeFirst(props.name)}</h1>
        <p className="coin-price">${props.price}</p>
        </div>

        <div className="coin-bottom">

        <div className="coin-volume">volume: <br/> {props.volume.toFixed(5)}</div> 
        <div className="coin-change">change: <br/> {props.change.toFixed(5)}</div>

        </div> 
       

        </div>
    )
}

export default Coin;