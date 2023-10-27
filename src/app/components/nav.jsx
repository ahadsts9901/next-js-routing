"use client";

import React, { useState } from "react";
import "./nav.css";
import {
  BarChartFill,
  HouseFill,
  Image,
  List,
  PersonCheckFill,
  TelephoneFill,
  XLg,
} from "react-bootstrap-icons";
import Link from "next/link";

const Nav = () => {
  const [showNav, setShowNav] = useState("none");

  return (
    <div className="navBars">
      <div className="navs">
        <List
          onClick={() => {
            setShowNav("flex");
          }}
          className="burgerIcon"
        />
        {/* desktop */}
        <nav>
          <Link href="/">
            <li>
              <HouseFill /> Home
            </li>
          </Link>

          <Link href="/services">
            <li>
              <BarChartFill /> Services
            </li>
          </Link>

          <Link href="/gallery">
            <li>
              <Image /> Gallery
            </li>
          </Link>

          <Link href="/about">
            <li>
              <PersonCheckFill /> About
            </li>
          </Link>

          <Link href="/contact">
            <li>
              <TelephoneFill /> Contact
            </li>
          </Link>
        </nav>
      </div>
      <div className="navMob" style={{ display: `${showNav}` }}>
        <XLg
          className="xIcon"
          onClick={() => {
            setShowNav("none");
          }}
        />
        <Link href="/">
          <li>
            <HouseFill /> Home
          </li>
        </Link>

        <Link href="/services">
          <li>
            <BarChartFill /> Services
          </li>
        </Link>

        <Link href="/gallery">
          <li>
            <Image /> Gallery
          </li>
        </Link>

        <Link href="/about">
          <li>
            <PersonCheckFill /> About
          </li>
        </Link>

        <Link href="/contact">
          <li>
            <TelephoneFill /> Contact
          </li>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
