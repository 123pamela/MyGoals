import {
    StyleSheet, View, text, Pressble
} from "react-native"
function goalsItem({itemdata, ondeleteitem}){
    return(
        <Pressble>
            <view style={style.goalItem}>
                <text style={style.goaltext}>{itemdata.item}
                </text>
            </view>
        </Pressble>
    )
}

export default goalsItem

const styles = StyleSheet.create({
    goalItem:{
        margin:8,
        padding:0,
        borderRadius:6,
        backgroundColor: "00576ff",
        color: "white"
    },
})