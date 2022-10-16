import React from 'react'
import ACard from './ACard';

export default function AInfoCard({ title, money, currency }: any) {
  return (
    <ACard sx={{ padding: 1 }}>
      <h5>{title}</h5>
      <h6>
        {money} <span style={{color:"#aaa"}}>({currency})</span>
      </h6>
    </ACard>
  );
}
