console.log("Don't waver. Continue. Continue. Continue.");

let diffToy1 = {
  name: "red ball",
  bouncy: true,
  squeaky: true,
  furry: false,
};
let diffToy2 = {
  name: "mouse",
  bouncy: false,
  squeaky: true,
  furry: true,
};

let diffToy3 = {
  name: "bone",
  bouncy: false,
  squeaky: true,
  furry: false,
};

let diffToy4 = {
  name: "kitty",
  bouncy: false,
  squeaky: true,
  furry: true,
};

const myPet = {
  name: "Nala",
  species: "dog",
  nicknames: ["baby", "queen nala jean", "NALA"],
  age: 9,
  bark: function () {
    return window.alert("RRRRRRuf");
  },
  wag: function () {
    return window.alert("wag wag wag wag wag wag");
  },
  whine: function () {
    return window.alert("please pet me, PLEEEEASE");
  },
  favoriteToys: [],
  play: function (toy) {
    let diffToy = toy;
    if (diffToy.furry === true && diffToy.squeaky === true) {
      return this.favoriteToys.push(diffToy);
    } else {
      return `${this.name} does not like this ${diffToy.name}.`;
    }
  },
};

myPet.play(diffToy1);
myPet.play(diffToy2);
myPet.play(diffToy3);
myPet.play(diffToy4);
