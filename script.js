// function to get a random element from an array
function getRandomElement(array) {
    let randomIndex = Math.floor(Math.random()*array.length);
    return array[randomIndex];
}

// message object, that contains the messages in the different languages and a method to log them randomly to the console
const message_generator = {
    latin: ["l1", "l2", "l3"],
    german: ["g1", "g2", "g3"],
    english: ["e1", "e2", "e3"],
    print() {
        console.log(getRandomElement(this.latin));
        console.log("\n")
        console.log(getRandomElement(this.german));
        console.log("\n")
        console.log(getRandomElement(this.english));
    }

};

message_generator.print();