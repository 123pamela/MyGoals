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
        <View style={StyleSheet.inputContainer}>
            <TextInput
            style={StyleSheet.TextInputt}
            placeholder="your goal!"
            onChangeText={handleInputGoal}
            value={enteredGoalText}
            />
            <Button
            title="Add Goal"
            color={'#A39997'}
            onPress={addGoalhandler}
            />
        </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        flexDirection: 'pow',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F8FF6E'
    },
    textInput:{
        borderWidth: 1,
        borderColor: '#F8FF6E',
        width: '80%',
        marginRight: ''
    }
})