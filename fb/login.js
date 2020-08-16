checkLogin(username, password){
    // on() method
    firebase.database().ref('data').on('value',(snap)=>{
        console.log(snap.val());
    });
  // once() method
  firebase.database().ref('data').on('value',(snap)=>{
    console.log(snap.val());
  });
}