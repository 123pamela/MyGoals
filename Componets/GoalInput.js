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
<<<<<<< HEAD
            style={StyleSheet.TextInputt}
=======
            style={Styles.textInput}
>>>>>>> 120f3c75294b6096d7a4887155e677947ff959c2
            placeholder="your goal!"
            onChangeText={handleInputGoal}
            value={enteredGoalText}
            />
            <Button
<<<<<<< HEAD
            title="Add Goal"
            color={'#A39997'}
            onPress={addGoalhandler}
=======
            title="add goal"
            color={'#A3FFD6'}
            onPress={addGoalHandler}
>>>>>>> 120f3c75294b6096d7a4887155e677947ff959c2
            />
        </View>
    )
}

export default GoalInput
<<<<<<< HEAD

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
=======
>>>>>>> 120f3c75294b6096d7a4887155e677947ff959c2
