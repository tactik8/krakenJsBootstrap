export function krakenTable(data, keys, headers, config) {
    return baseTable(data, keys, headers);
}

function baseTable(data, keys, headers) {
    // Ensure array
    data = ensureArray(data);

    let content = ` <table class="table">
                        ${getTableHeader(data, keys, headers)}
                        ${getTableBody(data, keys)}
                    </table>`;

    return content;
}

function getTableHeader(data, keys, headers) {
    /**
     * Returns the header section of the table
     */
    // Error handling

    if (!keys || keys == null) {
        keys = Object.keys(data[0]);
    }

    if (!headers || headers == null) {
        headers = keys;
    }

    // Get Headers Section
    let tableHeaders = "";
    for (let key of headers) {
        tableHeaders = tableHeaders + `<th scope="col">${key}</th>`;
    }
    tableHeaders = `<thead><tr> ${tableHeaders}  </tr></thead>`;

    return tableHeaders;
}

function getTableBody(data, keys) {
    /**
     * Returns the body section of the table
     */

    if (!keys || keys == null) {
        keys = Object.keys(data[0]);
    }

    var rows = [];
    for (let row of data) {
        rows.push(getTableRow(row, keys));
    }

    let content = `${rows.join("")}`;

    return content;
}

function getTableRow(data, keys) {
    /**
     * Returns table row
     */

    var cells = [];

    for (let key of keys) {
        cells.push(`<td scope="col">${getValue(data[key])}</td>`);
    }

    let content = `<tr> ${cells.join("")} </tr>`;

    return content;
}

function getValue(data, keys) {
    /**
     *
     */

    let value = data;

    // Handle null value
    if (!value || value == null) {
        value = "";
    }

    // Handle date
    if (value && typeof value === "object" && value instanceof Date) {
        value = value.toLocaleDateString();
    }

    // Handle single record
    if (
        value &&
        typeof value === "object" &&
        !Array.isArray(value) &&
        Object.keys(value) &&
        Object.keys(value).length > 0
    ) {
        value = `<details><summary> ${value?.name || value?.id || ""}</summary>${getRecordCard(value)}</details>`;
    }

    // Handle arrays
    if (
        value &&
        typeof value === "object" &&
        Array.isArray(value) &&
        value.length > 0
    ) {
        value = `<details><summary> ${value[0]?.name || value[0]?.id} (${value.length})</summary>${baseTable(value)}</details>`;
    }

    // Handle arrays
    if (value && typeof value === "object") {
        value = JSON.stringify(value);
        console.log("v", value);
    }

    return value;
}

function getRecordCard(record) {
    let line;
    let lines = [];
    let value;

    for (let k in record) {
        value = record[k];

        if (
            value &&
            typeof value === "object" &&
            !Array.isArray(value) &&
            Object.keys(value) &&
            Object.keys(value).length > 0
        ) {
            value = `<details><summary> ${value?.name || value?.id || '(more)' }</summary>${getRecordCard(value)}</details>`;
        } else if (
            value &&
            typeof value === "object" &&
            Array.isArray(value) &&
            value.length > 0
        ) {
            value = `<details><summary> ${value[0]?.name || value[0]?.id} (${value.length})</summary>${baseTable(value)}</details>`;
        }


        line = `<dt class="col-sm-3">${k}</dt>
                <dd class="col-sm-9">${value}</dd>`;
        lines.push(line);

    }

    let content = `<dl class="row"> ${lines.join("")}   </dl>`;

    return content;
}

function getDataFromApi(url, limit, offset) {}

function ensureArray(value) {
    if (!value || value == null || value == [null]) {
        return [];
    }
    if (Array.isArray(value)) {
        return value;
    } else {
        return [value];
    }
}
