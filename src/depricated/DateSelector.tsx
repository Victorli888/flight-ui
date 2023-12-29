// MonthSlider.tsx
import { h, FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';
import '../pages/Home/style_sheets/dateSelector.css';

interface dateSelectorProps {
    onMonthChange: (selectedMonth: string) => void;
}

const DateSelector: FunctionalComponent<dateSelectorProps> = ({ onMonthChange }) => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const [selectedMonth, setSelectedMonth] = useState(months[0]);

    const handleSlide = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        const index = parseInt(value, 10);
        setSelectedMonth(months[index]);
        onMonthChange(months[index]);
    };

    return (
        <div class="month-slider">
            <label>Select Month:</label>
    <input
    type="range"
    min="0"
    max={months.length - 1}
    value={months.indexOf(selectedMonth)}
    onInput={handleSlide}
    />
    <span>{selectedMonth}</span>
    </div>
);
};

export default DateSelector;
