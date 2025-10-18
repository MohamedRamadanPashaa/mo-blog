export const helloMessage = (name, gender) => {
  return `Hello ${
    gender === "male" ? "Mr" : gender === "female" ? "Miss" : ""
  } ${name.split(" ").filter((n) => n.trim().length > 0)[0]}`;
};
