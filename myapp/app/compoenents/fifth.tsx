import React from 'react'

interface FirthProps {
    onclickHandlerNew: () => string;
}

export default function Fifth(props: FirthProps) {
    return (
        <div>
            <h1>{props.onclickHandlerNew()}</h1>
        </div>
    );
}
