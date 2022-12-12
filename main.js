function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bCpFxNbdU/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error,results) {
    if (error) {
        console.error(error);
    } else{
        console.log(results);
        
        document.getElementById("result_label").innerHTML = 'i Can Hear You - '+
        results[0].label;

        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";
        
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById("dog")
        img1 = document.getElementById("cat")
        img2 = document.getElementById("cow")
        img3 = document.getElementById("lion")
        img4 = document.getElementById("bg")
        
        if (results[0].label=="Barking") {

            img.src = barking.png;
            img1.src = b.png;
            img2.src = b.png;
            img3.src = b.png;
            img4.src = b.png;

        } else if (results[0].label=="Meowing") {

            img.src = b.png;
            img1.src = meowing.jpg;
            img2.src = b.png;
            img3.src = b.png;
            img4.src = b.png;

            
        } else if (results[0].label=="Mooing") {

            img.src = b.png;
            img1.src = b.png;
            img2.src = mooing.png;
            img3.src = b.png;
            img4.src = b.png;
            
        } else if (results[0].label=="Roaring") {

            img.src = b.png;
            img1.src = b.png;
            img2.src = b.png;
            img3.src = roaring.jpg;
            img4.src = b.png;
            
        } else{

            img.src = b.png;
            img1.src = b.png;
            img2.src = b.png;
            img3.src = b.png;
            img4.src = bg.png;

        }


    }
}