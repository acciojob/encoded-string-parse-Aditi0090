const parseCode = (str) => {
  const parts = str.split(/0+/);
  return {
    firstName: parts[0],
    lastName: parts[1],
    id: parts[2]
  };
};

const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
