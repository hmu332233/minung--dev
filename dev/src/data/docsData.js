const pagination = {
  name: 'pagination',
  description: '배열의 페이징을 해준다.\n배열과 페이지당 사이즈, 페이지 번호를 받아 페이지에 해당하는 배열만큼을 리턴한다.',
  def: `function paginate (array, page_size, page_number) {
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}`,
  runFunctions: [
    'paginate([1, 2, 3, 4, 5, 6], 2, 1); // [3, 4]',
    'paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4, 0); // [1, 2, 3, 4]'
  ]
};

const truncateLongText = {
  name: 'truncateLongText',
  description: '텍스트와 최대 길이, 대체 텍스트를 받아 최대 길이를 넘는 문자에 대해서 대체 텍스트로 변환한다',
  def: `function truncateLongText(_text, _maxLength, _lastText) {
  var text = _text;
	var maxLength = _maxLength || 20;
	var lastText = _lastText || "...";

	if (text.length > maxLength) {
		text = text.substr(0, maxLength) + lastText;
	}
	return text;
};`,
  runFunctions: [
    'truncateLongText("가나다라마바사", 3); // 가나다...',
    'truncateLongText("가나다라마바사", 5, "###"); // 가나다라마###'
  ]
};

const orderBy = {
  name: 'orderBy',
  description: 'object의 property들로 정렬을 해준다\n배열과 정렬할 property 이름 그리고 정렬될 방향을 인자로 넣어준다.',
  def: `const orderBy = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );`,
  runFunctions: [
    "const users = [{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }];\norderBy(users, ['name', 'age'], ['asc', 'desc']); // [{name: 'barney', age: 36}, {name: 'fred', age: 48}, {name: 'fred', age: 40}]",
    "const users = [{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }];\norderBy(users, ['name', 'age']); // [{name: 'barney', age: 36}, {name: 'fred', age: 40}, {name: 'fred', age: 48}]"
  ]
};

const overwrite = {
  name: 'overwrite',
  description: '두 object 사이에서 obj1와 obj2에 공통으로 있는 속성들만 obj1에 덮어씌운다',
  def: `const overwrite = (object1, object2) => {
  return Object.keys(object1).reduce((newObject, key) => {
    if (object2[key]) {
      newObject[key] = object2[key];
    }
    return newObject;
  }, object1);
};`,
  runFunctions: [
    'overwrite({ a: 1, b: 3}, { a: 2, d: 4}) // { a: 2, b: 3}'
  ]
}



const getPropertyInJson = {
  name: 'getPropertyInJson',
  description: '"user.id"와 같은 형식으로 object에서 값을 찾는다.',
  def: `const getPropertyInJson = (object, propertyName) => {
  const parts = propertyName.replace(/\\[([0-9]+)\\]/g, '.$1').split('.');

  let property = object;
  for (let i = 0 ; i < parts.length ; i++ ) {

    property = property[parts[i]];
  }

  return property;
}`,
  runFunctions: [
    'getPropertyInJson({ site: { name: "github", users: ["user1", "user2"] }}, "site.users[1]") // user2'
  ]
}

const getPropertyInXml = {
  name: 'getPropertyInXml',
  description: '"user.id"와 같은 형식으로 xmlString에서 값을 찾는다.',
  def: `const getPropertyInXml = (xmlString, propertyName) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

  const parts = propertyName.split('.');

  let property = xmlDoc;
  for (let i = 0 ; i < parts.length ; i++ ) {
    const matched = parts[i].match(/(.+)(\\[(\\d+)\\])/);
    const tagName = matched && matched[1] || parts[i];
    const arrIndex = matched && matched[3] || 0;
    property = property.getElementsByTagName(tagName)[arrIndex];	
  }

  return property && property.childNodes[0].nodeValue || '';
}`,
  runFunctions: [
    "getPropertyInXml('<site><name>github</name><user>user1</user><user>user2</user></site>', 'site.user[1]') // user2"
  ]
}

const docsData = [
  pagination,
  truncateLongText,
  orderBy,
  overwrite,
  getPropertyInJson,
  getPropertyInXml
];

export default docsData;