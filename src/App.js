import React,{useEffect,useState} from 'react';
import './App.css';
import Navbarmenu from './Navbarmenu';
import Delivery from './Delivery';
import Status from './Status';
import './Status.css';
import Track from './Track';
import destination from './destination.svg';
import warehouse from './warehouse.svg';

function App() {

  const [data,setData] = useState([]);
  const [tk,setTk] = useState(0);
  var [DL,IT,OD,UD,NI] = [0,0,0,0,0];

  useEffect( () =>{abc()}, [] )
  const abc = async () =>{
    const res = await fetch(' https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank',
    {
        method: 'POST', 
        body: JSON.stringify({"email": "mayankmittal@intugine.com"}), 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer tTU3gFVUdP'
        }
       
      });
    const datas = await res.json();
    setData(datas.data);
    
  };
  
  if(data.length !== 0){
    var std =[];
    std = data.map(it => (it.pickup_date));
    var stt = [];
      for(var i of std){
        if(i===null){
          stt.push('');
        }
        else{
          let aid = i.slice(0,10).split('-').reverse().join('/');
          stt.push(aid);
      }}
   
    var ed =[];
    ed = data.map(it => (it.time));
    var edt = [];
      for(var j of ed){
        if(j===null){
          edt.push('');
        }
        else{
          let aid = j.slice(0,10).split('-').reverse().join('/');
          edt.push(aid);
      }}
  }
  var selected = (a) =>{
    setTk(a);
  }

  for(var t of data){
    switch (t.current_status_code) {
      case "OOD":
        OD++;   
        break;
      case "DEL":
        DL++;
        break;
      case "INT":
        IT++;
        break;
      case "UND":
        UD++;
        break;
      case "NFI":
        NI++;
        break;
      default:
        break;
    }
  }
  

  return (
    <div>
       <Navbarmenu />
       <Delivery od={OD} dl={DL} it={IT} ni={NI} ud={UD}/>
        {data.length !== 0 ?
       <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
            <div style={{width:'30vw',border:'1px solid rgb(228, 225, 225)',height:'45vh'}} className="head">
                <div className="spa"><img src={destination} alt="" /></div>
                  <div className="gap">
                        { data[tk].from === null ?
                          <div>
                          <div className="dow">
                            <div className="dot"></div>
                            <div className="dash"></div>
                                <div className="cont">
                                    <div>
                                        UNDELIVERED
                                    </div>
                                </div>
                          </div>
                          </div>
                        :
                        data[tk].scan.map((item,ind) =>(
                        <Track 
                          current={item.status_detail}
                          time={item.time}
                          key={ind}
                        />
                      ))
                    }                   
                  </div>
                <div className="spa"><img src={warehouse} alt="" /></div>
            </div>

            <div style={{width:'60vw',height:'50vh',overflowY:'scroll',border:'1px solid rgb(228, 225, 225)'}}>
              <table style={{position:'relative'}} className="text-center">
                <thead>
                  <tr>
                    <th>AWB NUMBER</th>
                    <th>TRANSPORTER</th>
                    <th>SOURCE</th>
                    <th>DESTINATION</th>
                    <th>BRAND</th>
                    <th>START DATE</th>
                    <th>ETD</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                {
                data.map((info,p) => (
                  <Status aws={info.awbno}
                    carrier={info.carrier}
                    source={info.from}
                    dest={info.to}
                    brand={'USPA'}
                    start={stt[p]}
                    end={edt[p]}
                    status={info.current_status}
                    p={p}
                    selected={selected}
                    key={p}
                  />
                ))
              }
              </tbody>
              </table>
            </div>
            
         </div> : <div></div> }
        
       
    </div>
  );
}

export default App;
