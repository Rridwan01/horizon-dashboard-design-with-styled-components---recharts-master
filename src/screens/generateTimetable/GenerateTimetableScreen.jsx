import React, { useState, useEffect, useRef } from "react";
import { GenerateWrap } from "./GenerateTimetableScreen.styles";
import { MdSettings, MdPlayArrow, MdStop, MdCheckCircle } from "react-icons/md";

const GenerateTimetableScreen = () => {
  const [algorithm, setAlgorithm] = useState("GA");
  
  // Simulation States
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [metrics, setMetrics] = useState({ iteration: 0, fitness: 0, clashes: 124 });
  const [logs, setLogs] = useState([
    { type: "info", text: "System Ready. Awaiting engine start..." }
  ]);

  // Terminal Auto-Scroll Ref
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [logs]);

  // FAKE BACKEND SIMULATION
  useEffect(() => {
    let interval;
    if (isRunning && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + Math.random() * 5;
          if (next >= 100) return 100;
          return next;
        });

        setMetrics((prev) => ({
          iteration: prev.iteration + Math.floor(Math.random() * 50),
          fitness: Math.min(100, prev.fitness + (Math.random() * 2)),
          clashes: Math.max(0, prev.clashes - Math.floor(Math.random() * 3)),
        }));

        const newLog = generateMockLog(algorithm);
        setLogs((prev) => [...prev, newLog]);

      }, 600); // Speed of the simulation
    } else if (progress >= 100 && isRunning) {
      setIsRunning(false);
      setIsCompleted(true);
      setMetrics((prev) => ({ ...prev, fitness: 100, clashes: 0 }));
      setLogs((prev) => [...prev, { type: "success", text: "Optimal Timetable Generated Successfully!" }]);
    }
    return () => clearInterval(interval);
  }, [isRunning, progress, algorithm]);

  const generateMockLog = (algo) => {
    const time = new Date().toLocaleTimeString();
    const gaPhrases = ["Applying Crossover to Population...", "Evaluating Fitness Function...", "Mutation Triggered on Chromosome 42...", "Selecting Elites..."];
    const saPhrases = ["Cooling Temperature...", "Accepting Sub-optimal State to escape local minimum...", "Perturbing Schedule...", "Calculating Energy Difference..."];
    
    const phrases = algo === "GA" ? gaPhrases : saPhrases;
    const text = phrases[Math.floor(Math.random() * phrases.length)];
    return { type: "info", time, text };
  };

  const handleStart = () => {
    setLogs([{ type: "info", time: new Date().toLocaleTimeString(), text: `Initializing ${algorithm === 'GA' ? 'Genetic Algorithm' : 'Simulated Annealing'} Engine...` }]);
    setProgress(0);
    setMetrics({ iteration: 0, fitness: 12.5, clashes: 156 });
    setIsCompleted(false);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    setLogs((prev) => [...prev, { type: "warning", time: new Date().toLocaleTimeString(), text: "Process Terminated by User." }]);
  };

  return (
    <GenerateWrap>
      <div className="screen-header">
        <h1>Timetable Engine</h1>
        <p>Configure parameters and execute the optimization algorithm.</p>
      </div>

      <div className="engine-grid">
        
        {/* LEFT COLUMN: Configuration */}
        <div className="config-panel">
          <h3 className="panel-title"><MdSettings /> Algorithm Setup</h3>
          
          <div className="form-group">
            <label>Select Algorithm</label>
            <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)} disabled={isRunning}>
              <option value="GA">Genetic Algorithm (GA)</option>
              <option value="SA">Simulated Annealing (SA)</option>
              <option value="Compare">Compare Both (Benchmark)</option>
            </select>
          </div>

          {algorithm === "GA" && (
            <>
              <div className="form-group">
                <label>Population Size</label>
                <input type="number" defaultValue="500" disabled={isRunning} />
              </div>
              <div className="form-group">
                <label>Mutation Rate (%)</label>
                <input type="number" defaultValue="5" disabled={isRunning} />
              </div>
            </>
          )}

          {algorithm === "SA" && (
            <>
              <div className="form-group">
                <label>Initial Temperature</label>
                <input type="number" defaultValue="1000" disabled={isRunning} />
              </div>
              <div className="form-group">
                <label>Cooling Rate</label>
                <input type="number" defaultValue="0.95" step="0.01" disabled={isRunning} />
              </div>
            </>
          )}

          {!isRunning && !isCompleted && (
            <button className="run-btn" onClick={handleStart}>
              <MdPlayArrow size={24} /> Run Generation
            </button>
          )}

          {isRunning && (
            <button className="run-btn running" onClick={handleStop}>
              <MdStop size={24} /> Stop Execution
            </button>
          )}

          {isCompleted && (
            <button className="run-btn completed" onClick={() => setIsCompleted(false)}>
              <MdCheckCircle size={24} /> View Timetable
            </button>
          )}
        </div>

        {/* RIGHT COLUMN: Execution & Output */}
        <div className="execution-panel">
          
          <div className="metrics-grid">
            <div className="metric-card">
              <p className="metric-lbl">Iterations / Gen</p>
              <p className="metric-val">{metrics.iteration}</p>
            </div>
            <div className="metric-card">
              <p className="metric-lbl">Fitness Score</p>
              <p className="metric-val highlight">{metrics.fitness.toFixed(1)}%</p>
            </div>
            <div className="metric-card">
              <p className="metric-lbl">Hard Clashes</p>
              <p className="metric-val" style={{ color: metrics.clashes > 0 ? '#ee5d50' : '#01b574' }}>
                {metrics.clashes}
              </p>
            </div>
          </div>

          <div className="progress-section">
            <div className="progress-header">
              <span>Overall Progress</span>
              <span>{Math.floor(progress)}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          {/* Terminal / Console output */}
          <div className="terminal-window scrollbar" ref={terminalRef}>
            {logs.map((log, index) => (
              <div key={index} className={`log-line ${log.type}`}>
                {log.time && <span className="timestamp">[{log.time}]</span>}
                <span className="log-text">{log.text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </GenerateWrap>
  );
};

export default GenerateTimetableScreen;