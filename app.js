/*
- Create an object that represents a cat. 
  It should have properties for tiredness, hunger, loneliness, and happiness

- Next, write methods that increase and decrease those properties.
  Call them something that actually represents what would increase or
  decrease these things, like “feed”, “sleep”, or “pet”.

- Last, write a method that prints out the cat’s status in each area.
  (Be creative e.g. Paws is really hungry, Paws is VERY happy.)

- Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
*/

class Cat {
    tiredness = "not tired";
    hunger = "not hungry";
    loneliness = "lonely";
    happiness = "happy";
    name = "";

    feed() {
        this.hunger = "not hungry";
        this.tiredness = "tired"
    }

    sleep(){
        this.tiredness = "well rested"
    }

    pet(name){
        this.name = name;
    }

    getStatus(){
        console.log(`${cat.name} ist ${cat.tiredness}, ${cat.hunger}, ${cat.loneliness} und ${cat.happiness}`);
    }
}

const cat = new Cat();
cat.pet("Oscar");
cat.feed();

