import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Breadcrumbs.css'

const Breadcrumbs = (props) => {
    const { breadcrumbs } = props.breadcrumbs;
    return (
        <div className="px-cust-5 pb-2 pt-4">
            {breadcrumbs.map(bc => (
                <Link className="link-blue" key={bc.label} to={bc.url}>
                    {bc.label}
                </Link>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    breadcrumbs: state.breadcrumbs
})

export default connect(mapStateToProps)(Breadcrumbs);