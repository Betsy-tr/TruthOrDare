import { StyleSheet  } from "react-native"; 


export default StyleSheet.create({
    container:{
        flex:1
    },
    title:{
        fontFamily: 'Fredericka the Great',
        color: 'white',
        fontSize : 40,
        fontWeight: '400',
        marginTop: 22,
        marginLeft: 15,
        marginBottom: 20
    },
    input:{
        backgroundColor: 'transparent',
        borderRadius: 15,
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        width: 305,
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10
    },
    empty:{
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    namePlayer:{
        color: 'white',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 35
    },
    buttonResetPlayer:{
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        width: 205,
        height: 55,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 5,
        marginBottom: 45,
    },
    buttonStartGame:{
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        width: 205,
        height: 55,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 5,
        marginBottom: 45,
    },
    
     
})
