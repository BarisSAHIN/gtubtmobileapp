import * as firebase from 'firebase';

//Bu kısım hangi firebase e baglanacagini belirten kisim 
const firebaseConfig ={
		apiKey: "AIzaSyAG8qRPzFexC2iWfFymV8AOGgQoA7oO6p4",
		authDomain: "gtubt-deneme.firebaseapp.com",
		databaseURL: "https://gtubt-deneme.firebaseio.com",
		projectId: "gtubt-deneme",
		storageBucket: "gtubt-deneme.appspot.com"
	  
}

//baglandigi kisim
firebase.initializeApp(firebaseConfig);
export default class DatabaseWrapper{

	//verilen key ile bir node acip degerini verilen value ya eşitliyor	
	writeThis(key,value){
		//main nod un referansini aliyor(en bastaki nodu referans aliyor herzaman bir sonraki update de düzeltilecek)
		var firebaseRef = firebase.database().ref();
		
		//main nod un altina verilen key degeri ile bir child acip ona verilen value u atiyor
		firebaseRef.child(key).set(value);
		return key;
		
		/*simdilik eksiklikleri:
		
		istenilen noda ulasamiyor
		eger database de olan bir key girilirse replace yapiyor
		key elle girilmek zorunda random key generate edilmiyor
		
		*/
		
	}
  
}