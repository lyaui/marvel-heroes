function calcTotalPoints(obj: Record<string, number> | null): number {
  return Object.values(obj ?? {}).reduce((_acc, _cur) => _acc + _cur, 0);
}

export default calcTotalPoints;
