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

export const loadDataDareOrTruth = async (collectionName , id ,type) => { 

  //console.log('loaddata' , collectionName)

  const rq = query(collection(firestore, collectionName), where("categorie", "==", id) , where("type", "==", type) );

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

/*** export const loadDataDareOrTruthTod = async (id, type, tod) => {
    
  console.log('tod', tod)

  // console.log('loaddata', id)

  const snapShot = await firestore()
      .collection("DareOrTruth")
      .where("categorie","==",id)
      .where('type', "==", type)
      .where(firestore.FieldPath.documentId(), 'not-in', tod )
      .get()

  //vérifier l'exsistence de la donné
  if (!snapShot.empty) {

      const datas = snapShot.docs.map(doc => {
          return {id:doc.id, ...doc.data() }
      })

      return datas
  } else {
      return []
  }
} **/