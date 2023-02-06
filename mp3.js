'use strict'
// Submission Information
// [Fill in assignment information below this line]
// Name: Cristopher De La Cruz
// Assignment/Purpose: Mini Program 3
// Due Date: 2/05/2023
// Version: 1

const mCDCurrentYear = 2023;

function mDeLaCruzCristopherMP3() {
        // The program body for MP2-MP6 goes here
        // VARIABLES DECLARATION SECTION
        // Input
            var strCDFirstName;
            var strCDLastName;
            var strCDMiddleName;
            var strCDFullName;
            var blnCDGender;
        // Processing
            var numCDAge;
            var strCDAge;
        // Output
            var strCDOutput;
        // VARIABLE DATA ASSIGNMENTS
        // Assign the values to the variables created in the DECLARATION SECTION
        // Input
            var strCDFirstName = "Cristopher";
            var strCDLastName = "De La Cruz";
            var strCDMiddleName = "Isaac";
            var strCDFullName = "Cristopher Isaac De La Cruz";
            var blnCDGender = 0;
        // Processing
            numCDAge = mCDCurrentYear - 1999;
            strCDAge = numCDAge.toString();
        // Output
            strCDOutput = strCDAge;
    return strCDOutput;
}

mDeLaCruzCristopherMP3();