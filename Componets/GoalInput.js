import { useState } from "react";
import { View, TextInput,Button, StyleSheet } from "react-native";

function goalInput({onAddGoal}) {
    const [ enteredGoalText, setEnteredGoalText]= useState('')

    function handleInputGoal(enteredGoalText) {
        console.log(enteredText)
        setEnteredGoalText(enteredText)
    }
    function addGoalhandler() {
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
        console.log('addGoalHandler')
    }
    return(
        <View style={Styles.inputContainer}>
            <TextInput
            style={StyleSheet.TextInput}
            placeholder="your goal!"
            onChangeText={handleInputGoal}
            value={enteredGoalText}/>
        </View>
    )
}

export default goalInput
