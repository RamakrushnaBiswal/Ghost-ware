import React from "react";
import { BsHeartFill } from "react-icons/bs";


export const Footer = () => {
  return (
    <footer className="p-6 md:py-10 md:px-20">
      <div className="flex flex-wrap justify-between">
        <div>
          <p className="size-copyright">Copyright 2024 © Latinoamérica para el Mundo. All rights reserved.</p>
        </div>
        <div>
          <p className="size-copyright flex items-center">
            Make with
            <span className="px-2">
              <BsHeartFill fill="red" />
            </span>{" "}
            for BASED LATAM
          </p>
        </div>
      </div>
    </footer>
  );
};
