import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

export interface Person{
    key:string
    age:number

}

interface CardProps {
    person:Person
}

export const Card: React.FC<CardProps> = ({person}) => {
        return (
            <View style={styles.body}>
                <Text>{person.key}</Text>
                <Text>{person.age}</Text>
            </View>
        )
}
const styles = StyleSheet.create({
    body:{
        width:100,
        padding:20,
        margin:10,
        elevation:5,
        backgroundColor:'#f5f6fa',
        borderRadius:10
    }
})
