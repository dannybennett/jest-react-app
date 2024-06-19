export default interface IAppliance {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  id: number;
  uid: string;
  brand: string;
  equipment: string;
}
