import React,{Component} from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import Header from './Header';
import ListFeature from './ListFeature';

class Exercise3 extends Component{
    render(){
        return(
            // <div className="fluid-container">
            //         {/* <div className="row">
            //             <div className="col-12">
            //                 <Header/>
            //             </div>
            //         </div>
            //         <div className="row">
            //             <div className="col-12">
            //                 <Carousel/>
            //             </div>
            //         </div>
            //         <div className="row">
            //             <div className="col-12">
            //                 <ListFeature/>
            //             </div>
            //         </div>
            //         <div className="row">
            //             <div className="col-12">
            //                 <Footer/>
            //             </div>
            //         </div> */}
            // </div>
            <div>
                <Header/>
                <Carousel/>
                <ListFeature/>
                <Footer/>
            </div>
        );
    }
}

export default Exercise3;
