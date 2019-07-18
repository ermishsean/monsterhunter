export class Monster {

    id: number;
    name: string;
    type: string;
    species: string;
    description: string;
    elements: Array<string>;
    ailments: Array<string>;
    locations: Array<string>;
    resistances: Array<string>;
    weakness: Array<string>;
    rewards: Array<string>;

    constructor(id: number, name: string, type: string, species: string, description: string, elements: Array<string>, ailments: Array<string>,
        locations: Array<string>, resistances: Array<string>, weakness: Array<string>, rewards: Array<string>) {

        this.id = id;
        this.name = name;
        this.type = type;
        this.species = species;
        this.description = description;
        this.elements = elements;
        this.ailments = ailments;
        this.locations = locations;
        this.resistances = resistances;
        this.weakness = weakness;
        this.rewards = rewards;

    }

}