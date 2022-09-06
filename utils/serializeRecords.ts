import IPerson from "../interfaces/IPerson";

const serialize = (arr: IPerson[]) => {
    return arr.map((person) => ({
        Name: person.Name,
        'Favorite movie': person["Favorite Movie"],
        Date: person.Date
    }));
}

export default serialize;