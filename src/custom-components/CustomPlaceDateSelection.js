import React from "react";
import { useNavigate } from 'react-router-dom';
import CustomSelectionDropdown from "./CustomSelectionDropdown/CustomSelectionDropdown";

// Define the CustomPlaceDateType object type
const CustomPlaceDateType = {
    destination: '',
    date: '',
    time: '',
    description: '',
    rating: 0,
    image: '',
    id: 0
}

const customPlaceDateDropDownConst = [
    {
        icon: 'destination.jpeg',
        primaryText: 'Destination',
        secondaryText: 'Where are you going',
        value: 'destination',
        type: 'text',
        placeholder: 'Enter Destination',
        isDropDownRequired: true,
        width: '80px',
        required: true
    },
    {
        icon: 'activity.jpeg',
        primaryText: 'Activity',
        secondaryText: 'All activity',
        value: 'activity',
        type: 'text',
        placeholder: 'Enter Activity',
        isDropDownRequired: true,
        width: '90px',
        required: true
    },
    {
        icon: 'date.jpeg',
        primaryText: 'Date',
        secondaryText: 'Date From',
        value: 'date',
        type: 'text',
        placeholder: 'Enter Date',
        isDropDownRequired: true,
        width: '120px',
        required: true
    },
    {
        icon: 'guest.jpeg',
        primaryText: 'Guests',
        secondaryText: 'Where are you going',
        value: 'guest',
        type: 'text',
        placeholder: 'Enter Guests',
        isDropDownRequired: true,
        width: '100px',
        required: true
    },
    {
        icon: 'guest.jpeg',
        primaryText: 'Guests',
        secondaryText: 'Where are you going',
        value: 'guest',
        type: 'text',
        placeholder: 'Enter Guests',
        isDropDownRequired: true,
        width: '100px',
        required: true
    }

]

// Define the CustomPlaceDateProps object type
export const CustomPlaceDateProps = {
    placeDateProps: CustomPlaceDateType
}

// Define the CustomPlaceDateSelection component
export const CustomPlaceDateSelection = (props) => {
    const { placeDateProps } = props;

    // Add some JSX elements to the component
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div>
                    <CustomSelectionDropdown customPlaceDateDropDownConst={customPlaceDateDropDownConst} />
                </div>

            </div>
        </div>
    );
};

export default CustomPlaceDateSelection;