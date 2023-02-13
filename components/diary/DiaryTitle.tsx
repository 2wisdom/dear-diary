import React from "react";
import { DiaryTitleStyle } from "../../styles/DiaryStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCalendarAlt } from "@fortawesome/fontawesome-free-solid";

export default function DiaryTitle() {
  return (
    <DiaryTitleStyle>
      {/* calendar */}
      <FontAwesomeIcon
        icon={faCalendarAlt as IconProp}
        style={{ width: 40, height: 40 }}
      />

      {/* title */}
      <input />
    </DiaryTitleStyle>
  );
}
