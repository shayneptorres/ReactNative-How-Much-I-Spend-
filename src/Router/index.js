import React, { Component } from 'react';
import { Router, Scene, Actions } from "react-native-router-flux";

// Scenes
import MainScene from "../Scenes/mainScene"
import AddItemScene from "../Scenes/addItemScene";

// Stores
import ListStore from "../Stores/listStore";

class MainRouter extends Component {
    render() {
        return (
            <Router store={ListStore}>
                {/* Main Scene */}
                

                <Scene key="mainFlow">
                    <Scene key="main"
                        component={MainScene}
                        title="Your list"
                        titleStyle={{color:"white"}}
                        sceneStyle={{paddingTop:64}}
                        navigationBarStyle={{backgroundColor:"#26CF79"}}
                        rightTitle="+ Add item"
                        rightButtonTextStyle={{color:"white"}}
                        onRight={() => Actions.addItem()}
                    />
                    
                    <Scene key="addItem"
                        component={AddItemScene}
                        title="Add an item"
                        titleStyle={{color:"white"}}
                        sceneStyle={{paddingTop:64}}
                        navigationBarStyle={{backgroundColor:"#26CF79"}}
                    />


                </Scene>
                
                
            </Router>
        );
    }
}


export default MainRouter;