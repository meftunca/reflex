class Collection extends Array {
  constructor(data = []) {
    super();
    this.extend(data);
  }
  extend(data = []) {
    data = Array.isArray(data) ? data : [];
    let len = this.length;
    if (Array.isArray(data))
      for (const item of data) {
        this.push(item);
      }
    else this.push(data);
    return this;
  }
  uniq() {
    return this.filter((value, index, self) => self.indexOf(value) === index);
  }
}
// window.test = (limit = 10) => {
//   let array = new Collection();
//   console.time("time");
//   let i = 0;
//   let obj = {
//     name: "Muhammed burak",
//     lastName: "Şentürk",
//     age: 24,
//   };
//   while (i < limit) {
//     i++;
//     array.push(obj);
//   }

//   console.timeEnd("time");
//   console.log("Response", array);
// };
export default Collection;
