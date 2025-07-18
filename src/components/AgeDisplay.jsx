import React from "react";
import { calculateAge } from "../calculateAge";

function AgeDisplay({ day, month, year }) {
    const { years, months, days } = calculateAge(day, month, year);

    return (
        <div>
            <h2><span>{years}</span> years</h2>
            <h2><span>{months}</span> months</h2>
            <h2><span>{days}</span> days</h2>
        </div>
    );
}

export default AgeDisplay;