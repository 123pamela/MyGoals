import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput({onAddGoal}) {
    const [ enteredGoalText, setEnteredGoalText]= useState('')

    function handleInputGoal(enteredText) {
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
            style={Styles.textInput}
            placeholder="your goal!"
            onChangeText={handleInputGoal}
            value={enteredGoalText}
            />
            <Button
            title="add goal"
            color={'#A3FFD6'}
            onPress={addGoalHandler}
            />
        </View>
    )
}

export default GoalInput
