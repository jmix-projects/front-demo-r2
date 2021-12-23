import React from "react";

export function BrokenComponent() {
  if (true) {
    throw new Error('Some Exception Example');
  }
  return <div>noop</div>;
}
