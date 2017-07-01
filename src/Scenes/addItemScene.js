import React, { Component } from 'react';
import {
    Container,
    Content,
    View,
    Text,
    Button,
    Form,
    Item,
    Input,
    Label
} from "native-base"
import SimpleStepper from "react-native-simple-stepper";
import Dimensions from "Dimensions";
import { Actions } from "react-native-router-flux";

const screenWidth = Dimensions.get("window").width;

class AddItemScene extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            price: "0",
            amount: 1
        }
    }

    addNewItem(){
        if(this.state.name != ""){
            this.props.store.addItem(this.state)
            Actions.pop({refresh:{...this.props.store}})
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <View>
                        <Form>
                            <Item floatingLabel>
                                <Label>Item name</Label>
                                <Input autoFocus onChangeText={(text) => {this.setState({name:text})}}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Price</Label>
                                <Input keyboardType={"numeric"} onChangeText={(text) => {this.setState({price:text})}}/>
                            </Item>
                        </Form>
                    </View>
                    <View style={{width:(screenWidth * 0.2), paddingTop:10, paddingLeft:10, flexDirection:"row", alignItems:"center"}}>
                        <SimpleStepper valueChanged={(val) => this.setState({amount:val})} tintColor={"#26CF79"}/>
                        <Text style={{paddingLeft:5}}>x{this.state.amount}</Text>
                    </View>
                    <View style={{paddingTop:10}}>
                        <Button full success onPress={() => this.addNewItem()}>
                            <Text>Add</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default AddItemScene;