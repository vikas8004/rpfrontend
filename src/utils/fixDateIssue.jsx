export function fixDateIssue(date) {
  let index = date.indexOf("T");
  date.replace(date.substring(index), "");
  return new Date(date).toLocaleDateString();
}
"hello".substring()