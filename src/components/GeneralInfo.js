import React, { Component } from "react";

export class GeneralInfo extends Component {
    render() {
        return (
            <>
            <fieldset>
                <legend>General Info Section</legend>
                <form>
                <label htmlFor="first-name">First name: </label>
                <input
                    type="text"
                    id="first-name"
                    maxLength={20}
                    required={true}
                />
                <br />
                <label htmlFor="last-name">Last name: </label>
                <input
                    type="text"
                    id="last-name"
                    maxLength={20}
                    required={true}
                />
                <br />
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    id="email"
                    required={true}
                />
                <br />
                <label htmlFor="phone-number">Phone number: </label>
                <input
                    type="tel"
                    id="phone-number"
                    required={true}
                />
                </form>
            </fieldset>
            </>
        )
    }
}