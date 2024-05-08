import { StyleSheet, View, Text,Pressable } from "react-native";

function GoalItem({itemdata, OnDeleteItem}){
    console.log('item data: ',itemdata)
    console.log('hola')
    return(
        <Pressable onPress={OnDeleteItem}>
            <view style={styles.goalsItem}>
                <text style={styles.goaltext}>{itemdata.item.text}</text>
            </view>
        </Pressable>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem:{
        margin:8,
        padding:8,
        borderRadius:6,
        backgroundColor: "#00576ff",
        color: "white"
    },
    goaltext: {
        color: 'white'
    }
})
