# Optometrist CRM

This is a Google Apps Script project for managing billing records in a Google Sheets spreadsheet.

## Description

This project consists of two main script files:

- `code.gs`: Contains functions for saving, creating, searching, and deleting billing records in the spreadsheet.
- `onedit.gs`: Contains a function triggered when editing the search cell (J3) to automatically search for records.

## How to Use

1. **Setup Google Sheets**: 
   - Create a new Google Sheets document.
   - Rename the sheets as follows:
     - "Billing" for the billing form.
     - "Settings" for managing application settings.
     - "Data" for storing billing records.

2. **Copy Code**:
   - Copy the content of `code.gs` and `onedit.gs` into your Google Apps Script editor.

3. **Setup Triggers**:
   - In the Apps Script editor, go to "Triggers" and set up triggers for the following functions:
     - `onEdit`: Triggered when editing cell J3 in the "Billing" sheet.

4. **Usage**:
   - Use the functions provided in the script to manage billing records:
     - `saveRecord()`: Saves or updates a billing record.
     - `createNewRecord()`: Creates a new billing record.
     - `clearRecord()`: Clears the form fields.
     - `search()`: Searches for a billing record based on the search value in cell J3.
     - `deleteRecord()`: Deletes a billing record.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
