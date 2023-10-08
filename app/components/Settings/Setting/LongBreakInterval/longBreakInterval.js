import React from "react";
import HeaderStyles from "../../header.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setTimerSettings } from "@/Redux/Slices/timerSlice";

export default function LongBreakInterval() {
  const dispatch = useDispatch();
  const { settings } = useSelector((state) => state.timerSetting);

  // TimerList öğelerini formatlayarak kullanımı kolaylaştırın
  const activeTimer = settings.longBreakInterval; // timerSlice ActiveTimer value degeri
  const onChange = (e) => {
    const newItem = e.target.value;
    dispatch(
      setTimerSettings({ settingName: "longBreakInterval", value: newItem })
    );
  };

  return (
    <div className={HeaderStyles.longBreakInterval}>
      <p>Long Break Interval</p>
      <input
        type="number"
        onChange={onChange}
        value={activeTimer} // timerSlice ActiveTimer value degeri
        min="1"
        max="60"
      />
    </div>
  );
}
