const DATA_NORMALIZED = 'DATA_NORMALIZED';

// new event action to notify the application about the normalize operation.
export const dataNormalized = ({ feature }) => ({
  type: `${feature} ${DATA_NORMALIZED}`,
  meta: { feature },
});
