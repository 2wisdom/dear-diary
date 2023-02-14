import { faCalendarAlt } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function DiaryCalendar() {
  return (
    <FontAwesomeIcon
      icon={faCalendarAlt as IconProp}
      style={{ width: 40, height: 40 }}
    />
  );
}
