export default interface IAddress {
  readonly city: string;
  readonly line1: string;
  readonly line2: (string | null);
  readonly state: string;
  readonly zip: string;
}
