import React from "react";
import app from "./initFirebase";
import * as firebase from 'firebase'

const Home = () => {

  var user = firebase.auth().currentUser;
  if (user != null) {
    user.providerData.forEach(function (profile) {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });

    user.updateProfile({
      displayName: "Jane Q. User",
      photoURL: "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  function test() {
    user.updateProfile({
      displayName: "Jane Q. User",
      photoURL: "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  

  return (
    <>
      <h1>This is Home Page</h1>
      <h2>You've successfully logged in </h2>
      <h3>Hi, {user.displayName}</h3>
      <img src={user.photoURL} alt="avatar" />
      <button onClick={() => app.auth().signOut()}>Sign out</button>
   
      <div className="user-info">
        <h2>Info Form</h2>
        <form action="#" className="measurments">
          <input type="text" placeholder="name" id="info__name" />
          <button onClick={() => test()}>Send Info</button>
        </form>
      </div>
      
      <div className="user-measurments">
        <h2>Measurments Form</h2>
        <form action="#" className="measurments">
          <input type="text" placeholder="wheight" id="measurments__wheight" />
          <input type="text" placeholder="chest" id="measurments__chest" />
          <input type="text" placeholder="waist" id="measurments__waist" />
          <input type="text" placeholder="hip" id="measurments__hip" />
          <button onClick={() => test()}>Send Measurments</button>
        </form>
      </div>
  
   
    </>
  );
};

export default Home;
