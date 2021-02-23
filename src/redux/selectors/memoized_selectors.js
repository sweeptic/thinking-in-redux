// A memoized selector caches its result and returns this cached result every time the selector is invoked
// with the same arguments. This performance optimization technique is very efficient for selectors
// that perform heavy calculations or traverse a large data set.
// I encourage you to use the official selector library for Redux, reselect, which implements memoized
// selectors while exposing a clean API for creating and composing selectors.
