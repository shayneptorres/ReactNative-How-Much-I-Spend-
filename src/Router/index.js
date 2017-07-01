import React, { Component } from 'react';
import { Router, Scene } from "react-native-router-flux";

// Scenes
import MainScene from "../Scenes/mainScene"

// Stores
import ListStore from "../Stores/listStore";
import AddItemScene from "../Stores/addItemScene";

class MainRouter extends Component {
    render() {
        return (
            <Router store={ListStore}>
                {/* Main Scene */}
                <Scene key="mainFlow">
                    <Scene key="main"
                    component={MainScene}
                    title="Your list"
                    sceneStyle={{paddingTop:64}}
                    navigationBarStyle={{backgroundColor:"#26CF79"}}
                    rightTitle="+ Add item"
                    rightButtonTextStyle={{color:"white"}}
                    onRight={() => console.log("Will add item")}
                    />
                </Scene>
                
            </Router>
        );
    }
}


export default MainRouter;