import './style_sheets/style.css';
import './style_sheets/landing.css';
import preactLogo from "../../assets/preact.svg";
import DropDownSearch from "../../components/DropDownSearch";


export function Home() {
    return (
        <div className="home">
            <a href="https://preactjs.com" target="_blank">
                <img src={preactLogo} alt="Preact logo" height="160" width="160"/>
            </a>
            <h1> Get ready to be SkyBound with your points. </h1>
            <Search/>
        </div>
    );
}

function Search() {
    const airports = ['New York', 'London', 'Sydney', 'Tokyo', 'Paris', 'Rome'];
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return (
        <div class="search">
            <form>
                <div className="input-group">
                    <DropDownSearch label= "Departure" listId='departureAirports' options={airports}/>
                    <DropDownSearch label="Return" listId='returnAirports' options={airports}/>
                    <DropDownSearch label="When" listId='months' options={months}/>
                </div>

                <input type="submit" value="Search Flights"/>

            </form>
        </div>
    );
}
