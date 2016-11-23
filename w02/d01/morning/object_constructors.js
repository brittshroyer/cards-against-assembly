// Define our Object
function Person(myGender,height,greet){
  
  this.gender = myGender;
  this.height = height;
  
  this.greet = function(){
    // if greet exists
    if(greet){
      console.log(greet);
    } else {
      console.log("hello");
    }
  };
  
  this.exercise = function(){
    this.greet();
    console.log("hard exhale wooooooffff");
  };

};

var angela = new Person("female",6.0,"hey there i'm angela");
angela.exercise();
