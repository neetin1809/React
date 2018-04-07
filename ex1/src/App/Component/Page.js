import  React  from "react";

export default class Home extends React.Component{
    render(){
        let content="";
        if(true){
            content="Something";
        }

        return (
            //     <div className="container">
            //         <div className="row">
            //             <div className="col-xs-10">
            //                 <h1> Hello</h1>
            //             </div>
                        
            //         </div>
            //    </div>

            <div>
                <p>In Home Component </p>
                <hr/>
                {content}
                <br/>
                {"SOmething"}
                </div>
        );
    }
}