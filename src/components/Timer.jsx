//src/components/Timer.jsx

import React, { useState } from "react";
import { Clock } from "lucide-react";
import { useStopwatch } from "../hooks/useStopwatch";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import LapList from "./LapList";
import HelpModal from "./HelpModal";
import styles from './Timer.module.css';

const Timer = () => {
  const { time, isRunning, toggle, reset, getCurrentTime } = useStopwatch();
  const [laps, setLaps] = useState([]);
  const [showHelp, setShowHelp] = useState(false);

  const recordLap = () => {
    const current = getCurrentTime();
    setLaps((prev) => [current, ...prev]);
  };

  useKeyboardShortcuts({
    onToggle: toggle,
    onReset: reset,
    onLap: recordLap,
    onOpenHelp: () => setShowHelp(true)
  });

  return (
    <div className={styles.container}>
        <div className = {styles.box}>
            <h1 className={styles.title}>Timer</h1>
            <TimerDisplay time={time} />
            <TimerControls
                isRunning={isRunning}
                toggle={toggle}
                reset={reset}
                time={time}
                recordLap={recordLap}
            />
            <Clock size={48} color="#10b981" strokeWidth={1.5} />
            <LapList laps={laps} />
        </div>
        {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </div>
  );
};

export default Timer;
