import React, { Component } from "react";

export class GeneralInfo extends Component {
    render() {
        return (
            <>
            <fieldset className="info">
                <legend>General Info Section</legend>
                <label htmlFor="first-name">First name: </label>
                <input
                    type="text"
                    id="first-name"
                    maxLength={20}
                    placeholder="First name"
                    required={true}
                />
                <br />
                <label htmlFor="last-name">Last name: </label>
                <input
                    type="text"
                    id="last-name"
                    maxLength={20}
                    placeholder="Last name"
                    required={true}
                />
                <br />
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required={true}
                />
                <br />
                <label htmlFor="phone-number">Phone number: </label>
                <input
                    type="tel"
                    id="phone-number"
                    placeholder="Phone number"
                    required={true}
                />
            </fieldset>
            </>
        )
    }
}