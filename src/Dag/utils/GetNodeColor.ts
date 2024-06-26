export const getNodeColor = (n: number) => {
  return (
    "#" + ((n * 1234567) % Math.pow(n + 3, 24)).toString(16).padStart(6, "0")
  );
};
