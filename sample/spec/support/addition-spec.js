var app=require("../Addition.js");

//creating name of our test module
describe("Addition", function(){
    //description for our test using itmethod
    it("the function should add ttwo numbers", function(){
        var value=app.AddNumber(4,5);
        expect(value).toBe(9);
    });
});