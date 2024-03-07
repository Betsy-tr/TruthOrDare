import { firestore } from '../../firebase'
import { collection, doc , getDoc, getDocs , query } from 'firebase/firestore'


export const loadData = async (collectionName) => { 

    //console.log('loaddata' , collectionName)

    const rq = query(collection(firestore, collectionName));
    // console.log("rq" , rq)
    // getDocs(rq).then(data => console.log("data" , data)).catch(error => console.log('error , ' , error))

    const snapShot = await getDocs(rq) ;
    // console.log("snapshot" , snapShot)

    if (!(snapShot.empty)) { 

      const dataTemp = snapShot.docs.map(item=>{
        return{ id: item.id , ...item.data() }
      })

      return dataTemp ; 
      
    }else{
        return [] ;
    }


}



/***
 * Cette fonction récupère la liste des actions et des vérités en fonction de l'id de la catégorie
 * params(id <string> : id category)
 * 
***/ 
export const loadDataDareOrTruth = async ( collectionName , id ,type ) =>{

    console.log('dans la fonction')

    const rq = doc(firestore , collectionName , id , type)
    console.log('apres la requête')
    
     const snapShot = await getDoc(rq) ;
     

     return snapShot.exists ? snapShot.data() : null
    
}
