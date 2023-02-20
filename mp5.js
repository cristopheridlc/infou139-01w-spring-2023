'use strict'
// Submission Information
// [Fill in assignment information below this line]
// Name: Cristopher De La Cruz
// Assignment/Purpose: Mini Program 5
// Due Date: 2/19/2023
// Version: 1

const mCDCurrentYear = 2023;

function mDeLaCruzCristopherMP5() {
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
            var strCDGender;
        // Output
            var strCDOutput;
        // VARIABLE DATA ASSIGNMENTS
        // Assign the values to the variables created in the DECLARATION SECTION
        // Input
            strCDFirstName = "Cristopher";
            strCDLastName = "De La Cruz";
            strCDMiddleName = "Isaac";
            blnCDGender = false;
        // Processing
            numCDAge = mCDCurrentYear - 1999;
            strCDAge = numCDAge.toString();
            strCDFullName = strCDFirstName + " " + strCDMiddleName + " " + strCDLastName;

            if (blnCDGender === true) {
                strCDGender = "Female"
            } else {
                strCDGender = "Male"
            };

        // Output
            strCDOutput = strCDFullName + " is " + strCDGender + " and " + strCDAge + " years old!";
    return strCDOutput;
}

mDeLaCruzCristopherMP5();
