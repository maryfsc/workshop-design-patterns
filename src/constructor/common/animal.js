const defaultOptions = {
  name: 'Default Animal',
  specie: 'Unspecified',
  family: 'Unspecified'
}

const Animal = function(options = defaultOptions) {
  this.name = options.name;
  this.specie = options.specie;
  this.family = options.family;

  this.getFullName = () => `${this.name}, ${this.specie}`;
  this.getFamily = () => `${this.family}`;
}

export default Animal;