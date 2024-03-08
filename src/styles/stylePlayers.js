import { StyleSheet  } from "react-native"; 


export default StyleSheet.create({
    container:{
        flex:1
    },
    title:{
        fontFamily: 'Fredericka the Great',
        color: 'white',
        fontSize : 48,
        fontWeight: '400',
        marginTop: 22,
        marginLeft: 15,
        marginBottom: 25
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
        marginBottom: 35,
    },
    empty:{
        fontFamily: 'Handlee',
        fontSize: 19,
        color: 'white',
        textAlign: 'center',
        margin: 7
    },
    namePlayer:{
        color: 'white',
        fontSize: 22,
        marginTop: 10,
        marginLeft: 35,
        fontFamily: "Handlee"
    },
    buttonResetPlayer:{
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        width: 160,
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 6,
        marginBottom: 45,
    },
    buttonStartGame:{
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        width: 160,
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 6,
        marginBottom: 45,
    },
    
     
})
