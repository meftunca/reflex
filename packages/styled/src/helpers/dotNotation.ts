/* 
  Nesnelere erişimi yollar ile yapmanın kolay yolu
  @örnek
  a = {
    b:[
        {
        c:1
        }
    ]
  } gibi bir nesne olsun
  biz c değerini  `dotNotation(a,a.b[0].c)` ile alabiliyoruz
*/
export default function dotNotation(
  target: { [key: string]: any },
  path: string
) {
  path = path.replace(/\[(\w+)\]/g, ".$1"); // convert indexes to properties
  path = path.replace(/^\./, ""); // strip a leading dot
  let pathList = path.split(".");
  for (var i = 0, n = pathList.length; i < n; ++i) {
    let k = pathList[i];
    if (k in target) {
      target = target[k];
    } else {
      return;
    }
  }
  return target;
}
