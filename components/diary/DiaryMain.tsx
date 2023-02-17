import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/fontawesome-free-solid";
import DiaryImage from "./DiaryImage";
import { DiaryMainStyle } from "../../styles/DiaryStyle";

export default function DiaryMain() {
  return (
    <DiaryMainStyle>
      <div className="main-container">
        <div>
          <FontAwesomeIcon
            className="chevron-icon"
            icon={faChevronLeft as IconProp}
            style={{ width: 25, height: 25 }}
          />
        </div>
        <div>
          <DiaryImage />
        </div>
        <div>
          <FontAwesomeIcon
            className="chevron-icon"
            icon={faChevronRight as IconProp}
            style={{ width: 25, height: 25 }}
          />
        </div>
      </div>
    </DiaryMainStyle>
  );
}
