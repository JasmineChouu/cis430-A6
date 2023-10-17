/**
 * MMRWebApp_Chou_Min.js
 */

 "use strict";

 var startingAge = 0;
 var retirementAge = 0;
 var startingSalary = 0;
 var annualSavingsPercent = 0;
 var annualRaisePercent = 0;
 var interestRatePercent = 0;
 
 var totalYearsToInvest = 0;
 var totalRetirementFund = 0;
 var totalLifetimeSalary = 0;
 var totalSaved = 0;
 var totalEarnedInterest = 0;
 
 var currentAge = 0;
 var currentSalary = 0;
 var currentSavings = 0;
 var currentInterest = 0;
 var currentRetirement = 0;
 
 var summaryTable;
 var detailTable;
 
 
 function initialize() {
	 // alert("In initialize(): Web App Loaded!");
	 detailTable = document.getElementById('detailTableId');
 
	 console.log(detailTable);
	 summaryTable = document.getElementById('summaryTableId');
 
 }
 function reset_var() {
	 totalYearsToInvest = 0;
	 totalRetirementFund = 0;
	 totalLifetimeSalary = 0;
	 totalSaved = 0;
	 totalEarnedInterest = 0;
 
	 currentAge = 0;
	 currentSalary = 0;
	 currentSavings = 0;
	 currentInterest = 0;
	 currentRetirement = 0;
 }
 function clearInputs(form) {
	 // alert("function clearInputs() is running");
	 var formElements = form.elements;
	 for (var i = 0; i < formElements.length; i++)
		 formElements[i].value = "";
		 clearResultsTable(detailTable);
		 clearSummaryTable(summaryTable);	
 }
 
 function loadDefaults(form) {
	 // alert("function loadDefaults() is running");
	 form.reset();
	 clearResultsTable(detailTable);
	 clearSummaryTable(summaryTable);
 }
 
 function getNumValue(id) {
	 return Number(document.getElementById(id).value);
 }
 
 function runMakemerich(form) {
	 reset_var();
	 if (!form.checkValidity()) {
		 alert("See highlighted input boxes, there are input errors");
	 } else {
		 startingAge = getNumValue('startingAgeId');
		 retirementAge = getNumValue('retirementAgeId');
		 startingSalary = getNumValue('startingSalaryId');
		 annualSavingsPercent = getNumValue('annualSavingsId');
		 annualRaisePercent = getNumValue('annualRaiseId');
		 interestRatePercent = getNumValue('interestRateId');
 
		 // fill in values
 
		 console.log("startingAge   :", startingAge);
		 console.log("retirementAge    :", retirementAge);
		 console.log("startingSalary     :", startingSalary);
		 console.log("annualSavingsPercent       :", annualSavingsPercent);
		 console.log("annualRaisePercent       :", annualRaisePercent);
		 console.log("interestRatePercent       :", interestRatePercent);
 
		 console.log("");
 
		 /* Retirement calculations */
 
		 var Age = 0;
		 var Salary = 0;
		 var Savings = 0;
		 var Interest = 0;
		 var Retirement = 0;
 
		 clearResultsTable(detailTable);
		 clearSummaryTable(summaryTable);
 
		 console.log("Age  Salary  Savings  Interest  Retirement")
		 let tableRowNumber = 0;
		 for (let year = startingAge; year <= retirementAge; year++) {
			 currentSalary = startingSalary * Math.pow(1 + annualRaisePercent / 100, year - startingAge);
			 currentSavings = currentSalary * annualSavingsPercent / 100;
 
			 currentInterest = (currentRetirement + currentSavings) * interestRatePercent / 100;
 
			 currentRetirement += currentSavings + currentInterest;
 
			 // totalRetirementFund += currentRetirement;
			 totalLifetimeSalary += currentSalary;
			 totalSaved += currentSavings;
			 totalEarnedInterest += currentInterest;
 
			 console.log(year, currentSalary, currentSavings);
 
			 // modify the DOM and add rows to Results table
			 // var row = summaryTable.insertRow(tableRowNumber);
			 var row = detailTable.insertRow(-1);
			 var cell0 = row.insertCell(0);
			 var cell1 = row.insertCell(1);
			 var cell2 = row.insertCell(2);
			 var cell3 = row.insertCell(3);
			 var cell4 = row.insertCell(4);
 
			 cell0.innerHTML = formatNumberWithCommas(year);
			 cell1.innerHTML = formatNumberWithCommas(currentSalary);
			 cell2.innerHTML = formatNumberWithCommas(currentSavings);
			 cell3.innerHTML = formatNumberWithCommas(currentInterest);
			 cell4.innerHTML = formatNumberWithCommas(currentRetirement);
 
			 tableRowNumber++;
		 }
		 var row = summaryTable.insertRow(-1);
		 var cell0;
		 cell0 = row.insertCell(-1);
		 totalYearsToInvest = retirementAge - startingAge + 1;
		 cell0.innerHTML = formatNumberWithCommas(totalYearsToInvest);
		 cell0 = row.insertCell(-1);
		 cell0.innerHTML = 'Years to Invest';
 
		 row = summaryTable.insertRow(-1);
		 cell0 = row.insertCell(-1);
		 totalYearsToInvest = retirementAge - startingAge + 1;
		 cell0.innerHTML = formatNumberWithCommas(currentRetirement);
		 cell0 = row.insertCell(-1);
		 cell0.innerHTML = 'Retirement Fund';
 
		 row = summaryTable.insertRow(-1);
		 cell0 = row.insertCell(-1);
		 totalYearsToInvest = retirementAge - startingAge + 1;
		 cell0.innerHTML = formatNumberWithCommas(totalLifetimeSalary);
		 cell0 = row.insertCell(-1);
		 cell0.innerHTML = 'Lifetime Salary';
 
		 row = summaryTable.insertRow(-1);
		 cell0 = row.insertCell(-1);
		 totalYearsToInvest = retirementAge - startingAge + 1;
		 cell0.innerHTML = formatNumberWithCommas(totalSaved);
		 cell0 = row.insertCell(-1);
		 cell0.innerHTML = 'Total saved';
 
		 row = summaryTable.insertRow(-1);
		 cell0 = row.insertCell(-1);
		 totalYearsToInvest = retirementAge - startingAge + 1;
		 cell0.innerHTML = formatNumberWithCommas(totalEarnedInterest);
		 cell0 = row.insertCell(-1);
		 cell0.innerHTML = 'Earned Interestd';
 
		 // myTable.rows[0].cells[1].innerHTML = 'Hello';
		 // // write debugging info to the console
		 // console.log(
		 //     leftPadString(i.toString(), ' ', 2)
		 //     + leftPadString(formatNumberWithCommas(invest),  ' ', 8)
		 //     + leftPadString(formatNumberWithCommas(interest),' ',10)
		 //     + leftPadString(formatNumberWithCommas(balance), ' ',11)
		 // );
 
 
 
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
		 table.deleteRow(i - 1);
	 }
 }
 function clearSummaryTable(table) {
 
	 for (var i = table.rows.length; i > 0; i--) {
		 table.deleteRow(i - 1);
	 }
 }