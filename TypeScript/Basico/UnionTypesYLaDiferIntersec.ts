class Persona {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }
}

interface PersonaInterface {
  name: string;
  getName(): string;
  setName(name: string): void;
}

// Creacion de feature para controlar la forma de lo que enviamos
const persona = {
  name: "Robert",
  getName() {
    return this.name;
  },
  setName(name: string) {
    this.name = name;
  },
};

const sendData = (persona: PersonaInterface) => {
  console.log(persona.getName());
}

sendData(persona);

// Un ejemplo problematico

const arregloDeValores = [
  {
    numero: 1,
    label: 'Valor 1',
  },
  {
    numero: 2,
  }
];

const metodo = (param: typeof arregloDeValores) => {
  const indexArray = [1, 2];

  indexArray.forEach((index: number): void => {
    const value = param[index];

    if (value.label) {
      console.log(value.label);
    }
  });
};

// 