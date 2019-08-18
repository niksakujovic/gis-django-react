import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import Map from './Map';


const OFFICES = [
  {
    key: 'CHICAGO',
    name: 'Chicago',
    address: '500 W Madison St, Chicago, IL 60661',
    coords: [41.8823052,-87.6426768],
  },
  {
    key: 'DETROIT',
    name: 'Detroit',
    address: '4000 Town Center Ste 400, Southfield, MI 48075',
    coords: [42.4792558, -83.2461996],
  },
  {
    key: 'MEXICO',
    name: 'Mexico',
    address: '',
    coords: [19.3954682, -99.2930692],
  },
  {
    key: 'SAN_FRANCISCO',
    name: 'San Francisco',
    address: '300 California St, San Francisco, CA 94104',
    coords: [37.7933546, -122.4003101],
  },
];


export default function App() {

  /*
    Main App State
  */
  const [office, setOffice] = useState(OFFICES[0]);

  return (
    <div>

      <OfficeNavBar offices={OFFICES} activeOffice={office} setOffice={setOffice} />

      <Map office={office}/>

    </div>
  );
}


function OfficeNavBar(props) {
  return (
    <Nav tabs>
      {
        props.offices.map(office => (

          <NavItem key={office.key} active={office.key === props.activeOffice.key}>
            <NavLink
              active={office.key === props.activeOffice.key}
              href={`#${office.name}`}
              onClick={() => props.setOffice(office)}
            >
              {office.name}
            </NavLink>
          </NavItem>

        ))
      }
    </Nav>
  );
}
