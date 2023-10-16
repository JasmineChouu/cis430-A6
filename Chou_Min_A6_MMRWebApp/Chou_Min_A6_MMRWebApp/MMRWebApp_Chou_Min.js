/**
 * MMRWebApp_Chou_Min.js
 */
 
"use strict";

var startingAge             = 0;
var retirementAge           = 0;
var startingSalary          = 0;
var annualSavingsPercent    = 0;
var annualRaisePercent      = 0;
var interestRatePercent     = 0;

var totalYearsToInvest      = 0;  
var totalRetirementFund     = 0;
var totalLifetimeSalary     = 0;
var totalSaved              = 0;
var totalEarnedInterst      = 0;

var currentAge              = 0;
var currentSalary           = 0;
var currentSavings          = 0;
var currentInterest         = 0;
var currentRetirement       = 0;

var summaryTable;
var detailTable;


function initialize() {
	// alert("In initialize(): Web App Loaded!");
	detailTable=document.getElementById('detailTableId');

	console.log(detailTable);
}

function clearInputs(form) {
	// alert("function clearInputs() is running");
	var formElements = form.elements;
	for (var i=0; i< formElements.length; i++)
		formElements[i].value="";
}

function loadDefaults(form) {
	// alert("function loadDefaults() is running");
	form.reset();
}

function getNumValue(id) {
	return Number(document.getElementById(id).value);
}

function runMakemerich(form) {
	if (!form.checkValidity()) {
		alert("See highlighted input boxes, there are input errors");
	} else {
		startingAge              = getNumValue('startingAgeId');
		retirementAge 	         = getNumValue('retirementAgeId');
		startingSalary           = getNumValue('startingSalaryId');
		annualSavingsPercent 	 = getNumValue('annualSavingsId');
		annualRaisePercent 		 = getNumValue('annualRaiseId');
        interestRatePercent      = getNumValue('interestRateId');

		// fill in values
		
		console.log("startingAge   :", startingAge);
		console.log("retirementAge    :",retirementAge);
		console.log("startingSalary     :", startingSalary);
		console.log("annualSavingsPercent       :", annualSavingsPercent);
		console.log("annualRaisePercent       :", annualRaisePercent);
        console.log("interestRatePercent       :", interestRatePercent);

		console.log("");

		/* Retirement calculations */

		var Age 			= 0;
		var Salary		    = 0;
		var Savings 		= 0;
		var Interest 	    = 0;
        var Retirement      = 0;

		clearResultsTable(detailTable);

        console.log("Age  Salary  Savings  Interest  Retirement")

        for (let year = startingAge; year <= retirementAge; year++) {
        currentSalary = startingSalary * Math.pow(1 + annualRaisePercent, year - startingAge);
        currentSavings = currentSalary * annualSavingsPercent;
        
        currentInterest = (currentRetirement + currentSavings) * interestRatePercent;
        
        currentRetirement += currentSavings + currentInterest;

        totalRetirementFund += currentRetirement;
        totalLifetimeSalary += currentSalary;
        totalSaved += currentSavings;
        totalEarnedInterest += currentInterest;

        console.log(year, currentSalary, currentSavings);
    }

    // // write debugging info to the console
    // console.log(
    //     leftPadString(i.toString(), ' ', 2)
    //     + leftPadString(formatNumberWithCommas(invest),  ' ', 8)
    //     + leftPadString(formatNumberWithCommas(interest),' ',10)
    //     + leftPadString(formatNumberWithCommas(balance), ' ',11)
    // );

		
			// modify the DOM and add rows to Results table
			var row = summaryTable.insertRow(tableRowNumber);
			var cell0 = row.insertCell(0);
			var cell1 = row.insertCell(1);
			var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);

			cell0.innerHTML = formatNumberWithCommas(Age);
			cell1.innerHTML = formatNumberWithCommas(Salary);
			cell2.innerHTML = formatNumberWithCommas(Savings);
            cell3.innerHTML = formatNumberWithCommas(Interest);
            cell4.innerHTML = formatNumberWithCommas(Retirement);

			tableRowNumber++;
		} // end of for loop


	} 
 // end of runComparison()


/*  function clearResultsTable(table)
 *  given a table, remove all rows except the heading
 *  table.rows returns a list of the rows.
 *  table.rows.length returns the number of rows
 *  If a table has 9 rows, row(0) is the header, row(8) is last
 *  deleteRow(index) from the last to all but the (0)
 */
function clearResultsTable(table) {

	for (var i = table.rows.length; i > 1; i--) {
		table.deleteRow(i-1);
	}
}