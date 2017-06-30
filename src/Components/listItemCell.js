import React, { Component } from 'react';
import { View, Text } from "native-base";

class ListItemCell extends Component {
    render() {
        return (
            <View style={{
            height:75,
            marginLeft:10,
            marginRight:10,
            backgroundColor:"gray",
            marginTop:4,
            shadowColor:"black",
            shadowOpacity:0.3,
            shadowRadius: 2,
            shadowOffset: {width: 0, height: 2}
            }}>
                <View style={{
                flexDirection:"row",
                flex:1,
                justifyContent:"space-between"}}>
                    <Text style={{paddingTop: 10, paddingLeft: 10}}>{this.props.item.name}</Text>
                    <Text style={{paddingTop: 10, paddingRight: 10}}>{this.props.item.price}</Text>
                </View>

                <View>
                    <Text style={{paddingBottom: 10, paddingLeft: 10}}>{this.props.item.amount}</Text>
                </View>
            </View>
        );
    }
}

export default ListItemCell;