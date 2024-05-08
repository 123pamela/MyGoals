<<<<<<< HEAD
import { StyleSheet, View, Text,Pressable } from "react-native";

function GoalItem({itemdata, OnDeleteItem}){
    console.log('item data: ',itemdata)
    console.log('hola')
    return(
        <Pressable onPress={OnDeleteItem}>
            <view style={styles.goalsItem}>
                <text style={styles.goaltext}>{itemdata.item.text}</text>
=======
import {
    StyleSheet, View, text, Pressble
} from "react-native"
function GoalItem({ItemData, OnDeleteItem}){
    return(
        <Pressble>
            <view style={styles.GoalsItem}>
                <text style={styles.Goaltext}>{itemdata.item}
                </text>
>>>>>>> 120f3c75294b6096d7a4887155e677947ff959c2
            </view>
        </Pressable>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    GoalItem:{
        margin:8,
        padding:8,
        borderRadius:6,
<<<<<<< HEAD
        backgroundColor: "#00576ff",
        color: "white"
    },
    goaltext: {
=======
        backgroundColor: "145414",
        color: "white"
    },
    goalText: {
>>>>>>> 120f3c75294b6096d7a4887155e677947ff959c2
        color: 'white'
    }
})
