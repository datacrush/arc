import { Indicator, Label, Meter } from "../components/meter";

export function MeterDemo() {
  return (
    <div>
      <h2>Meter</h2>

      <p>Meter with explicit Label</p>

      <Meter min={0} max={100} value={75} labelledById="cpu-usage">
        <Label>Central Processing Unit (CPU) Usage</Label>
        <Indicator />
      </Meter>

      <p>Meter with Aria Label Specified on the Indicator</p>

      <Meter min={0} max={100} value={25}>
        <Indicator label="Central Processing Unit (CPU) Usage" />
      </Meter>
    </div>
  );
}

export default MeterDemo;
