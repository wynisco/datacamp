import React from "react";
import styles from "./styles.module.css";
import TechStackSvg from "@site/static/img/techstack.svg";
import {
  NotificationFilled,
  PlayCircleFilled,
  CalendarOutlined,
} from "@ant-design/icons";
import { Timeline, Button, Popover } from "antd";

function TechStack() {
  return (
    <div className={styles.Container}>
      <h1>Our Tech Stack</h1>
      <br />
      <TechStackSvg />
    </div>
  );
}

export { TechStack };
