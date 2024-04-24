

import React from "react";

function Navbar({features}) {
    return(
        <div>
            <h1>{features.name}</h1>
            <h2>{features.age}</h2>
            <h3>{features.parent}</h3>
        </div>
    )
}
export default Navbar;