import { StyleSheet, View, Text,Pressable } from "react-native";

function GoalItem({itemData, OnDeleteItem}){

    return(
        <Pressable>
            <view style={styles.goalsItem}>
                <text style={styles.goaltext}>{itemData.item}</text>
            </view>
        </Pressable>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalsItem:{
        margin:8,
        padding:8,
        borderRadius:6,
        backgroundColor: "#00576ff",
        color: "white"
    },
    goaltext: {
        backgroundColor: "145414",
        color: "white"
    },
    goalText: {
        color: 'white'
    }
})
