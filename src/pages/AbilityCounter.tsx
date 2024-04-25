type AbilityCounterProps = {
  label: string;
  value: number;
};

function AbilityCounter({ label, value }: AbilityCounterProps) {
  return <div>{`${label ? label.toUpperCase() : '--'}: ${value ?? '--'}`}</div>;
}

export default AbilityCounter;
