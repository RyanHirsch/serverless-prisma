function reverse(str: string): string {
  return str === "" ? "" : reverse(str.substr(1)) + str.charAt(0);
}

export function ping(_: any, { id }: { id: string }) {
  return reverse(id);
}
