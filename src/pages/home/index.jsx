import React, { useState } from 'react';
import mockContactData from '../../data/mockData';

export default function Home(props) {
  const [list, setList] = useState(mockContactData);
  return list.map((item) => <div key={item.id}>{item.firstName}</div>);
}
