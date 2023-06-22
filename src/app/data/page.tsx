"use client";
import React from "react";

export default function page() {
  const handle = () => {
    const res = fetch("/resturants", {
      method: "POST",
    });
  };

  return <div onClick={handle}>page</div>;
}
