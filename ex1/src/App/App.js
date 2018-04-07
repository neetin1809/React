import  React  from "react";
// import { render  } from "react-dom";
import  Header  from "./Component/Header";
import  Page  from "./Component/Page";


class  App extends React.Component{
  render(){
    return(
          <div className="container">
            <div  className="row">
              <div  className="col-xs-10 col-xs-offset-1">
                <Header/>
              </div>
            </div>
            <div  className="row">
          <div  className="col-xs-10 col-xs-offset-1">
            <Page/>
           </div>
           </div>
           </div>
           
    )
  }
}

export default App;