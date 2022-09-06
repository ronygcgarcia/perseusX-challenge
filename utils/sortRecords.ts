import IPerson from "../interfaces/IPerson";

const sortedRecords = (arr: IPerson[], key: keyof IPerson) => {
    return arr.sort((a, b) => {
        const aKey = a[key] as string;
        const bKey = b[key] as string;
        // if return -1 a is before b, if return 1 b is before a
        return aKey < bKey ? -1 : 1})
}

export default sortedRecords;