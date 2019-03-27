// @flow

// This should produce an error: "Cannot resolve name React."
declare type A1 = React.Element<'a'>;

// With `export` here, no error is produced. Delete `export` from the
// beginning of the line, and run Flow again. Now type A1 above
// generates an error! (Note: it doesn't matter if the type is opaque.)
export opaque type B1 = string;
