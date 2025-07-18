import React from "react";
import { calculateAge } from "../util/calculateAge";

function AgeDisplay({ day, month, year }) {
    let years = 0, months = 0, days = 0;

    if (day && month && year) {
        const age = calculateAge(day, month, year);
        years = age.years;
        months = age.months;
        days = age.days;
    }

    return (
        <div>
            <h2><span>{years}</span> years</h2>
            <h2><span>{months}</span> months</h2>
            <h2><span>{days}</span> days</h2>
        </div>
    );
}

export default AgeDisplay;
