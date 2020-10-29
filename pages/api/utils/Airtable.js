
const Airtable = require('airtable');
const base = new Airtable({ apiKey: 'keySGVcoz6xHOv0uz' }).base(process.env.AIRTABLE_BASE_ID);

const table = base('todo');

const minifyRecords = (records) => {
    return records.map(record => getMinifiedRecord(record));
}

const getMinifiedRecord = (record) => {
    if (!record.fields.completed) {
        record.fields.completed = false;
    }
    return {
        id: record.id,
        fields: record.fields
    }
}

export { table, getMinifiedRecord, minifyRecords };