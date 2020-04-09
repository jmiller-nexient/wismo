export default function formatAccountNumber(value: string) {

  const formattedAccountNumber = `${value.substr(0,4)} ${value.substr(4,3)} ${value.substr(7,4)} ${value.substr(11,1)}`;

  return formattedAccountNumber;
}
