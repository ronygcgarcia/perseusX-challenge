import IPerson from "../interfaces/IPerson";
import serialize from "./serializeRecords";

const getActiveRecords = (arr: IPerson[]) => {
    const actives = arr.filter((obj) => obj.Status === 'Active');

    // Validating if there are active records
    if(!actives.length) return 'There are not active records'

    return serialize(actives);
}

export default getActiveRecords;