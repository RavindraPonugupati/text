import React, { Component } from 'react';
import { placeInfo } from '../component/data';
import  Capture1  from './images/Capture1.PNG';


const InfoContext = React.createContext();

//Provider
//Consumer

class InfoProvider extends Component{
    state = {
        info: placeInfo
    }
    render() {
        


        return(
            
            <InfoContext.Provider value={{
                info: this.state.info,
                review: this.state.review,
                headerTitle: this.state.headerTitle,
                headerSubTitle: this.state.headerSubTitle,
                headerText: this.state.headerText,
                name: this.state.name,
                avatar: this.state.avatar,
                comment: this.state.comment,
                img: this.state.img
            }}>{this.props.children}

            </InfoContext.Provider>
        );
    }
}


const InfoConsumer = InfoContext.Consumer;


export { InfoProvider, InfoConsumer };