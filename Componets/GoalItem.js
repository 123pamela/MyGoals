import {
    StyleSheet, View, text, Pressble
} from "react-native"
function GoalItem({ItemData, OnDeleteItem}){
    return(
        <Pressble>
            <view style={styles.GoalsItem}>
                <text style={styles.Goaltext}>{itemdata.item}
                </text>
            </view>
        </Pressble>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    GoalItem:{
        margin:8,
        padding:8,
        borderRadius:6,
        backgroundColor: "145414",
        color: "white"
    },
    goalText: {
        color: 'white'
    }
})
