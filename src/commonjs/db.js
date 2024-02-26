import firestore from '@react-native-firebase/firestore';

export const loadData = async (collectionName) => { 

    const snapShot = await firestore().collection(collectionName).get()

    if(!snapShot.empty){

        const datas = snapShot.docs.map(doc=>{

            return {id:doc.id , ...doc.data()}
        })
        return datas ;

    }else{
        return []
    }

}



/***
 * Cette fonction récupère la liste des actions et des vérités en fonction de l'id de la catégorie
 * params(id <string> : id category)
 * 
***/ 
export const loadDataDareOrTruth = async (id , type ) =>{

    const snapShot = await firestore()
                            .collection("DareOrTruth")
                            .where("categorie" , "==" , id) 
                            .where('type' , "==" , type)
                            .get()

    if(!snapShot.empty){

        const datas = snapShot.docs.map(doc=>{

            return {id:doc.id , ...doc.data()}
        })
        return datas
        
    }else{
        return []
    }

}
