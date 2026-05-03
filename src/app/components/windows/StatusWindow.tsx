"use client";

import React from "react";
import { DataRow } from "../os/molecules/DataRow";

export function StatusWindow() {
  return (
    <div className="window-body-prose" style={{ paddingTop: 4 }}>
      <DataRow label="MODE" value="OPEN" valueColor="g" />
      <DataRow label="REMOTE" value="YES" valueColor="g" />
      <DataRow label="EXP" value="3+ YRS" valueColor="o" />
      <DataRow label="BASE" value="OR, USA" />
      <DataRow label="TYPE" value="FULL-STK" valueColor="p" />
    </div>
  );
}
