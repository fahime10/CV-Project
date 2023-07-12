import React, { Component } from "react";

export class CVGenInfo extends Component {
    render() {
        const { firstName, lastName, email, phone, aboutMe } = this.props;
        return (
            <div className="gen-info">
                <p>{firstName} {lastName}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{aboutMe}</p>
            </div>
        );
    }
}