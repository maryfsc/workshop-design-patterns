const defaultOptions = {
  name: "Default Name",
  age: 18
}

const FootballPlayer = function(options = defaultOptions) {
  let modality = "Football";
  const minimalAge = 18;
  const hasMinimalAge = function(age) {
    return age >= minimalAge;
  }
  
  return {
    name: options.name,
    age: options.age,
    getModality: () => modality,
    setModality(newModality) {
      modality = newModality;
      return modality;
    },
    setAge(newAge) {
      if (!hasMinimalAge(newAge)) {
        return null;
      }
      this.age = newAge;
      return this.age;
    } 
  }
}

export default FootballPlayer;