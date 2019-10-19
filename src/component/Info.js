import React, { Component } from 'react';
import { InfoConsumer } from './context';
import { placeInfo } from './data';
import  Capture1  from './images/Capture1.PNG';


class Info extends Component{
    render(){

        const { 
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img,
            view
        } = this.props.item;

            console.log(img);
        return(
            <InfoConsumer>

                {value => (
                    <div className="col-10 col-lg-4  mb-5">
                    {/* <div className="card" style={{ width: '18rem' }}> */}
                    <div className="card">
                    <img src={img} alt={headerTitle} className="card-img-top" />
                        
                        <div className="card-body">
                        
                            <h3 className="catd-title text-uppercase">{headerTitle}</h3>
                            <h5 className="card-title">{headerSubTitle}</h5>
                            <p className="card-text">{headerText}</p>
                           <p className="linkView"><a href="#">{view}</a></p>
                        </div>
                    </div>
                    
                </div>
                )}
            </InfoConsumer>
        );
    }
}

export default Info;