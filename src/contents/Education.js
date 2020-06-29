import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="MS Computer Science" where="Binghamton University (SUNY)" from="August 2019" to="Present"/>
<Widecard title="B.Tech" where="Lovely Professional University(India)" from="2011" to="2015"/>
</div>
)
}
}
export default Education