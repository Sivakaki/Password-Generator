class Password {
  constructor() {
    this.characters = "abcdefghijklmnopqrstuvwxyz";
    this.numbers = "1234567890";
    this.special_characters = '!@#$%^&*()_+-=[]{}|;:",.<>/?~`';
    this.captial_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.words = ["Monkey","Banana","Potato","Penguin","Ninja","Dragon","Pickle","Waffle","Taco","Dinosaur","Panda","Pirate","Unicorn","Chicken","Hamster","Zombie","Avocado","Muffin","Burrito","Donut","Robot","Alien","Wizard","Cowboy","Sloth","Koala","Octopus","Cactus","Pumpkin","Cheesecake","Marshmallow","Noodle","Cupcake","Sausage","Walrus","Giraffe","Duck","Llama","Pigeon","Mango"];
    this.pass = "";
  }

  weak_password() {
    this.pass = "";

    for (let i = 0; i < 6; i++) {
      this.pass += this.characters[Math.floor(Math.random() * 26)];
    }

    return this.pass;
  }

  strong_password() {
    this.pass = "";
    this.pass += this.captial_letters[Math.floor(Math.random() * 26)];
    for (let i = 0; i < 6; i++) {
      this.pass += this.characters[Math.floor(Math.random() * 26)];
    }

    this.pass += this.numbers[Math.floor(Math.random() * 10)];
    let n = this.special_characters.length;
    this.pass += this.special_characters[Math.floor(Math.random() * n)];

    this.pass = this.pass
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    return this.pass;
  }

  very_strong_password(){
    this.pass = "";

    const all = this.characters + this.numbers + this.special_characters + this.captial_letters;

    this.pass += this.characters[Math.floor(Math.random() * 26)];
    this.pass += this.captial_letters[Math.floor(Math.random() * 20)];
    this.pass += this.numbers[Math.floor(Math.random() * 10)];
    this.pass += this.special_characters[Math.floor(Math.random() * 30)];

    let n = all.length;
    for(let i =0;i<16;i++){
        this.pass += all[Math.floor(Math.random() * n)];
    }

    this.pass  = this.pass
                .split("")
                .sort(()=>Math.random() - 0.5)
                .join("");

    return this.pass;
  }

  funny_password(){
    this.pass = "";
    this.pass += this.words[Math.floor(Math.random () * this.words.length)];
    this.pass += this.numbers[Math.floor(Math.random() * 10)];
    this.pass += this.numbers[Math.floor(Math.random() * 10)];
    this.pass += this.special_characters[Math.floor(Math.random() * 30)];

    return this.pass;
  }

}


const text = document.getElementById("text-box");
const weak = document.getElementById("weak");
const strong = document.getElementById("strong");
const very = document.getElementById("very");
const funny = document.getElementById("funny");

let pass = new Password();

weak.addEventListener('click',() =>{
    text.value = pass.weak_password();
});
strong.addEventListener("click",() =>{
    text.value = pass.strong_password();
});
very.addEventListener("click",() =>{
    text.value = pass.very_strong_password();
});
funny.addEventListener("click",() =>{
    text.value = pass.funny_password();
});