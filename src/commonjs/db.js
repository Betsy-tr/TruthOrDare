import { firestore } from '../../firebase';
import { collection, getDocs , query , where } from 'firebase/firestore'



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
// export const loadDataDareOrTruth = async ( collectionName , id ,type ) =>{

//     console.log('début la fonction')
//     console.log(collectionName , id , type)

//     const rq = doc(firestore , collectionName , id , type)
//     console.log("rq" , rq)
    
//     console.log('apres la requête')
    
//      const snapShot = await getDoc(rq) ;
     

//      return snapShot.exists ? snapShot.data() : null
    
// }

export const loadDataDareOrTruth = async (collectionName , id ,type) => { 

  //console.log('loaddata' , collectionName)

  const rq = query(collection(firestore, collectionName), where("categorie", "==", id) , where("type", "==", type) );
  // console.log("rq" , rq)
  // getDocs(rq).then(data => console.log("data" , data)).catch(error => console.log('error , ' , error))

  const snapShot = await getDocs(rq) ;
  console.log("snapshot" , snapShot)

  if (!(snapShot.empty)) { 

    const dataTemp = snapShot.docs.map(item=>{
      return{ id: item.id , ...item.data() }
    })

    return dataTemp ; 
    
  }else{
      return [] ;
  }


}
