 // Get the file element
 var fileInput = document.querySelector('#image-file');
    
 // Select file from the input
 var file = fileInput.files[0];
 console.log(file);        
 
 // onload function 1st
 // Create a new File Reader
 let fileReader = new FileReader();  
 
 // Set the 'onload' callback.
 fileReader.onload = function (event) {
     processedFile = event.target.result;

 
     $("#userPhoto").html("<img id='Picture'>");
     $("#Picture").attr({
         'src': processedFile,
         'width':'100%'});
     
 };

 // Read the file, which triggers the callback after the file is compete.
 fileReader.readAsDataURL(file); 
 
 document.getElementById("userInfo").reset();

 // ----------------------------------
 // reference
 var storageRef = firebase.storage().ref(file.name);
 // upload
 var task = storageRef.put(file);

 setTimeout(function() {
 
 // url function 2nd
 storageRef.getDownloadURL().then(function(url) {
     var imageURL = url;

     // Analyzation of photos 
     $("#pastResults").empty();
     
     console.log(imageURL); 
     // Grabbing the image from the page 
     var queryURL = "https://api-us.faceplusplus.com/facepp/v3/detect?api_key=lz8ktVyjNIS7RKDBmUNPB-eZJmYEuMyv&api_secret=Y-mLOWm_EKKpc-JoB3FOEBC8Oi69V73q&image_url="+ imageURL +"&return_attributes=beauty,emotion";
     
     
     $.ajax({
         url: queryURL,
         method: "POST",       
     }).then(function(response) {
         
         console.log(response);
         // Loops through faces object, listing the most confident emotion.
     

             var greatestEmotionVal = 0;
             var greatestEmotion = "";                    
             var emotions = response.faces[0].attributes.emotion;            

             for (emotion in emotions) {              
                 if (emotions[emotion] > greatestEmotionVal) {
                     var greatestEmotionVal = emotions[emotion]; 
                     var greatestEmotion = emotion;
                 }                              
             }
             console.log(greatestEmotionVal);
             console.log(greatestEmotion);
             
             
             $("#pastResults").append(
                 $("<p>").text("The average user is "+greatestEmotionVal+"% sure you display "+greatestEmotion+"."),                    
             );


         // Grabs appraisal of beauty from both male and female perspectives                    
         var beautyRatingM = response.faces[0].attributes.beauty.male_score;
         var beautyRatingF = response.faces[0].attributes.beauty.female_score;
         console.log("From a male perspective: " + beautyRatingM);
         console.log("From a female perspective: " + beautyRatingF);

         $("#pastResults").append(
             $("<p>").text("The average man thinks you are more attractive than "+beautyRatingM+"% of the population."),
             $("<p>").text("The average woman thinks you are more attractive than "+beautyRatingF+"% of the population."),
         );  
         
         // Put into firebase storage.
         database.ref(`${displayName}/userPictures`).push({
         UserPicture: processedFile,
         UserName: userName,
         JobSeeking: lookingSelect1,
         UserComments: userCommentsText,
         GreatestEmotion: greatestEmotion,
         GreatestEmotionVal: greatestEmotionVal,
         BeautyRatingM: beautyRatingM,
         BeautyRatingF: beautyRatingF,
         dateAdded: firebase.database.ServerValue.TIMESTAMP       
     });
     });
 });  
 // monitoring
 console.log("delayed");
 },2000);
});