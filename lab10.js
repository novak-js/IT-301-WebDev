        let bill_amount = Number(prompt("Enter restaurant bill total in USD (don't use any separators): "));
        do {
            if (bill_amount == 0) {
            bill_amount = Number(prompt("Value cannot be zero. Enter restaurant bill total (do not use ,): "));
        } else if (bill_amount < 0) {
            bill_amount = Number(prompt("Value cannot be negative. Enter restaurant bill total (do not use ,): "));
        } else if (isNaN(bill_amount) == true) {
            bill_amount = Number(prompt("Value must be a number. Enter restaurant bill total (do not use ,): "));
        } else {
                break;
        }
        } while (true);

        let tip = bill_amount * 0.10;
        console.log(`With a bill of $${bill_amount}, your should tip $${tip}. `);
        document.write(`With a bill of $${bill_amount}, your should tip $${tip}. `);
