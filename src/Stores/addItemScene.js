import React, { Component } from 'react';
import {
    Container,
    Content,
    View,
    Text,
    Button,
    Form,
    Item,
    Input
} from "native-base"

class AddItemScene extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <View>
                        <Text>Form goes here</Text>
                    </View>
                    <View>
                        <Form>
                            <Item>
                                <Input placeholder={"Item name"} />
                            </Item>
                            <Item>
                                <Input placeholder={"Item price"} />
                            </Item>
                            <Item>
                                <Input placeholder={"Item quantity"} />
                            </Item>
                        </Form>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default AddItemScene;