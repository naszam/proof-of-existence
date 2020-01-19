import { DrizzleContext } from "drizzle-react";
import React from "react";
import AccountInfo from "./AccountInfo";
import './App.css';


const DrizzleProvider = () => (
    <DrizzleContext.Consumer>
        {drizzleContext => {
            const { drizzle, drizzleState, initialized } = drizzleContext;

            // wait to be initialized
            if (!initialized) return "Loading...";

            return (
                <React.Fragment>
                    <AccountInfo drizzle={drizzle} drizzleState={drizzleState} />
                </React.Fragment>
            )
        }}
    </DrizzleContext.Consumer>
)

export default DrizzleProvider;