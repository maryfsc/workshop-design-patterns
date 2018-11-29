import expect from "expect.js";
import Animal from "../../../src/constructor/common/animal.js";

describe("Animal", function () {
  describe("#constructor", function () {
    describe("without parameters", function () {
      let animal = new Animal();

      it("should be instantiate Animal", function () {
        expect(animal.name).to.be("Default Animal");
        expect(animal.specie).to.be("Unspecified");
        expect(animal.family).to.be("Unspecified");
      });
    });

    describe("with parameters", function () {
      let lion = new Animal({name: "Lion", specie: "Mammal", family: "Felidae"});

      it("should be instantiate a Lion", function () {
        expect(lion.name).to.be("Lion");
        expect(lion.specie).to.be("Mammal");
        expect(lion.family).to.be("Felidae");
      });
    });
  });

  describe("#getFullName()", function () {
    let animal = new Animal();

    it("should return full name of animal", function () {
      expect(animal.getFullName()).to.be("Default Animal, Unspecified");
    });
  });
});

describe("#getFamily()", function () {
  let animal = new Animal();

  it("should return family of animal", function () {
    expect(animal.getFamily()).to.be("Unspecified");
  });
});