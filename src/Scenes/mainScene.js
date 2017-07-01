import React, { Component } from 'react';
import { Container, Content, View, Text, List, ListItem } from "native-base";
import { observer } from "mobx-react/native"

import ListItemCell from "../Components/listItemCell";

const item = {
    name:"Apples",
    price:20,
    amount:3
}

class MainScene extends Component {

    constructor(props){
        super(props)

        this.state = {
        }
    }

    renderItems(){
        if (this.props.store.list.length == 0){
            return <ListItem><Text>You have no items, add one by tapping the button in the top right corner</Text></ListItem>
        } else {
            return(
                this.props.store.list.map((item, index) =>
                    <ListItemCell item={item} key={index}/>
                )
            )
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <View>
                        <List style={{marginTop:10}}>
                            {this.renderItems()}
                        </List> 
                    </View>
                </Content>
            </Container>
        );
    }
}

export default MainScene;