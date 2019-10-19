import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import Info from '../Info';

class Home extends Component{
    render(){
        return(
            <div className="bodyLine1">
            <div className="container bodyLine ">
                <div className="row mt-5">
                   
                        <InfoConsumer>
                            {value => {
                                return value.info.map(item => {
                                    return <Info key ={item.id} item={item} />
                                } )
                            }}
                        </InfoConsumer>
                    </div>

                </div>
            </div>




            // <div>fdff</div>
        );
    }
}

export default Home;