import React from "react"
import AgeDisplay from "./components/AgeDisplay";
import Header from "./components/Header";

export default function App() {
    const [inputDate, setInputDate] = React.useState({
        day: "",
        month: "",
        year: ""
    });

    const date = new Date();
    const currentYear = date.getFullYear();

    function getAge(formData) {
        const day = formData.get("day");
        const month = formData.get("month");
        const year = formData.get("year");
        setInputDate({ day, month, year });
        console.log({ day, month, year });
    }

    return (
        <main>
            <Header/>
            <article className="main-container">
                    <div className="form-container">
                        <form
                            id="form"
                            className="input-form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                getAge(formData);
                            }}
                        >
                            <label htmlFor="day">DAY</label>
                            <input type="number" id="day" name="day" placeholder="e.g. 29" min="1" max="31"/><br />

                            <label htmlFor="month">MONTH</label>
                            <input type="number" id="month" name="month" placeholder="e.g. 02" min="1" max="12"/><br />

                            <label htmlFor="year">YEAR</label>
                            <input type="number" id="year" name="year" placeholder="e.g. 2004" min="1" max={currentYear}/><br />

                            <button type="submit">Get Age</button>
                        </form>
                        
                    </div>

                    <AgeDisplay 
                        day={inputDate.day} 
                        month={inputDate.month} 
                        year={inputDate.year} 
                    />

                    
            </article>
        </main>
    )
}